/* eslint-disable react/prop-types */
import { MenuItem, Select } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

const SelectComponet = ({ data, value, handle, custom }) => {
    return (
        <Select
            sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 0,
                },
                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    border: 0,
                },
                '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: 0,
                },
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Age"
            onChange={handle}
            className={classNames(custom)}
        >
            {data.map(item => (
                <MenuItem
                    key={item.id}
                    value={item.value}
                    className="text-black font-Poppins text-sm leading-9 tracking-normal"
                >
                    {item.value}
                </MenuItem>
            ))}
        </Select>
    );
};

export default SelectComponet;
