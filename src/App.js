import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Header from './parts/Header';
import Footer from './parts/Footer';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes />
                <Footer />
            </BrowserRouter>,
        </div>
    );
}

export default App;