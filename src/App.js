import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Trade from "./pages/Trade";
import BuySell from './pages/BuySell';
import AffliateSystem from './pages/AffliateSyatem'
import Charts from './pages/Charts'
import Wizards from './pages/Wizards'
import Form from './pages/Form'
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/wallet' component={Wallet} />
          <Route path='/trade' component={Trade} />
          <Route path='/buy&sell' component={BuySell} />
          <Route path='/affliate_system' component={AffliateSystem} />
          <Route path='/charts' component={Charts} />
          <Route path='/wizards' component={Wizards} />
          <Route path='/form' component={Form} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
