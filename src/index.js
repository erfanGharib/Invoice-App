import { React } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import data from './data/invoices-data.json';

let savedData;

if(localStorage.getItem('invoiceData') === null) {
    savedData = data;
    localStorage.setItem('invoiceData', JSON.stringify(data));
}

else savedData = JSON.parse(localStorage.getItem('invoiceData'));

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route 
                path='/' 
                element={
                    <App 
                        IS_OVERVIEW_PAGE 
                        allInvoiceData={savedData} 
                        currentInvoiceData={savedData[0]} 
                    />} 
            />
            
            {savedData.map((value, index) => 
                <Route 
                    path={`/${value.tag}`} 
                    key={value.tag} 
                    element={
                        <App 
                            currentInvoiceData={value} 
                            invoiceIndex={index} 
                            allInvoiceData={savedData} 
                            IS_OVERVIEW_PAGE={false} 
                        />
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
