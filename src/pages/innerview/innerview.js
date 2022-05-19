import React from "react";
import InvoiceFullStatus from "./components/inovice-full-status";
const AppInnerview = props => {
    return (
        <main className="flex items-start justify-center h-full overflow-y-scroll w-full z-0">
            <InvoiceFullStatus invoiceData={props.invoiceData} />
        </main>
    );
}
export default AppInnerview;