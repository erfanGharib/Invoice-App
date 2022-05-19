import React, { useContext } from "react";
import { displayPanel } from "../functions";
import PanelInput from "./panel-input";
import { invoiceContext } from "../App";
import { ReactComponent as TrashIco } from '../assets/icons/trash.svg';

const panelRef = React.createRef();
const panelFatherRef = React.createRef();
const Panel = props => {
    const invoiceItems = useContext(invoiceContext);
    const { tag, invoiceDate, clientLocation, sellerLoaction, projectDescription, paymentDue, clientName, items, email } = props.invoiceData === undefined ? '' : props.invoiceData;
    
    const { s_street, s_postCode, s_city, s_country } = sellerLoaction === undefined ? '' : sellerLoaction;
    const { c_street, c_postCode, c_city, c_country } = clientLocation === undefined ? '' : clientLocation;

    return (
        <div
            ref={panelFatherRef}
            className="absolute w-full h-full top-0 hidden z-10"
        >
            <div onClick={displayPanel} className="bg-black bg-opacity-0 sm:bg-opacity-30 absolute w-full h-full top-0"></div>

            <div 
                ref={panelRef} 
                className="left-0 md:left-16 top-19 md:top-0 overflow-y-scroll flex-col items-start flex pl-5 pr-5 md:pl-14 md:pr-10 pb-8 pt-24 md:pt-8 transform -translate-x-full duration-300 transition-transform relative z-20 h-full dark:bg-dark-blue bg-white w-full sm:w-2/3 md:rounded-tr-3xl md:rounded-br-3xl"
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
                            <span className="opacity-50">&nbsp;&nbsp;#</span>
                            <strong className="uppercase tracking-wide">{tag}</strong>
                        </>
                    }
                </h2>
                <span className="text-l-purple text-sm mt-2">Bill From</span>

                <PanelInput label='street address' id='id' value={s_street} />

                <div className="w-full f-between gap-x-5">
                    <PanelInput id='city' width={'w-1/3'} value={s_city} />
                    <PanelInput label='post code' id='post-code' width={'w-1/3'} value={s_postCode} />
                    <PanelInput id='country' width={'w-1/3'} value={s_country} />
                </div>

                <span className="text-purple text-sm mt-10">Bill To</span>
                <PanelInput label="client's name" id='client-name' value={clientName} />
                <PanelInput label="client's email" id='client-email' value={email} />
                <PanelInput label="street address" id='street-address' value={c_street} />

                <div className="w-full f-between gap-x-5">
                    <PanelInput id='city' width={'w-1/3'} value={c_city} />
                    <PanelInput label='post code' id='post-code' width={'w-1/3'} value={c_postCode} />
                    <PanelInput id='country' width={'w-1/3'} value={c_country} />
                </div>

                <PanelInput label="payment terms" id='payment-terms' type='date' />
                <PanelInput label="project description" id='project description' value={projectDescription} />

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
                            {/* if edit invoice panel opened run map on invoice invoice items
                             else return empty string */}
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
                    <button className="rounded-btn mr-3 bg-mid-dark-blue text-white">Cancel</button>
                    <button className="rounded-btn bg-purple text-white">Save Changes</button>
                </div>
            </div>
        </div>
    );
}
export default Panel;
export { panelRef, panelFatherRef };