import React, { useState } from 'react'
import ContentCenter from '../../components/content-center/ContentCenter'
import { Col } from 'antd'
import HeaderTitle from '../../components/header-title/HeaderTitle'
import CustomCard from '../../components/card/CustomCard'
// import { Navigate } from 'react-router-dom'


const Question = () => {

    // const isAuth = true;

    // if (isAuth) {
    //     return <Navigate to="/" replace />;
    // }

    const [title] = useState("Where do you want to play Water Festival ?");

    const [q1] = useState([
        {
            title: 'City',
            description: 'Busy streets like Kaosan Road, Silom District, enjoying the city buzz'
        },
        {
            title: 'Cultural Places',
            description: 'Make merit & get blessed in Temple or Thailand famous cultural places'
        },
        {
            title: 'Beach',
            description: 'Vibing your Songkran near the sea and getting tan in the sun'
        },
        {
            title: 'Outer Space',
            description: 'Enjoy Songkran from outer spaces with 0 gravity'
        }
    ])

    return (
        <ContentCenter minHeight='90vh'>
            <Col xs={24} align='middle'>
                <HeaderTitle title={title}/>
            </Col>
            {q1.map((item, index) => (
                <Col align='middle' key={index} sm={12} lg={12} xl={5}>
                    <CustomCard
                        title={item.title}
                        description={item.description}
                        width={300}
                    />
                </Col>
            ))}
        </ContentCenter>
    )
}

export default Question