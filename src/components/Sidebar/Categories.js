import React from 'react';
import products from '../../data/data';

const Categories = ({ categoryList, changeCategory, filter }) => {
    const handleChange = (e) => { changeCategory(e.target.value, e.target.checked) }
    return (
        <div className="filter_block">
            <p className='filter_title'>
                Categories
        </p>
            <ul>
                {
                    categoryList.map((categoryItem) => (<li key={categoryItem.id} >
                        <label className="checkbox_container" >
                            <input type="checkbox" checked={filter.category.includes(String(categoryItem.id))} value={categoryItem.id} name='category' onChange={handleChange} />
                            <span className="checkmark"></span>
                            {categoryItem.name}
                            <span className="category_quant">({products.filter(product => product.category === categoryItem.id
                            ).length})</span>
                        </label>
                    </li>))
                }
            </ul>
        </div>
    )
}
export default Categories;
