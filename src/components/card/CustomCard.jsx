import { Card } from 'antd';
import React from 'react'

const { Meta } = Card

const CustomCard = (props) => {


    return (
        <Card
            hoverable
            style={{ width: props.width, height: props.height, textAlign: 'left' }}
            cover={<img alt="example" src={props.src}  style={{height:props.imgHeight}}/>}
            onClick={props.onClick}
        >
             <Meta title={props.title} description={props.description} />
        </Card>
    )
}

export default CustomCard;