import React from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
