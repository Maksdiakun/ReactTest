import React from 'react';
import book from './book.png';
import categories from '../../data/category';
import cities from '../../data/city';

const Item = ({ product }) => {
    let { name, city, category, price } = product;
    let itemCity = cities.find(e => e.id === city);
    let itemCategory = categories.find(e => e.id === category);
    return (
        <div className="item_col">
            <div className='item'>
                <div className="item_image">
                    <img src={book} alt="" />
                    <p>
                        {itemCity.name
                        }
                    </p>
                </div>
                <div className='item_text'>
                    <p>
                        {name}
                    </p>
                    <div className='item_details'>
                        <span>
                            {itemCategory.name}
                        </span>
                        <span>
                            ${price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Item;
