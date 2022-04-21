import React from "react";
import Header from "./components/header";
import Invoices from "./components/invoices"
const AppOverview = props => {
    return (
        <React.Fragment>    
            <Header />
            <Invoices />
        </React.Fragment>
    );
}
export default AppOverview;