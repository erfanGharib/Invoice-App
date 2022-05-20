import React, { useState, useEffect } from 'react';
import SideBar from './components/side-bar';
import './App.css';
import './tailwind.css';
import Panel from './components/panel';
import AppOverview from './pages/overview/overview';
import AppInnerview from './pages/innerview/innerview';

const invoiceContext = React.createContext();
const App = props => {
  const [invoiceData, setInoviceData] = useState(props.currentInvoiceData);
  const [allInvoiceData, setAllInoviceData] = useState(props.allInvoiceData);

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
        <Panel />
        {
          props.IS_OVERVIEW_PAGE ? 
          <AppOverview /> : 
          <AppInnerview />
        }
    </invoiceContext.Provider>
  );
}

export default App;
export { invoiceContext };
