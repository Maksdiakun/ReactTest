import React from 'react';

const FilterBtn = ({ mobFilterChange, mobFilter }) => {
    const handleChange = () => {
        mobFilterChange();
    }
    return (
        <div className="filter_btn">
            <button className={mobFilter ? "hamburger hamburger--arrowturn is-active" : 'hamburger hamburger--arrowturn '} type="button" onClick={handleChange}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div >
    )
};
export default FilterBtn;