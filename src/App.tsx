import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App: React.FC = () => (
  <div className="container">
    <Sidebar />
    <Header />
    <Body />
    <Footer />
  </div>
);

export default App;
