import React, { useContext, useState } from "react";
import { displayPanel, saveData, addZeroToFirst } from "../functions";
import PanelInput from "./panel-input";
import { invoiceContext } from "../App";
import { ReactComponent as TrashIco } from '../assets/icons/trash.svg';
import { get } from '../createElement';
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
import createUniqueTag from "../utils/createUniqueTag";

const notyf = new Notyf({
    types: [
        {
            type: 'error',
            background: 'rgb(225 29 72)'
        },
        {
            type: 'success',
            background: 'rgb(16 185 129)'
        },
    ]
});
const panelRef = React.createRef();
const panelFatherRef = React.createRef();
const monthArr = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const Panel = ({ IS_EDIT_PANEL }) => {
    const { setInoviceData, setAllInoviceData, invoiceData, allInvoiceData } = useContext(invoiceContext);
    const totalPriceRef = React.createRef();
    const qtyRef = React.createRef();
    const priceRef = React.createRef();

    // make copy of invoiceData to make it absulotly iterible
    const invoiceData_ = JSON.parse(JSON.stringify(invoiceData));

    // empty all value of invoice object
    if (!IS_EDIT_PANEL) {
        let i = 0;
        for (let key in invoiceData_) {
            if (i === 4 || i === 3 || i === 5 || i === 6) {
                for (let key_ in invoiceData_[key]) {
                    invoiceData_[key][key_] = '';
                }
            }
            else invoiceData_[key] = '';

            i++;
        }
    }

    let { tag, clientLocation, sellerLoaction, projectDescription, paymentDue, clientName, email } = invoiceData_ === undefined ? '' : { ...invoiceData_ };
    let { s_street, s_postCode, s_city, s_country } = sellerLoaction === undefined ? '' : { ...sellerLoaction };
    let { c_street, c_postCode, c_city, c_country } = clientLocation === undefined ? '' : { ...clientLocation };
    let { month, day, year } = paymentDue === undefined ? '' : { ...paymentDue };
    month = month === undefined ? '' : month;

    if (invoiceData_.items === '') invoiceData_.items = [];
    const [items_, setItems] = useState(invoiceData_.items);

    let IS_ANY_ITEM_ADDED = false;
    let IS_ANY_INPUT_EMPTY;

    // write comments
    const addItem = () => {
        items_.push({
            name: '',
            qty: '',
            price: ''
        });
        setItems([...items_]);
    }
    const deleteItem = itemsIndex => {
        items_.splice(itemsIndex, 1);
        setItems([...items_]);
    }
    const updatePrice = () => totalPriceRef.current.innerHTML = qtyRef.current.value * priceRef.current.value;

    // clean codes
    const checkValidation = () => {
        const allInput = get('.displayPanel input', true);
        IS_ANY_INPUT_EMPTY = Object.entries(allInput)?.every(v => v?.[1].value !== '');

        for (let index = 0; index < allInput.length; index++) {
            const { value, classList, offsetTop } = allInput[index];

            if (allInput.length < 14) {
                IS_ANY_ITEM_ADDED = false;
            }
            else IS_ANY_ITEM_ADDED = true;

            if (value === '') {
                classList.add('empty-field');
                panelRef.current.scrollTo({
                    top: offsetTop - 80,
                    behavior: "smooth",
                });
            }
            else if (value !== '') {
                classList.remove('empty-field');
            }

            else if (Object.entries(allInput)?.every(v => v?.[1].value !== '')) {
                switch (index) {
                    case 0:
                        sellerLoaction.s_street = value;
                        break;
                    case 1:
                        sellerLoaction.s_city = value;
                        break;
                    case 2:
                        sellerLoaction.s_postCode = value;
                        break;
                    case 3:
                        sellerLoaction.s_country = value;
                        break;
                    case 4:
                        invoiceData_.clientName = value;
                        break;
                    case 5:
                        invoiceData_.email = value;
                        break;
                    case 6:
                        clientLocation.c_street = value;
                        break;
                    case 7:
                        clientLocation.c_city = value;
                        break;
                    case 8:
                        clientLocation.c_postCode = value;
                        break;
                    case 9:
                        clientLocation.c_country = value;
                        break;
                    case 10:
                        invoiceData_.invoiceDate = {
                            year: value.substr(0, 4),
                            month: [monthArr[Number(value.substr(5, 2))], Number(value.substr(5, 2))],
                            day: Number(value.substr(8, 2)),
                        };
                        break;
                    case 11:
                        invoiceData_.paymentDue = {
                            year: value.substr(0, 4),
                            month: [monthArr[Number(value.substr(5, 2))], Number(value.substr(5, 2))],
                            day: Number(value.substr(8, 2)),
                        };
                        break;
                    case 12:
                        invoiceData_.projectDescription = value;
                        break;
                    case 13:
                        let newItem = [...items_];
                        get('#items > div', true).forEach((v, index, arr) => {
                            v.childNodes.forEach((v, i) => {
                                const value_ = v.querySelector('input') === null ? '' : v.querySelector('input').value;
                                if (i === 0) newItem[index].name = value_;
                                if (i === 1) newItem[index].qty = value_;
                                if (i === 2) newItem[index].price = value_;
                            });
                        });

                        invoiceData_.items = newItem;
                        break;
                    default: break;
                }
            }
        }
    }
    const editInvoice = () => {
        checkValidation();

        if (!IS_ANY_ITEM_ADDED) {
            get('#add-item-btn').classList.add('shake');
            setTimeout(() => get('#add-item-btn').classList.remove('shake'), 600);
            return notyf.error('No Item Added!');
        }
        if (!IS_ANY_INPUT_EMPTY) {
            return notyf.error('Some Fields Are Empty!');
        }
        else if (IS_ANY_ITEM_ADDED && IS_ANY_INPUT_EMPTY && !IS_EDIT_PANEL) {
            invoiceData_.status = 0;
            invoiceData_.tag = createUniqueTag(allInvoiceData);

            allInvoiceData.push(invoiceData_);
            setAllInoviceData([...allInvoiceData]);
            saveData(allInvoiceData);

            notyf.success('Invoice Created Successfuly!');

            return displayPanel();
        }
        else if (IS_ANY_ITEM_ADDED && IS_ANY_INPUT_EMPTY) {
            setInoviceData(invoiceData_);
            saveData(allInvoiceData);
            notyf.success('Changes Saved Successfuly!');

            displayPanel();
        }
    }

    return (
        <div
            ref={panelFatherRef}
            className="absolute w-full h-full top-0 hidden z-10"
        >
            <div onClick={displayPanel} className="bg-black bg-opacity-0 sm:bg-opacity-30 absolute w-full h-full top-0"></div>

            <div
                ref={panelRef}
                className="left-0 md:left-14 top-19 md:top-0 overflow-y-scroll flex-col items-start flex pl-5 pr-5 md:pl-14 md:pr-10 pb-8 pt-24 md:pt-8 transform -translate-x-full duration-300 transition-transform relative z-20 h-full dark:bg-dark-blue bg-white w-full md:w-1/2 md:rounded-tr-3xl md:rounded-br-3xl"
            >
                <div className="w-full text-right mb-4">
                    <button className="normal-btn" onClick={displayPanel}>Close</button>
                </div>
                <h2 className="text-3xl mb-5">
                    {
                        !IS_EDIT_PANEL ?
                            'New Invoice' :
                            <>
                                Edit
                                <span className="opacity-50">&nbsp;#</span>
                                <strong className="uppercase tracking-wide">{tag}</strong>
                            </>
                    }
                </h2>
                <span className="text-l-purple text-sm mt-2">Bill From</span>

                <PanelInput label='street address' value={s_street} />

                <div className="w-full f-between gap-x-5">
                    <PanelInput width='w-1/3' label='city' value={s_city} />
                    <PanelInput label='post code' width='w-1/3' value={s_postCode} />
                    <PanelInput width='w-1/3' label='country' value={s_country} />
                </div>

                <span className="text-purple text-sm mt-10">Bill To</span>
                <PanelInput label="client's name" value={clientName} />
                <PanelInput label="client's email" type='email' value={email} />
                <PanelInput label="street address" value={c_street} />

                <div className="w-full f-between gap-x-5">
                    <PanelInput label='city' width='w-1/3' value={c_city} />
                    <PanelInput label='post code' width='w-1/3' value={c_postCode} />
                    <PanelInput label='country' width='w-1/3' value={c_country} />
                </div>

                <div className="w-full f-between gap-x-5">
                    {
                        IS_EDIT_PANEL ?
                            '' :
                            <PanelInput
                                label="invoice date"
                                type='date'
                            />
                    }
                    <PanelInput
                        label="payment terms"
                        type='date'
                        value={IS_EDIT_PANEL ? `${year}-${addZeroToFirst(month[1])}-${addZeroToFirst(day)}` : ''}
                    />
                </div>

                <PanelInput label="project description" value={projectDescription} />

                <div className="my-7 w-full">
                    <h3 className="text-xl font-bold text-l-purple">Item List</h3>

                    <div className="f-between w-full flex-col">
                        <div className="f-between gap-x-4 text-sm text-l-purple w-full mt-3">
                            <span className="w-1/2">Item Name</span>
                            <span className="w-1/6">QTY</span>
                            <span className="w-1/3">Price</span>
                            <span className="w-1/3">Total</span>
                        </div>

                        <div className="w-full mb-5 font-bold" id="items">
                            {/*
                                if edit invoice panel opened , map on invoice items
                                else return empty string 
                            */}
                            {(items_ === undefined || items_.length === 0) ? '' : items_.map(({ name, qty, price }, i) =>
                                <div key={i} className="w-full gap-x-4 f-between mt-2 item-list">
                                    <PanelInput width='w-1/2' mt='mt-0' value={name} />
                                    <PanelInput type='number' width='w-1/6' mt='mt-0' value={qty} event={updatePrice} ref_={qtyRef} />
                                    <PanelInput type='number' width='w-1/3' mt='mt-0' value={price} event={updatePrice} ref_={priceRef} />
                                    <span ref={totalPriceRef} className="w-1/4 mt-2">{price * qty}</span>
                                    <button
                                        className='w-auto hover:opacity-50'
                                        onClick={() => deleteItem(i)}
                                    >
                                        <TrashIco />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={addItem}
                        id='add-item-btn'
                        className="rounded-btn text-sm w-full text-white bg-mid-dark-blue"
                    >
                        Add Item
                    </button>
                </div>

                <div className="flex justify-end items-center w-full text-sm">
                    <button
                        onClick={displayPanel}
                        className="rounded-btn mr-3 bg-mid-dark-blue text-white"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={editInvoice}
                        className="rounded-btn bg-purple text-white"
                    >
                        {IS_EDIT_PANEL ? 'Save Changes' : 'Create Invoice'}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Panel;
export { panelRef, panelFatherRef };