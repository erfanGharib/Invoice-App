import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppOverview from './pages/overview/overview';
import AppInnerview from './pages/innerview/innerview';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/'     element={<App page={<AppOverview />}  panel={''} />} />
            <Route path='/edit' element={<App page={<AppInnerview />} panel={''} />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
