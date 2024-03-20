import { Col, Row, Typography } from 'antd'
import React from 'react'

const TextHeader = () => {

    return (
        <Row>
            <Col span={24} align='middle' style={{marginBottom: 20, marginTop: 20}}>
                <Typography style={{marginTop: 20}} className='p-12-700'>Sand pagoda  Playing at the background</Typography>
            </Col>
        </Row>
    )
}

export default TextHeader