import React, { useContext } from "react";
import PanelInput from "../../../components/panel-input";
import { displayPanel } from "../../../functions";
import { invoiceContext } from "../../../App";
import { ReactComponent as TrashIco } from '../../../assets/icons/trash.svg'

const CreateInvoicePanel = props => {
    const invoiceItems = useContext(invoiceContext);
    return (
        <React.Fragment>
            <div className="w-full text-right">
                <button className="normal-btn" onClick={displayPanel}>Close</button>
            </div>
            <h2 className="text-3xl mb-5">New Invoice</h2>
            <span className="text-l-purple text-sm mt-2">Bill From</span>

            <PanelInput label='street address' id='id' />

            <div className="w-full f-between gap-x-5">
                <PanelInput id='city' width={'w-1/3'} />
                <PanelInput label='post code' id='post-code' width={'w-1/3'} />
                <PanelInput id='country' width={'w-1/3'} />
            </div>

            <span className="text-purple text-sm mt-10">Bill To</span>
            <PanelInput label="client's name" id='client-name' />
            <PanelInput label="client's email" id='client-email' />
            <PanelInput label="street address" id='street-address' />

            <div className="w-full f-between gap-x-5">
                <PanelInput id='city' width={'w-1/3'} />
                <PanelInput label='post code' id='post-code' width={'w-1/3'} />
                <PanelInput id='country' width={'w-1/3'} />
            </div>

            <PanelInput label="payment terms" id='payment-terms' type='date' />
            <PanelInput label="project description" id='project description' />

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
                        <div className="w-full gap-x-4 f-between mt-2">
                            <PanelInput width='w-1/2' mt='mt-0' />
                            <PanelInput width='w-1/6' mt='mt-0' />
                            <PanelInput width='w-1/3' mt='mt-0' />
                            <span className="w-1/4 mt-2">0</span>
                            <button className='w-auto'>
                                <TrashIco />
                            </button>
                        </div>
                    </div>
                </div>

                <button className="rounded-btn text-sm w-full text-white bg-mid-dark-blue">Add Item</button>
            </div>

            <div className="flex justify-end items-center w-full text-sm">
                <button className="rounded-btn mr-3 bg-mid-dark-blue text-white">Cancel</button>
                <button className="rounded-btn bg-purple text-white">Save Changes</button>
            </div>
        </React.Fragment>
    );
}
export default CreateInvoicePanel;