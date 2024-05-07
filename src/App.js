import React from 'react';
import './App.css';
import NavigationBar from './components/molecules/navbar/navbar';
import FilterBar from './components/molecules/filter_bar/filter-bar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <FilterBar />
    </div>
  );
}

export default App;
