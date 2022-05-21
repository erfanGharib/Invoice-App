import React, { useState } from 'react';
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
      <div id='app-error' className='transition-transform duration-300 f-between bg-rose-600 shadow-xl z-30 text-white rounded-l-full text-sm transform translate-x-56 right-0 absolute py-2 px-3 top-5'>
        <span className='p-0.5 mr-2 border rounded-full w-auto'><i className='x-ico rounded-full w-3 h-3 block'></i></span>
        <span className='mt-1'>Some Fields Are Empty!</span>
      </div>

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
