import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';
import Earnings from './pages/Earnings';
import Withdraw from './pages/Withdraw';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Referrals from './pages/Referrals';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/referrals" element={<Referrals />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;