import React from 'react';
import './App.css';
import NavigationBar from './components/molecules/navbar/navbar';
import FilterBar from './components/molecules/filter_bar/filter-bar';
import SortBar from './components/molecules/sort_bar/sort_bar';
import ListCard from './components/molecules/list-card/list-card';
import Footer from './components/molecules/footer/footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <FilterBar />
      <SortBar />
      <ListCard />
      <Footer />
    </div>
  );
}

export default App;
