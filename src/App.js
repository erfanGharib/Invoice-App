import React, { useState } from 'react';
import SideBar from './components/side-bar';
import AppOverview from './pages/overview/overview';
import './App.css';
import './tailwind.css';

const App = () => {
  return (
    <React.Fragment>
      <SideBar />
      <AppOverview />
    </React.Fragment>
  );
}

export default App;
