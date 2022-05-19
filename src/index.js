import { React } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import EditInvoicePanel from './pages/innerview/components/edit-invoice-panel';
// import CreateInvoicePanel from './pages/overview/components/create-invoice-panel';
import data from './data/invoices-data.json';

let savedData;
if(localStorage.length === 0) {
    savedData = data;
    localStorage.setItem('invoiceData', JSON.stringify(data));
}
// else savedData = localStorage.getItem('invoiceData');
else savedData = JSON.parse(localStorage.getItem('invoiceData'));
let x = 'erfan'
console.log(savedData);

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App IS_OVERVIEW_PAGE allInvoiceData={savedData} />} />
            {savedData.map((value, index) => 
                <Route 
                    path={`/${value.tag}`} 
                    key={value.tag} 
                    element={
                        <App currentInvoiceData={value} x={x} invoiceIndex={index} allInvoiceData={savedData} IS_OVERVIEW_PAGE={false} />
                    } 
                />
            )}
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
