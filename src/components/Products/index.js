import React from 'react';
import products from '../../data/data'



import Item from './Item';

const Products = ({ filter }) => {
    const filteredProducts = products.filter((element) => {
        let resultCity = true;
        let resultCategory = true;
        let resultPrice = true;

        if (filter.city === 0) { resultCity = true } else { resultCity = element.city === filter.city };
        if (filter.category.length === 0) { resultCategory = true } else { resultCategory = filter.category.includes(String(element.category)) };
        resultPrice = element.price !== [] && element.price >= filter.price[0] && element.price <= filter.price[1];

        return resultCity && resultCategory && resultPrice
    })
    return (
        <div className="products">
            {filteredProducts.map(function (e) {
                return <Item key={e.id} product={e} />

            })}
        </div>
    )
}


export default Products;