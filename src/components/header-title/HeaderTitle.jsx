import React from 'react'
import { Typography } from 'antd';

const { Title } = Typography;

const HeaderTitle = ({title}) => {

    return (
        <Title style={{color: '#FFFFFF', marginBottom: 50}} level={1}>{title}</Title>
    )
}

export default HeaderTitle;