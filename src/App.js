import React, { Component } from 'react';
import './reset.scss';
import './App.css';
import './App.scss';

import Products from './components/Products';
import Sidebar from './components/Sidebar';
import FilterBtn from './components/FilterBtn';
import data from './data/data';

class App extends Component {
  constructor(props) {
    super(props);
    let filterState = localStorage.getItem('filterState');
    let prices = data.map(product => product.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    this.state = {
      mobFilter: false,
      filter: filterState ? JSON.parse(filterState) : {
        city: 0,
        category: [],
        price: [min, max]
      }
    };

  }
  mobFilterChange = () => {
    this.setState(prevState => ({
      mobFilter: !prevState.mobFilter
    })
    )
  }
  changeFilters = (filter) => {
    this.setState({ filter: filter })
  }
  render() {
    return (
      <div className="App">
        <FilterBtn mobFilter={this.state.mobFilter} mobFilterChange={this.mobFilterChange} />
        <div className="container">
          <Sidebar changeFilters={this.changeFilters} filter={this.state.filter} mobFilter={this.state.mobFilter} />
          <Products filter={this.state.filter} />
        </div>
      </div>
    );
  }
}

export default App;
