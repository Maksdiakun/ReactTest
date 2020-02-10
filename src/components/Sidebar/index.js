import React, { Component } from 'react';
import cityList from '../../data/city';
import categoryList from '../../data/category'

import City from './City';
import Categories from './Categories';
import RangeSlider from './RangeSlider';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: cityList,
            categoryList: categoryList,
            filter: this.props.filter
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeFilters(this.state.filter);
        localStorage.setItem('filterState', JSON.stringify(this.state.filter));
    }
    changeCity = (city) => {
        this.setState({ filter: { ...this.state.filter, city: city } })
    }
    changeCategory = (id, checked) => {
        if (checked) {
            this.setState({ filter: { ...this.state.filter, category: [...this.state.filter.category, id] } })

        } else {
            const index = this.state.filter.category.indexOf(id);
            const arr = [...this.state.filter.category];
            arr.splice(index, 1);
            this.setState({ filter: { ...this.state.filter, category: arr } })
        }
    }
    changePrice = (value) => {
        this.setState({ filter: { ...this.state.filter, price: value } })
    }
    render() {
        const { price, city } = this.state.filter;
        return (

            <div className={this.props.mobFilter ? ' sidebar sidebar_act' : 'sidebar'}>
                < form onSubmit={this.handleSubmit} >
                    <City cityList={cityList} changeCity={this.changeCity} city={city} />
                    <Categories categoryList={categoryList} changeCategory={this.changeCategory} filter={this.state.filter} />
                    <RangeSlider changePrice={this.changePrice} price={price} />
                    <div className="SideBar_bot">
                        <div>
                            <span>${price[0]}</span>
                            <span>-</span>
                            <span>${price[1]}</span>
                        </div>
                        <button type='submit'>Filter</button>
                    </div>
                </form >
            </div >
        )
    }
}
export default SideBar;
