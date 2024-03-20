import { Button, Image } from 'antd';
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './style.css';
import BackIcon from "./img/chevron_left.png"

const ButtonBackSmall = ({message, onClick , shape}) => {

    return (
        <Button size='middle' className='button-back-small' onClick={onClick} shape={shape}>
            <div className='button-content'>
                <div className='icon-container'>
                    <Image src={BackIcon} preview={false} width={8}/>
                </div>
                <div>
                    {message}
                </div>               
            </div>
        </Button>
    )
}

ButtonBackSmall.propTypes = {
    message: PropTypes.string.isRequired, // message prop is required and should be a string
    onClick: PropTypes.func.isRequired, // onClick prop is required and should be a function

};

export default ButtonBackSmall;