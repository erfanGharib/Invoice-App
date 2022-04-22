import React from "react";
import Header from "./components/header/header";
import Invoice from "./components/invoices"
const AppOverview = props => {
    return (
        <div className="h-full flex flex-col sm:w-3/5 w-10/12 mx-auto">    
            <Header />
            <Invoice />
        </div>
    );
}
export default AppOverview;