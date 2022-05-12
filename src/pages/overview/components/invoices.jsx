import React from "react";
import Invoice from "./invoice";

const Invoices = props => {
    return (
        <main className="overflow-y-scroll h-3/5 sm:h-3/4 overflow-x-hidden">
            <table className="pr-2 w-full">
                {props.invoiceData.map(value => 
                    <Invoice data={value} />
                )}
            </table>
        </main>
    );
}
export default Invoices;