import React from "react";
import Invoice from "./invoice";

const Invoices = props => {
    return (
        <main className="overflow-y-scroll h-3/5 sm:h-3/4 -mx-3 px-3">
            <table className="pr-2 w-full">
                {props.invoiceData.map(value => 
                    <Invoice data={value} key={value.tag} />
                )}
            </table>
        </main>
    );
}
export default Invoices;