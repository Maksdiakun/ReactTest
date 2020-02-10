import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';




const City = ({ cityList, changeCity, city }) => {

    const handleChange = (e) => (changeCity(e.target.value))
    return (
        <div className='filter_block'>
            <p className='filter_title'>
                City
            </p>
            <FormControl >
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    onChange={handleChange}
                >
                    <MenuItem value={0} > All</MenuItem>
                    {cityList.map((e) => {
                        return <MenuItem key={e.id} value={e.id}>{e.name}</MenuItem>
                    })
                    }
                </Select>
            </FormControl>
            <div>

            </div>
        </div>
    )
}
export default City;