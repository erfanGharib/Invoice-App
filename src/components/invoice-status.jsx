import React from "react";
const InvoiceStatus = props => {
    const { status } = props;
    return (
        <div
            className={`
                ${status ? 'bg-emerald-500 text-emerald-500' : 'bg-orange-400 text-orange-400'} 
                f-center text-sm font-bold bg-opacity-10 w-28 h-11 rounded-md ml-3
            `}
        >
            <span className={`${status ? 'bg-emerald-500' : 'bg-orange-400'} w-2.5 h-2.5 mr-2 rounded-full block`}></span>
            <span className="mt-0.5">{status ? 'Paid' : 'Pending'}</span>
        </div>
    );
}
export default InvoiceStatus;