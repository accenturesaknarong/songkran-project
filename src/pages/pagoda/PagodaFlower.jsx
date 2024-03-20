import React, { useEffect, useState } from "react";
import ContentCenter from "../../components/content-center/ContentCenter";
import { Col, Modal, Grid, Row } from "antd";
import MainBackground from "../../components/main-background/MainBackground";
import { useMain } from "../../context/MainContext";
import CustomButton from "../../components/button/CustomButton";
import CardDetails from "../../components/card-details/CardDetails";
import lotusFlower from "../../assets/images/flower/flower-lotus.svg";
import lotusWhiteFlower from "../../assets/images/flower/flower-lotus-white-bg.svg";
import goldenShower from "../../assets/images/flower/flower-golden-shower.svg";
import goldenWhiteShower from "../../assets/images/flower/flower-golden-shower-white-bg.svg";
import marigoldFlower from "../../assets/images/flower/flower-marigold.svg";
import marigoldWhiteFlower from "../../assets/images/flower/flower-marigold-white-bg.svg";
import orchidFlower from "../../assets/images/flower/flower-orchid.svg";
import orchidWhiteFlower from "../../assets/images/flower/flower-orchid-white-bg.svg";
import { useNavigate } from "react-router";
import { navigateTo } from "../../utils/common";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";
import IconImage from "../../components/icon-image/IconImage";
import { FreeMode, Pagination } from "swiper/modules";

const FlowersDetails = [
  {
    flowerName: "Lotus",
    flowerImage: lotusFlower,
    flowerWhiteImage: lotusWhiteFlower,
    flowerTitle: "Lotus",
    flowerDetails: "A symbol of purity. This flower emerges from muddy water reminding us that goodness can be found anywhere.",
  },
  {
    flowerName: "Golden Shower",
    flowerImage: goldenShower,
    flowerWhiteImage: goldenWhiteShower,
    flowerTitle: "Golden Shower",
    flowerDetails: "Golden Showers live up to their name, believed to bring wealth. The more, the merrier!",
  },
  {
    flowerName: "Orchid",
    flowerImage: orchidFlower,
    flowerWhiteImage: orchidWhiteFlower,
    flowerTitle: "Orchid",
    flowerDetails:
      "Orchids symbolize love and reflect the diversity of love through their wide array of species.",
  },
  {
    flowerName: "Marigold",
    flowerImage: marigoldFlower,
    flowerWhiteImage: marigoldWhiteFlower,
    flowerTitle: "Marigold",
    flowerDetails:
      "The vibrant blooms of marigolds are a symbol of abundance and prosperity.",
  },
];

const PagodaFlower = () => {
  const { language, translations } = useMain();
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg } = useBreakpoint();

  const [selectedFlower, setSelectedFlower] = useState(FlowersDetails[0]);

  useEffect(() => {
    console.log("Hello size xs: ", xs);
    console.log("Hello size sm:", sm);
    console.log("Hello size md: ", md);
    console.log("Hello size lg: ", lg);
    console.log("-------------------");
  }, [xs, sm, md, lg]);

  const onSelectFlower = (flower) => {
    const selected = FlowersDetails.find(
      (element) => element?.flowerName === flower
    );
    if (selected) {
      console.log(`Hello ${selected.flowerName}`);
      setSelectedFlower(selected);
    }
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigateTo(navigate, "/result");
  };

  return (
    <MainBackground className="bg-container">
      <div className="ant-modal">
        <div className="ant-modal-content">
          <Modal
            open={true}
            closable={false}
            width={956}
            footer={null}
            className="flower-select-modal"
            style={{
              top: 0,
            }}
          >
            <ContentCenter paddingLeft={0} paddingRight={0}>
              <h1
                className="title-style"
                style={{
                  fontSize: xs ? "24px" : "48px",
                  marginTop: xs ? "40px" : "191px",
                }}
              >
                {translations[language].pagoda.flower_page.title}
              </h1>

              <Row>
                <Col xs={24} sm={24} md={24} lg={11}>
                  <Row
                    style={{
                      marginRight: sm && md && lg ? "64px" : "0px",
                    }}
                  >
                    {xs || (sm && !md && !lg) ? (
                      <div style={{ width: "100%", display: "flex" }}>
                        <Swiper
                          slidesPerView={4}
                          spaceBetween={0}
                          freeMode={true}
                          autoHeight={true}
                          breakpoints={{
                            250: {
                              slidesPerView: 2,
                            },
                            295: {
                              slidesPerView: 2.25,
                            },
                            330: {
                              slidesPerView: 2.6,
                            },
                            370: {
                              slidesPerView: 2.8,
                            },
                            420: {
                              slidesPerView: 3,
                            },
                            470: {
                              slidesPerView: 3.8,
                            },
                            550: {
                              slidesPerView: 4,
                            },
                          }}
                          modules={[FreeMode, Pagination]}
                        >
                          {FlowersDetails.map((flower, index) => (
                            <SwiperSlide key={index}>
                              <div
                                style={{
                                  width:
                                    xs || (sm && !md && !lg)
                                      ? "112px"
                                      : "160px",
                                  height:
                                    xs || (sm && !md && !lg)
                                      ? "112px"
                                      : "160px",
                                  marginLeft: "24px",
                                }}
                              >
                                <IconImage
                                  imageSrc={flower.flowerImage}
                                  altText={"Flower Image"}
                                  width={
                                    xs || (sm && !md && !lg) ? "112px" : "160px"
                                  }
                                  height={
                                    xs || (sm && !md && !lg) ? "112px" : "160px"
                                  }
                                  isBorderImage={
                                    selectedFlower?.flowerName ===
                                    FlowersDetails[index]?.flowerName
                                  }
                                  isCursorPointer
                                  onClickImage={() => {
                                    onSelectFlower(flower.flowerName);
                                  }}
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    ) : (
                      <>
                        {FlowersDetails.map((flower, index) => (
                          <Col
                            key={index}
                            xs={6}
                            sm={6}
                            md={6}
                            lg={12}
                            className="flower-col"
                            style={{
                              justifyContent:
                                sm && md && lg ? "right" : "center",
                              paddingBottom:
                                (index === 0 || index === 1) && "20px",
                              paddingRight:
                                (index === 0 || index === 2) && "23px",
                            }}
                          >
                            <IconImage
                              imageSrc={flower.flowerImage}
                              altText={"Flower Image"}
                              isBorderImage={
                                selectedFlower?.flowerName ===
                                FlowersDetails[index]?.flowerName
                              }
                              isCursorPointer
                              onClickImage={() => {
                                onSelectFlower(flower.flowerName);
                              }}
                            />
                          </Col>
                        ))}
                      </>
                    )}
                  </Row>
                </Col>

                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={13}
                  align="center"
                  style={{
                    marginTop: sm && md && lg ? null : "40px",
                    marginBottom: xs && "100px",
                    paddingLeft: xs && "16px",
                    paddingRight: xs && "16px",
                  }}
                >
                  <CardDetails
                    imageWidth={174}
                    imageHeight={174}
                    imageSrc={
                      selectedFlower?.flowerWhiteImage ??
                      FlowersDetails[0].flowerWhiteImage
                    }
                    altImage={"Flower Image"}
                    title={
                      selectedFlower?.flowerTitle ??
                      FlowersDetails[0].flowerTitle
                    }
                    details={
                      selectedFlower?.flowerDetails ??
                      FlowersDetails[0].flowerDetails
                    }
                  />
                </Col>
              </Row>
              <div
                className={xs && "bottom-button"}
                style={{
                  marginTop: !xs && "100px",
                  width: xs ? "90%" : "558px",
                }}
              >
                <CustomButton
                  style="pagoda-next-style"
                  height={xs ? 48 : null}
                  text={translations[language].pagoda.flower_page.next}
                  onClick={() => handleClick()}
                  size="large"
                />
              </div>
            </ContentCenter>
          </Modal>
        </div>
      </div>
    </MainBackground>
  );
};

export default PagodaFlower;
