import React from "react";
const InvoiceStatus = props => {
    const checkInvoiceStatus = () => {
        switch(props.status) {
            case 0:
                return ['bg-orange-400', 'text-orange-400', 'Pending'];
            case 1:
                return ['bg-emerald-500', 'text-emerald-500', 'Paid'];
            case 2:
                return ['bg-slate-500', 'text-slate-500', 'Draft'];
                
            default:
                break;
        }
    }

    return (
        <div
            className={`
                ${checkInvoiceStatus()[0]} ${checkInvoiceStatus()[1]}
                f-center text-sm font-bold bg-opacity-10 w-28 h-11 rounded-md ml-3
            `}
        >
            <span className={`${checkInvoiceStatus()[0]} w-2.5 h-2.5 mr-2 rounded-full block`}></span>
            <span className="mt-0.5">{checkInvoiceStatus()[2]}</span>
        </div>
    );
}
export default InvoiceStatus;