import React from "react";
const CreateInvoicePanel = props => {
    return (
        <React.Fragment>
            <h2>New Invoice</h2>
            <span>Bill From</span>

            <label htmlFor="address">
                <span>Street Address</span>
                <input type="text" id="address" />
            </label>

            <div>
                {}
                <label htmlFor="city">
                    <span>Street City</span>
                    <input type="text" id="city" />
                </label>

                <label htmlFor="address">
                    <span>Street Address</span>
                    <input type="text" id="address" />
                </label>

                <label htmlFor="address">
                    <span>Street Address</span>
                    <input type="text" id="address" />
                </label>
            </div>
        </React.Fragment>
    );
}
export default CreateInvoicePanel;