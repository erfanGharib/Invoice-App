import React, { useState, useEffect } from 'react';
import SideBar from './components/side-bar';
// import data from './data/invoices-data.json'
import './App.css';
import './tailwind.css';
import Panel from './components/panel';
import AppOverview from './pages/overview/overview';
import AppInnerview from './pages/innerview/innerview';

const invoiceContext = React.createContext();
const App = props => {
  // let x = JSON.stringify(props.allInvoiceData);
  // localStorage.clear();
  // localStorage.setItem('invoiceData', x);
  // console.log(props.x);
  console.log(props.allInvoiceData);

  const [invoiceData, setInoviceData] = useState(props.currentInvoiceData);
  const [allInvoiceData, setAllInoviceData] = useState(props.allInvoiceData);

  // console.log(localStorage.getItem('invoiceData').replaceAll('\\', ''));
  console.log(allInvoiceData);
  // const dataArray = JSON.parse(invoiceData);


  return (
    <invoiceContext.Provider 
      value={{
        invoiceData: invoiceData, 
        allInvoiceData: allInvoiceData,
        setInoviceData: setInoviceData,
        setAllInoviceData: setAllInoviceData,
        invoiceIndex: props.invoiceIndex
      }}
    >
        <SideBar />
        <Panel invoiceData={invoiceData} />
        {
          props.IS_OVERVIEW_PAGE ? 
          <AppOverview invoiceData={invoiceData} /> : 
          <AppInnerview invoiceData={invoiceData} />
        }
    </invoiceContext.Provider>
  );
}

export default App;
export { invoiceContext };
