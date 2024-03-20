import React from 'react'
import { Col,Space, Typography } from 'antd';
import ContentCenter from '../../components/content-center/ContentCenter';
// import { useNavigate } from 'react-router-dom';
// import { navigateTo } from '../../utils/common'
import MainBackground from '../../components/main-background/MainBackground'
import ButtonGetstart from '../../components/button/ButtonGetStart'
import { useMain } from '../../context/MainContext'

const Home = () => {
    const { language, translations, goNextPage } = useMain();
    // const navigate = useNavigate();
    
    const handleButtonClick = () => {
        // navigateTo(navigate, '/language');
        goNextPage()
    }

    return (
        <MainBackground className='bg-container-blur'>
            <ContentCenter style={{minHeight:'100vh'}}>
                <Col justify="center" align='middle' span={24}>
                    <Space size='large' direction='vertical'>
                        <Typography className='p-24-700'>Accenture’s GenAI</Typography>
                        {/* <Typography className='p-32-700 pink-hex'>Songkran <br className='br-767'/>Celebration!</Typography> */}
                        <Typography className='p-32-700 pink-hex'>{translations[language].home.m1.h1}</Typography>
                        {/* <Typography className='p-16-400'>Celebrate our Thai new year <br className='br-767'/>like never before</Typography> */}
                        <Typography className='p-16-400'>{translations[language].home.m1.d1}</Typography>
                        {/* <ButtonGetstart message='Get started!' className="button-get-start-style hide-767" onClick={handleButtonClick} size='large' /> */}
                        <ButtonGetstart message={translations[language].home.button.b1} className="button-get-start-style hide-767" onClick={handleButtonClick} size='large' />
                    </Space>
                </Col>
            </ContentCenter>
            {/* <ButtonGetstart message='Get started!' className="button-get-start-style show-767" onClick={handleButtonClick} size='large' /> */}
            <ButtonGetstart message={translations[language].home.button.b1}  className="button-get-start-style show-767" onClick={handleButtonClick} size='large' />
        </MainBackground>
    )

}

export default Home;