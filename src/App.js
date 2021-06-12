import React, { useState } from 'react';
import './components/Shared/CommonStyle/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from './ScrollTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stake from './pages/Stake';
import { Currency } from './global/Context/AppContext';
import Portfolio from './pages/Portfolio';
import CreateIndex from './pages/CreateIndex';
import Leaderboard from './pages/Leaderboard';
import Governance from './pages/Governance';
import GovernanceItem from './pages/GovernanceItem';
import LiquidityGeneration from './pages/LiquidityGeneration';
import UserPage from './pages/UserPage';

function App() {
  const [currency, setCurrency] = useState('usd_index')

  return (
    <Currency.Provider value={[currency, setCurrency]}>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/stake' render={() => <Stake />} />
            <Route exact path='/create' render={() => <CreateIndex />} />
            <Route exact path='/leaderboard' render={() => <Leaderboard />} />
            <Route exact path='/governance' render={() => <Governance />} />
            <Route exact path='/governance/:id' render={() => <GovernanceItem />} />
            <Route exact path='/portfolio/:id' render={() => <Portfolio />} />
            <Route exact path='/liquidity' render={() => <LiquidityGeneration />} />
            <Route exact path='/userpage' render={() => <UserPage />} />
            <Redirect to='/' />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </Currency.Provider>
  );
}

export default App;
