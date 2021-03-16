import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

import Header from './parts/Header';
import Footer from './parts/Footer';

    ReactDOM.render(
        <BrowserRouter>
            <Header />
            <Routes />
            <Footer />
        </BrowserRouter>,
        document.getElementById('root')
    );