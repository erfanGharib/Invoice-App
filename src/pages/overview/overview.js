import React from "react";
import { invoiceContext } from "../../App";
import Header from "./components/header/header";
import Invoices from "./components/invoices";

const AppOverview = props => {
    const { allInvoiceData } = React.useContext(invoiceContext);
    return (
        <div className="h-full-20 md:h-11/12 flex flex-col sm:w-3/4 lg:w-3/5 w-11/12 mx-auto">    
            <Header invoicesNumber={allInvoiceData.length} />
            <Invoices invoiceData={allInvoiceData} />
        </div>
    );
}
export default AppOverview;