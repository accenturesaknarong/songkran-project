import React from 'react'
import './style.css'
import { Button } from 'antd';

const CustomButton = (props) => {

    return (
        <Button 
            size={props?.size || 'middle'} 
            className={props.style}
            onClick={props.onClick}
        >
            {props.text}
        </Button>
    )
}

export default CustomButton;