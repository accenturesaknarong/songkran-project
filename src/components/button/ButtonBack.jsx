import { Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './style.css';

const ButtonBack = ({message, onClick}) => {

    return (
        <Button size='middle' className='back-style' onClick={onClick}>
            {message}
        </Button>
    )
}

ButtonBack.propTypes = {
    message: PropTypes.string.isRequired, // message prop is required and should be a string
    onClick: PropTypes.func.isRequired, // onClick prop is required and should be a function
};

export default ButtonBack;