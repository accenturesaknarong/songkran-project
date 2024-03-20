import React, { useState } from "react";
import IconImage from "../../components/icon-image/IconImage";
import MainBackground from "../../components/main-background/MainBackground";
import ContentCenter from "../../components/content-center/ContentCenter";
import CustomButton from "../../components/button/CustomButton";
import HeaderTitle from "../../components/header-title/HeaderTitle";
import koinoboriFlag from "../../assets/images/flag/koi-nobori-flag.svg";
import accentureFlag from "../../assets/images/flag/accenture-flag.svg";
import twofingersFlag from "../../assets/images/flag/two-fingers-flag.svg";
import prideFlag from "../../assets/images/flag/pride-flag.svg";
import orangeFlag from "../../assets/images/flag/orange-flag.svg";
import { Col, Modal, Grid } from "antd";
import { useNavigate } from "react-router";
import { navigateTo } from "../../utils/common";
// import "./style.css";
import { useMain } from "../../context/MainContext";

const PagodaFlag = () => {
  var flagImages = [
    {
      key: "koinoboriFlag",
      directory: koinoboriFlag,
      placeHolder: "Koi Nobori Flag",
    },
    {
      key: "accentureFlag",
      directory: accentureFlag,
      placeHolder: "Accenture Flag",
    },
    {
      key: "twoFingersFlag",
      directory: twofingersFlag,
      placeHolder: "Two Fingers Flag",
    },
    {
      key: "prideFlag",
      directory: prideFlag,
      placeHolder: "Pride Flag",
    },
    {
      key: "orangeFlag",
      directory: orangeFlag,
      placeHolder: "Orange Flag",
    },
  ];

  const { language, translations } = useMain();

  const [selectedFlag, setSelectedFlag] = useState("koinoboriFlag");

  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  const handleSelectFlag = (key) => {
    setSelectedFlag(key);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigateTo(navigate, "/flower");
  };

  return (
    <MainBackground className="bg-container">
      <Modal open={true} closable={false} width={1160} footer={null}>
        <ContentCenter minHeight="60vh">
          <Col xs={24} align="middle">
            <HeaderTitle
              title={translations[language].pagoda.flag_page.title}
            />
          </Col>
          {flagImages.map((image, index) => {
            return (
              <div key={index}>
                <Col
                  xs={5}
                  sm={5}
                  md={6}
                  lg={6}
                  align="middle"
                  onClick={() => {
                    handleSelectFlag(image.key);
                  }}
                >
                  <IconImage
                    imageSrc={image.directory}
                    altText={image.placeHolder}
                    isBorderImage={selectedFlag === image.key}
                  />
                </Col>
              </div>
            );
          })}
          <div
            style={{
              marginTop: xs ? "40px" : "120px",
              width: xs ? "300px" : "558px",
            }}
          >
            <CustomButton
              style="pagoda-next-style"
              text={translations[language].pagoda.flag_page.next}
              onClick={() => handleClick()}
              size="large"
            />
          </div>
        </ContentCenter>
      </Modal>
    </MainBackground>
  );
};

export default PagodaFlag;
