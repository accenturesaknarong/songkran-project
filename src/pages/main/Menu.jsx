import React from 'react'
import CustomCard from '../../components/card/CustomCard'
import ContentCenter from '../../components/content-center/ContentCenter'
// import ModalButton from '../../components/button/ModalButton'
import { Col,Modal } from 'antd'
// import { useNavigate } from 'react-router-dom';
// import { navigateTo } from '../../utils/common'
import { useMain } from '../../context/MainContext'
import MainBackground from '../../components/main-background/MainBackground'
import bgSplash from '../../assets/images/bg-menu-splash.png'
import bgSand from '../../assets/images/bg-menu-sand.png'
import ButtonCloseSmall from '../../components/button/ButtonCloseSmall'
import ButtonBackSmall from '../../components/button/ButtonBackSmall copy'
import './style.css'
import waterSplashMB from'../../assets/images/water-splash-mb.png'
import sandMB from '../../assets/images/sand-mb.png'

const Menu = () => {
    const { language, translations, setCurrentPage, PAGE_STATE, switchMenu } = useMain();

    // const navigate = useNavigate();
    const handleClick = (route, menuname) => {
        switchMenu(menuname)
        setCurrentPage(menuname)
    }

    return (
        <MainBackground className='bg-container'>        
            <Modal open={true} closable={false} width={800} footer={null}>
            <div style={{position: 'absolute', left: 10, top: -20}} className='show-767'>
                <ButtonBackSmall size='middle' onClick={() => handleClick('/language')} shape='circle'/>
                </div>
                <div style={{position: 'absolute', right: 10, top: -20}} className='show-767' >
                <ButtonCloseSmall size='middle' onClick={() => handleClick("/")} shape='circle'/>
                </div>
            <ContentCenter minHeight='0'>
                <div style={{position: 'absolute', left: 10, top: -20}} className='hide-767'>
                <ButtonBackSmall size='middle' onClick={() => handleClick('/language')} message={translations[language].menu.button.back}/>
                </div>
                <div style={{position: 'absolute', right: 10, top: -20}} className='hide-767'>
                <ButtonCloseSmall size='middle' onClick={() => handleClick("/")} message={translations[language].menu.button.close}/>
                </div>
                <Col xs={24}>
                    <div style={{marginBottom: 30}}></div>
                </Col>
                <Col xs={24} sm={12} align='middle' className='hide-767'>
                    <CustomCard
                        key={1}
                        src={bgSplash}
                        title={translations[language].menu.m1.h1}
                        description={translations[language].menu.m1.d1}
                        width={300}
                        height={600}
                        onClick={() => handleClick('/question/location', PAGE_STATE[4], 'pagoda')}
                        imgHeight="450px"
                    />
                </Col>
                <Col xs={24} sm={12} align='middle' className='hide-767'>
                    <CustomCard
                        key={2}
                        src={bgSand}
                        title={translations[language].menu.m2.h1}
                        description={translations[language].menu.m2.d1}
                        width={300}
                        height={600}
                        onClick={() => handleClick('/avatar', PAGE_STATE[3], 'water')}
                        imgHeight="450px"
                    />
                </Col>     
                <Col xs={24} sm={12} align='middle' className='show-767' style={{padding:'0'}}>
                    <CustomCard
                        key={1}
                        src={waterSplashMB}
                        title={translations[language].menu.m1.h1}
                        description={translations[language].menu.m1.d1}
                        width="100%"
                        height="100%"
                        onClick={() => handleClick('/question')}
                        imgHeight="100%"
                    />
                </Col>
                <Col xs={24} sm={12} align='middle' className='show-767' style={{padding:'0'}}>
                    <CustomCard
                        key={2}
                        src={sandMB}
                        title={translations[language].menu.m2.h1}
                        description={translations[language].menu.m2.d1}
                        width="100%"
                        height="100%"
                        onClick={() => handleClick('/avatar')}
                        imgHeight="100%"
                    />
                </Col>     
            </ContentCenter>
            </Modal>
        </MainBackground>
    )
}

export default Menu