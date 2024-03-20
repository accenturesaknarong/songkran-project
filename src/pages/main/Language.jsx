import React from "react";
import { Col, Typography, Modal } from "antd";
import "./style.css";
import ContentCenter from "../../components/content-center/ContentCenter";
import HeaderTitle from "../../components/header-title/HeaderTitle";
// import { useNavigate } from "react-router-dom";
// import { navigateTo } from "../../utils/common";
import { useMain } from "../../context/MainContext";
// import ModalButton from "../../components/button/ModalButton";
import MainBackground from "../../components/main-background/MainBackground";
import en from "../../assets/images/en.png";
import th from "../../assets/images/th.png";
import ButtonCloseSmall from '../../components/button/ButtonCloseSmall'
// import English from './assets/data/english.json'

const Language = () => {
  const { switchLanguage } = useMain();
  const { language, translations, goNextPage } = useMain();

  // const navigate = useNavigate();

  const handleClick = (route, lang) => {
    switchLanguage(lang);
    goNextPage()
    // navigateTo(navigate, route);
  };

  const LanguageButton = ({ text, lang }) => {
    return (
      <>
        <div className="lang-circle" onClick={() => handleClick("/menu", lang)}>
          <img src={lang === "en" ? en : th} alt="en-flag" />
        </div>
        <Typography.Title level={3} className="white-text">
          {text}
        </Typography.Title>
      </>
    );
  };

  return (
    <MainBackground className="bg-container">
      <Modal open={true} closable={false} width={800} footer={null}>
      <Col xs={20} align="end" className='hide-767'>
            <ButtonCloseSmall size='middle' onClick={() => handleClick("/")} message={translations[language].language.button.close}/>
          </Col>
          <Col xs={20} align="end" className='show-767'>
            <ButtonCloseSmall size='middle' onClick={() => handleClick("/")} className='show-767' shape='circle' message="" />
          </Col>
        <ContentCenter minHeight="60vh" gutter={[40, 16]}>
          <Col xs={24} align="middle">
            <HeaderTitle title={translations[language].language.m1.h1} />
          </Col>
          <Col xs={12} sm={12} align="middle">
            <LanguageButton text={translations[language].language.m1.d1}  lang="th" />
          </Col>
          <Col xs={12} sm={12} align="middle">
            <LanguageButton text={translations[language].language.m1.d2}  lang="en" />
          </Col>
        </ContentCenter>
      </Modal>
    </MainBackground>
  );
};

export default Language;
