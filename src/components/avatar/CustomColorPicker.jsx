import { ColorPicker } from 'antd';
import React from 'react'

const CustomColorPicker = (props) => {

    return (
        <ColorPicker
            value={props.value}
            showText={() => <span>{props.text}</span>}
            style={{width: 100, height: 40}}
            onChange={props.onChange}
        />
    )
}

export default CustomColorPicker;