import React, { useEffect, useState } from "react";
import ContentCenter from "../../components/content-center/ContentCenter";
import { Col, Modal, Grid } from "antd";
import MainBackground from "../../components/main-background/MainBackground";
import { useMain } from "../../context/MainContext";
import CustomButton from "../../components/button/CustomButton";
import CardDetails from "../../components/card-details/CardDetails";
import sandPagoda from "../../assets/images/sand-pagoda.svg";
import stonePagoda from "../../assets/images/stone-pagoda.svg";
import sandCastlePagoda from "../../assets/images/sand-castle-pagoda.svg";
// import { useNavigate } from "react-router";
// import { navigateTo } from "../../utils/common";
import "./style.css";

export const fetchData = () => {
  return {
    sandPagodas: [
      {
        id: 1,
        name: "John Smith",
        blessingWord: "",
        pagodaType: "SAND_CASTLE",
        avatar: {
          avatarId: "209538bb-ef7a-4801-8fb4-a585bfefeefb",
          icon: "icon1",
          face: "#F4D5CC",
          neck: "#D6B7AE",
          hairType1: "#393939",
          hairType2: null,
          hairType3: null,
          hairType4: null,
        },
      },
    ],
  };
};

const PagodaSelect = () => {
  const { language, translations } = useMain();
  const [pagodaData, setPagodaData] = useState([]);
  const [pagodaTitle, setPagodaTitle] = useState("");
  const [pagodaImage, setPagodaImage] = useState("");
  const [pagodaDetails, setPagodaDetails] = useState();
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  // const navigate = useNavigate();
  const handleClick = () => {
    // navigateTo(navigate, "/flag");
  };

  useEffect(() => {
    const data = fetchData();
    setPagodaData(data);
  }, []);

  useEffect(() => {
    if (pagodaData.sandPagodas && pagodaData.sandPagodas.length > 0) {
      if (pagodaData.sandPagodas[0].pagodaType === "SAND") {
        setPagodaTitle(translations[language].pagoda.pagoda_page.sand_pagoda);
        setPagodaDetails(
          translations[language].pagoda.pagoda_page.sand_pagoda_details
        );
        return setPagodaImage(sandPagoda);
      }
      if (pagodaData.sandPagodas[0].pagodaType === "STONE") {
        setPagodaTitle(translations[language].pagoda.pagoda_page.stone_pagoda);
        setPagodaDetails(
          translations[language].pagoda.pagoda_page.stone_pagoda_details
        );
        return setPagodaImage(stonePagoda);
      }
      if (pagodaData.sandPagodas[0].pagodaType === "SAND_CASTLE") {
        setPagodaTitle(
          translations[language].pagoda.pagoda_page.sand_castle_pagoda
        );
        setPagodaDetails(
          translations[language].pagoda.pagoda_page.sand_castle_pagoda_details
        );
        return setPagodaImage(sandCastlePagoda);
      }
    }
  }, [pagodaData]);

  return (
    <MainBackground className="bg-container">
      <Modal
        open={true}
        closable={false}
        width={800}
        footer={null}
        style={{ top: xs ? 0 : null }}
      >
        <ContentCenter>
          <div>
            <h1 className="title-style">
              {translations[language].pagoda.pagoda_page.title}
            </h1>
          </div>
          <Col xs={24} sm={24} align="center">
            <CardDetails
              imageWidth={174}
              imageHeight={174}
              imageSrc={pagodaImage}
              altImage={"Pagoda Image"}
              title={pagodaTitle}
              details={pagodaDetails}
            />
          </Col>
          <div
            style={{
              marginTop: xs ? "40px" : "120px",
              width: xs ? "300px" : "558px",
            }}
          >
            <CustomButton
              style="pagoda-next-style"
              text={translations[language].pagoda.pagoda_page.next}
              onClick={() => handleClick()}
              size="large"
            />
          </div>
        </ContentCenter>
      </Modal>
    </MainBackground>
  );
};

export default PagodaSelect;
