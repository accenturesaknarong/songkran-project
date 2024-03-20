import { Button, Image } from 'antd';
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './style.css';
import CloseIcon from "./img/close.png"

const ButtonCloseSmall = ({message, onClick ,shape}) => {

    return (
        <Button size='middle' className='button-close-small' onClick={onClick} shape={shape}>
            <div className='button-content'>
                <div className='text-container'>
                    {message}
                </div>       
                <div className='icon-container'>
                    <Image src={CloseIcon} preview={false} width={12}/>
                </div>
                        
            </div>
        </Button>
    )
}

ButtonCloseSmall.propTypes = {
    message: PropTypes.string.isRequired, // message prop is required and should be a string
    onClick: PropTypes.func.isRequired, // onClick prop is required and should be a function
};

export default ButtonCloseSmall;