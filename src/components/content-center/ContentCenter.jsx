import { Row } from 'antd';
import React from 'react'

const ContentCenter = (props) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: props?.minHeight || '80vh' }}>
            <Row style={{paddingLeft: 20, paddingRight: 20 }}>
                <Row justify="center" align="middle" style={{position: 'relative'}} gutter={[16, 16]}>
                    {props.children}
                </Row>
            </Row>
        </div>
    )
}

export default ContentCenter;