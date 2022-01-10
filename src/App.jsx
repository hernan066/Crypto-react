import React from "react";
import { Layout, Typography, Space } from "antd";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {  Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout style={{padding: '20px'}}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Layout>
      <div className="footer" >
        <Space>
           <Link to='/'>Home</Link>
           <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
           <Link to='/news'>News</Link>
        </Space>
        <Typography.Title level={5} style={{color: 'white',  textAling: 'center'}}>
          Created by Hernan Moneta 
         
        </Typography.Title>
      </div>

      </div>
    </div>
  );
};

export default App;
