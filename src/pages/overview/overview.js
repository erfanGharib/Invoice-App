import React from "react";
import Header from "./components/header/header";
import Invoices from "./components/invoices";

const AppOverview = props => {
    return (
        <div className="h-full-20 md:h-11/12 flex flex-col sm:w-3/4 lg:w-3/5 w-11/12 mx-auto">    
            <Header invoicesNumber={props.invoiceData.length} />
            <Invoices invoiceData={props.invoiceData} />
        </div>
    );
}
export default AppOverview;