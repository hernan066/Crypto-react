import React from "react";
import { Layout, Typography, Space } from "antd";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Layout>
      <div className="footer" >
        <Typography.Title level={5} style={{color: 'white',  textAling: 'center'}}>
          Hernan Moneta <br />
          All right reserverd
        </Typography.Title>
        <Space>
           <Link to='/'>Home</Link>
           <Link to='/exchanges'>Exchanges</Link>
           <Link to='/news'>News</Link>
        </Space>
      </div>

      </div>
    </div>
  );
};

export default App;
