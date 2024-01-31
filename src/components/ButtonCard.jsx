/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

const ButtonCard = ({ image, name, classButton, ClassSpan, Icon, size, color, ClassIcon }) => {
    return (
        <Button variant="outlined" className={classNames(' flex items-center', classButton)}>
            {image ? (
                <img src={image} alt="imgSocial" />
            ) : (
                <Icon size={size} color={color} className={ClassIcon} />
            )}
            <span className={ClassSpan}>{name}</span>
        </Button>
    );
};

export default ButtonCard;
