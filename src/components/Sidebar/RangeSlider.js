import React from 'react';
import Slider from '@material-ui/core/Slider';
import data from '../../data/data';

const RangeSlider = (props) => {

    const handleChange = (event, newValue) => {
        props.changePrice(newValue);
    };
    const prices = data.map(product => product.price);
    return (
        <div>
            <p className='filter_title'>
                price
            </p>
            <Slider
                value={props.price}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={Math.min(...prices)}
                max={Math.max(...prices)}
            />
        </div>
    )
};
export default RangeSlider;
