import React, { useState, useEffect } from 'react';
import SideBar from './components/side-bar';
import data from './data/invoices-data.json'
import './App.css';
import './tailwind.css';
import Panel from './components/panel';
import AppOverview from './pages/overview/overview';
import AppInnerview from './pages/innerview/innerview';

const App = props => {
  const [invoiceData, setInoviceData] = useState(data);

  console.log(data);

  return (
    <React.Fragment>
        <SideBar />
        <Panel panel={props.panel} />
        {props.IS_OVERVIEW_PAGE ? <AppOverview invoiceData={invoiceData} /> : <AppInnerview />}
    </React.Fragment>
  );
}

export default App;
