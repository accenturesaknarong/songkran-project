import { Button } from 'antd';
import React from 'react'


const ModalButton = (props) =>{

    return (
        <Button 
            shape="round"
            onClick={props.onClick}
        >
            {props.text}
        </Button>
    )
}

export default ModalButton;