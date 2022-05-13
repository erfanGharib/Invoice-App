import React, { useState, useEffect } from 'react';
import SideBar from './components/side-bar';
import data from './data/invoices-data.json'
import './App.css';
import './tailwind.css';
import Panel from './components/panel';
import AppOverview from './pages/overview/overview';
import AppInnerview from './pages/innerview/innerview';

const invoiceContext = React.createContext();
const App = props => {
  const [invoiceData, setInoviceData] = useState(data);

  return (
    <invoiceContext.Provider value={{invoiceData: invoiceData, setInoviceData: setInoviceData}}>
        <SideBar />
        <Panel panel={props.children} />
        {props.IS_OVERVIEW_PAGE ? <AppOverview invoiceData={invoiceData} /> : <AppInnerview invoiceData={props.invoiceData} />}
    </invoiceContext.Provider>
  );
}

export default App;
export { invoiceContext };
