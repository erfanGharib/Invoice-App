import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EditInvoicePanel from './pages/innerview/components/edit-invoice-panel';
import CreateInvoicePanel from './pages/overview/components/create-invoice-panel';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/'     element={<App IS_OVERVIEW_PAGE  panel={<EditInvoicePanel />} />} />
            <Route path='/edit' element={<App IS_OVERVIEW_PAGE={false} panel={<CreateInvoicePanel />} />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
