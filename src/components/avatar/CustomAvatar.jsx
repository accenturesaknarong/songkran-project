import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const CustomAvatar = (props) => {

    return (
        <Avatar size={170} key={props.key} icon={<UserOutlined />} />
    )
}

export default CustomAvatar;