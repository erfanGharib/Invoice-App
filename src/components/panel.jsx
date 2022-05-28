import React, { useContext } from "react";
import { displayPanel, saveData } from "../functions";
import PanelInput from "./panel-input";
import { invoiceContext } from "../App";
import { ReactComponent as TrashIco } from '../assets/icons/trash.svg';
import { get } from '../createElement';
import { addZeroToFirst } from "../functions";

const panelRef = React.createRef();
const panelFatherRef = React.createRef();
const monthArr = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

const Panel = () => {
    const { setInoviceData, invoiceData, allInvoiceData } = useContext(invoiceContext);
    const { tag, clientLocation, sellerLoaction, projectDescription, paymentDue, clientName, items, email } = invoiceData === undefined ? '' : invoiceData;

    const { s_street, s_postCode, s_city, s_country } = sellerLoaction === undefined ? '' : sellerLoaction;
    const { c_street, c_postCode, c_city, c_country } = clientLocation === undefined ? '' : clientLocation;
    let { month, day, year } = paymentDue === undefined ? '' : paymentDue;
    month = month === undefined ? '' : month;

    const displayMessage = cls => {
        const appErrCls = get('#app-error').classList;
        const appErrIcoCls = get('#app-error span i').classList;

        appErrIcoCls.add(cls);
        appErrCls.add('display-message', cls);

        setTimeout(() => {
            appErrCls.remove('display-message', cls);
            appErrIcoCls.remove(cls);
        }, 4000);
    }

    const editInvoice = () => {
        const editedData = invoiceData;
        let IS_ANY_INPUT_EMPTY = false;

        get('.displayPanel input', true).forEach((input, index) => {
            if (input.value === '') {
                input.classList.add('empty-field');
                panelRef.current.scroll(0, input.offsetTop - 40);
                displayMessage('error');

                IS_ANY_INPUT_EMPTY = true;
            }
            else {
                input.classList.remove('empty-field');
                switch (index) {
                    case 0:
                        editedData.sellerLoaction.s_street = input.value;
                        break;
                    case 1:
                        editedData.sellerLoaction.s_city = input.value;
                        break;
                    case 2:
                        editedData.sellerLoaction.s_postCode = input.value;
                        break;
                    case 3:
                        editedData.sellerLoaction.s_country = input.value;
                        break;
                    case 4:
                        editedData.clientName = input.value;
                        break;
                    case 5:
                        editedData.email = input.value;
                        break;
                    case 6:
                        editedData.clientLocation.c_street = input.value;
                        break;
                    case 7:
                        editedData.clientLocation.c_city = input.value;
                        break;
                    case 8:
                        editedData.clientLocation.c_postCode = input.value;
                        break;
                    case 9:
                        editedData.clientLocation.c_country = input.value;
                        break;
                    case 10:
                        editedData.paymentDue = {
                            year: input.value.substr(0,4),
                            month: [ monthArr[Number(input.value.substr(5,2))], Number(input.value.substr(5,2)) ],
                            day: Number(input.value.substr(8,2)),
                        };
                        break;
                    case 11:
                        editedData.projectDescription = input.value;

                        if(!IS_ANY_INPUT_EMPTY) {
                            displayMessage('no-error');
                            displayPanel();
                        }
                        break;
                
                    default:
                        break;
                }

                setInoviceData({...editedData});
                saveData(allInvoiceData);
            }
        });
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

                <PanelInput 
                    label="payment terms"
                    type='date' 
                    value={`${year}-${addZeroToFirst(month[1])}-${addZeroToFirst(day)}`} 
                />
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
                            {items === undefined ? '' : items.map(({ name, qty, price }) =>
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

                    <button className="rounded-btn text-sm w-full text-white bg-mid-dark-blue">Add Item</button>
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