import { Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './style.css';

const ButtonGetStart = ({message, onClick, className}) => {

    return (
        <Button size='middle' className={className}  onClick={onClick}>
            {message}
        </Button>
    )
}

// Define prop types for ButtonNext component
ButtonGetStart.propTypes = {
    message: PropTypes.string.isRequired, // message prop is required and should be a string
    onClick: PropTypes.func.isRequired, // onClick prop is required and should be a function
};


export default ButtonGetStart;