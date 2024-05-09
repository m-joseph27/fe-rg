import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavigationBar from './components/molecules/navbar/navbar';
import Footer from './components/molecules/footer/footer';
import PageDetailList from './components/pages/detail';
import PageList from './components/pages/list';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<PageList />} />
        <Route path="/detail/:id" element={<PageDetailList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
