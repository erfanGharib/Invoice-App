import React from "react";
import PanelInput from "../../../components/panel-input";
import displayPanel from "../../../function";
const CreateInvoicePanel = props => {
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

            <div className="mt-5">
                <h3 className="text-xl font-bold text-l-purple">Item List</h3>
                <div>

                </div>
                <button></button>
            </div>

            <div className="flex justify-end items-center w-full">
                <button className="rounded-btn mr-3 bg-mid-dark-blue">Cancel</button>
                <button className="rounded-btn bg-purple text-white">Save Changes</button>
            </div>
        </React.Fragment>
    );
}
export default CreateInvoicePanel;