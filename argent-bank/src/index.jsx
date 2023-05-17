import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Header from './containers/Header';
import Footer from './containers/Footer';
import './'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router>
        <Header />
            <Routes>
                <Route path="/home" element={<Home />} exact />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/user" element={<User />} />
            </Routes>
        <Footer />
    </Router>
    </React.StrictMode>
);