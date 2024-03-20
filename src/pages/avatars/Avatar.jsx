import React, { useState } from "react";
import HeaderTitle from "../../components/header-title/HeaderTitle";
import { Col, Input, Row, Space, Grid, Modal } from "antd";
import ContentCenter from "../../components/content-center/ContentCenter";
import CustomButton from "../../components/button/CustomButton";
// import { navigateTo } from "../../utils/common";
// import { useNavigate } from "react-router-dom";
import { USER_ICONS, USER_ICONS_STYLE } from "../../assets/data/avatar/avatar";
import AnimateClickable from "../../components/avatar/AnimateClickable";
import "./style.css";
import CustomColorPicker from "../../components/avatar/CustomColorPicker";
import MainBackground from "../../components/main-background/MainBackground";
import { useMain } from '../../context/MainContext'

const Avatar = () => {
  const { language, translations, goNextPage } = useMain();
  const screens = Grid.useBreakpoint();

  const [selectedImage, setSelectedImage] = useState(
    USER_ICONS_STYLE.icon1?.icon
  );
  const [color, setColor] = useState(USER_ICONS_STYLE.icon1);
  const [inputValue, setInputValue] = useState("");

  const handleChangeUserIcon = (e) => {
    setSelectedImage(e);
    setColor(USER_ICONS_STYLE[e]);
  };

  const handleChangeSkin = (hex) => {
    setColor((prep) => {
      return {
        ...prep,
        face: hex,
        neck: darkerColor(hex, -30),
      };
    });
  };

  const handleChangeHair = (hex) => {
    setColor((prep) => {
      return {
        ...prep,
        hairType1: hex,
        hairType2: darkerColor(hex, 40),
        hairType3: darkerColor(hex, 60),
        hairType4: darkerColor(hex, -20),
      };
    });
  };

  const darkerColor = (hex, add) => {
    let rgb = [
      parseInt(hex.slice(1, 3), 16),
      parseInt(hex.slice(3, 5), 16),
      parseInt(hex.slice(5, 7), 16),
    ];

    rgb = rgb.map((item) => {
      item = item + add;
      item = item > 255 ? 255 : item;
      item = item < 0 ? 0 : item;
      return item;
    });

    return (
      "#" +
      (0 | ((1 << 8) + rgb[0])).toString(16).substring(1) +
      (0 | ((1 << 8) + rgb[1])).toString(16).substring(1) +
      (0 | ((1 << 8) + rgb[2])).toString(16).substring(1)
    );
  };

  // const navigate = useNavigate();
  const handleClick = () => {
    // navigateTo(navigate, route);
    goNextPage()
  };

  const handleChange = (e) => {
    const regex = /^[a-zA-Zก-๙\s]*$/;

    if (regex.test(e.target.value) && e.target.value.length <= 40) {
      setInputValue(e.target.value);
    }
  };

  return (
    <MainBackground>
      <Modal open={true} closable={false} width="100%" footer={null}>
        <ContentCenter minHeight="90vh">
          <Col lg={16}>
            <Row justify="center" gutter={[4, 24]}>
              <Col xs={24} align="middle">
                <HeaderTitle title={translations[language].avatar.m1.h1} />
              </Col>
              <Col xs={24}>
                <Row gutter={[16, 16]}>
                  <Col
                    xs={{ span: 24, order: 1 }}
                    lg={{ span: 14, push: 1, order: 1 }}
                    className="hide-767"
                  >
                    <Row gutter={[4, 32]} style={{ padding: 10 }}>
                      {USER_ICONS?.map((image, index) => (
                        <Col
                          xs={12}
                          lg={7}
                          key={index}
                          align={screens.xs ? "middle" : ""}
                        >
                          <div
                            onClick={() => handleChangeUserIcon(image?.key)}
                            className="bouncein"
                            style={{ "--delay": `${index * 100}ms` }}
                          >
                            <AnimateClickable
                              className={`icon ${
                                selectedImage === image?.key
                                  ? "icon-select"
                                  : ""
                              }`}
                            >
                              <img src={image?.image} alt={image?.key} />
                            </AnimateClickable>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                  <Col
                    xs={{ span: 24, order: 2 }}
                    lg={{ span: 14, push: 1, order: 1 }}
                    className='show-767'
                    style={{overflowX:'scroll'}}
                  >
                    <div style={{ display: "flex", width: "100%" }}>
                      {USER_ICONS?.map((image, index) => (
                        <Col
                          xs={12}
                          lg={7}
                          key={index}
                          align={screens.xs ? "middle" : ""}
                        >
                          <div
                            onClick={() => handleChangeUserIcon(image?.key)}
                            key={index}
                            className="bouncein"
                            style={{ "--delay": `${index * 100}ms` }}
                          >
                            <AnimateClickable
                              className={`icon ${
                                selectedImage === image?.key
                                  ? "icon-select"
                                  : ""
                              }`}
                            >
                              <img src={image?.image} alt={image?.key} />
                            </AnimateClickable>
                          </div>
                        </Col>
                      ))}
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 24, order: 2 }}
                    lg={{ span: 10, order: 2, pull: 1 }}
                  >
                    <Row
                      justify="center"
                      align="middle"
                      style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        height: "100%",
                        padding: 10,
                      }}
                    >
                      <Col xs={14} align="middle" style={{padding:'1rem'}}>
                        {React.cloneElement(
                          USER_ICONS.find((i) => i?.key === selectedImage)
                            ?.icon,
                          { custom: color }
                        )}
                      </Col>
                      <Col xs={10} align="bottom">
                        <Space direction="vertical">
                          <CustomColorPicker
                            value="#F4D5CC"
                            text={translations[language].avatar.m1.d1} 
                            onChange={(_, hex) => handleChangeSkin(hex)}
                          />
                          <CustomColorPicker
                            value="#393939"
                            text={translations[language].avatar.m1.d2} 
                            onChange={(_, hex) => handleChangeHair(hex)}
                          />
                        </Space>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} lg={22}>
                <Input
                  showCount
                  maxLength={40}
                  size="large"
                  placeholder={translations[language].avatar.placeholder.h1} 
                  onChange={handleChange}
                  value={inputValue}
                />
              </Col>
              <Col xs={24} align="middle">
                <CustomButton
                  style="pink-style"
                  size="large"
                  text={translations[language].avatar.button.next} 
                  onClick={() => handleClick("/question/location")}
                  disabled={inputValue === ''}
                />
              </Col>
            </Row>
          </Col>
        </ContentCenter>
      </Modal>
    </MainBackground>
  );
};

export default Avatar;
