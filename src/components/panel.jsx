import React, { useContext } from "react";
import { displayPanel, saveData, addZeroToFirst } from "../functions";
import PanelInput from "./panel-input";
import { invoiceContext } from "../App";
import { ReactComponent as TrashIco } from '../assets/icons/trash.svg';
import { get } from '../createElement';
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

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

    let { tag, clientLocation, sellerLoaction, projectDescription, paymentDue, clientName, items, email } = invoiceData_ === undefined ? '' : invoiceData_;

    let { s_street, s_postCode, s_city, s_country } = sellerLoaction === undefined ? '' : { ...sellerLoaction };
    let { c_street, c_postCode, c_city, c_country } = clientLocation === undefined ? '' : { ...clientLocation };
    let { month, day, year } = paymentDue === undefined ? '' : { ...paymentDue };
    month = month === undefined ? '' : month;

    // write comments
    const createUniqueTag = () => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const rnd = (max = 9) => {
            return alphabet[Math.floor(Math.random() * (parseFloat(max) - parseFloat(0) + 1) + parseFloat(0))];
        }
        let tag_ = rnd(26) + rnd(26) + rnd() + rnd() + rnd() + rnd();
        if (allInvoiceData.some(value => value === tag_)) return tag_;
        console.log(tag_);
        createUniqueTag();
    }
    const addItem = () => {
        items.push({
            name: '',
            qty: '',
            price: ''
        });
        setInoviceData(invoiceData_);
    }

    // clean codes
    const editInvoice = IS_EDIT_PANEL => {
        let IS_ANY_INPUT_EMPTY = false;

        get('.displayPanel input', true).forEach((input, index) => {
            if (input.value === '') {
                IS_ANY_INPUT_EMPTY = true;
                input.classList.add('empty-field');
                panelRef.current.scroll(0, input.offsetTop - 40);
            }
            else {
                input.classList.remove('empty-field');
                switch (index) {
                    case 0:
                        sellerLoaction.s_street = input.value;
                        break;
                    case 1:
                        sellerLoaction.s_city = input.value;
                        break;
                    case 2:
                        sellerLoaction.s_postCode = input.value;
                        break;
                    case 3:
                        sellerLoaction.s_country = input.value;
                        break;
                    case 4:
                        clientName = input.value;
                        break;
                    case 5:
                        email = input.value;
                        break;
                    case 6:
                        clientLocation.c_street = input.value;
                        break;
                    case 7:
                        clientLocation.c_city = input.value;
                        break;
                    case 8:
                        clientLocation.c_postCode = input.value;
                        break;
                    case 9:
                        clientLocation.c_country = input.value;
                        break;
                    case 10:
                        paymentDue = {
                            year: input.value.substr(0, 4),
                            month: [monthArr[Number(input.value.substr(5, 2))], Number(input.value.substr(5, 2))],
                            day: Number(input.value.substr(8, 2)),
                        };
                        break;
                    case 11:
                        projectDescription = input.value;
                        break;

                    default: break;
                }

                if (IS_EDIT_PANEL) setInoviceData(invoiceData_);
                else {
                    const allInvoiceData_ = { ...allInvoiceData };
                    allInvoiceData_.status = 0;
                    allInvoiceData_.tag = createUniqueTag();

                    allInvoiceData_.push(invoiceData_);
                    setAllInoviceData(allInvoiceData_);
                }

                saveData(allInvoiceData);
            }
        });

        if(IS_ANY_INPUT_EMPTY) notyf.error('Some Fields Are Empty!')
        else if(!IS_ANY_INPUT_EMPTY && !IS_EDIT_PANEL) notyf.success('Changes Saved Successfuly!');
        else notyf.success('Invoice Created Successfuly!');
    }

    return (
        <div
            ref={panelFatherRef}
            className="absolute w-full h-full top-0 hidden z-10"
        >
            <div onClick={displayPanel} className="bg-black bg-opacity-0 sm:bg-opacity-30 absolute w-full h-full top-0"></div>

            <div
                ref={panelRef}
                className="left-0 md:left-14 top-19 md:top-0 overflow-y-scroll flex-col items-start flex pl-5 pr-5 md:pl-14 md:pr-10 pb-8 pt-24 md:pt-8 transform -translate-x-full duration-300 transition-transform relative z-20 h-full dark:bg-dark-blue bg-white w-full sm:w-2/3 md:rounded-tr-3xl md:rounded-br-3xl"
            >
                <div className="w-full text-right mb-4">
                    <button className="normal-btn" onClick={displayPanel}>Close</button>
                </div>
                <h2 className="text-3xl mb-5">
                    {
                        tag === undefined ?
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
                    <PanelInput width={'w-1/3'} label='city' value={s_city} />
                    <PanelInput label='post code' width={'w-1/3'} value={s_postCode} />
                    <PanelInput width={'w-1/3'} label='country' value={s_country} />
                </div>

                <span className="text-purple text-sm mt-10">Bill To</span>
                <PanelInput label="client's name" value={clientName} />
                <PanelInput label="client's email" value={email} />
                <PanelInput label="street address" value={c_street} />

                <div className="w-full f-between gap-x-5">
                    <PanelInput label='city' width={'w-1/3'} value={c_city} />
                    <PanelInput label='post code' width={'w-1/3'} value={c_postCode} />
                    <PanelInput label='country' width={'w-1/3'} value={c_country} />
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

                        <div className="w-full mb-5 font-bold">
                            {/*
                                if edit invoice panel opened , map on invoice items
                                else return empty string 
                            */}
                            {(items === undefined || items.length === 0) ? '' : items.map(({ name, qty, price }) =>
                                <div className="w-full gap-x-4 f-between mt-2">
                                    <PanelInput width='w-1/2' mt='mt-0' value={name} />
                                    <PanelInput width='w-1/6' mt='mt-0' value={qty} />
                                    <PanelInput width='w-1/3' mt='mt-0' value={price} />
                                    <span className="w-1/4 mt-2">{price * qty}</span>
                                    <button className='w-auto'>
                                        <TrashIco />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={addItem}
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
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Panel;
export { panelRef, panelFatherRef };