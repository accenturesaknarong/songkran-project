import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Col, Grid, Row } from "antd";
import IconImage from "../icon-image/IconImage";

const CardDetails = ({
  maxWidthContainer,
  backgroundColor,
  imageSrc,
  altImage,
  imageWidth,
  imageHeight,
  imageDetails,
  subImageSrc,
  altSubImage,
  title,
  titleColor,
  details,
}) => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  return (
    <div
      className="card-details-container"
      style={{
        maxWidth: maxWidthContainer ?? "517px",
        backgroundColor: backgroundColor ?? "#F5F5F5",
      }}
    >
      <div className="inner-container">
        <Row>
          <Col xs={24} sm={24} md={11} lg={11} className="first-image-col">
            <div className="icon-image">
              <IconImage
                width={imageWidth}
                height={imageHeight}
                imageSrc={imageSrc}
                altText={altImage ?? "Image"}
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={13} lg={13}>
            <div>
              <p
                className="title"
                style={{
                  color: titleColor ?? "#E804FC",
                }}
              >
                {title ?? "title"}
              </p>
            </div>
            <p
              className="details"
              style={{ paddingRight: xs ? "0px" : "32px" }}
            >
              {details ?? "details"}
            </p>
          </Col>
        </Row>
        {imageDetails && subImageSrc && (
          <Row>
            <Col xs={24} sm={24} md={11} lg={11}>
              <div>
                <p className="image-details">
                  {imageDetails ?? "image details"}
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={13} lg={13}>
              {subImageSrc && (
                <div className="sub-image-container">
                  <img src={subImageSrc} alt={altSubImage ?? "image"} />
                </div>
              )}
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

CardDetails.propType = {
  maxWidthContainer: PropTypes.string,
  backgroundColor: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  imageDetails: PropTypes.string,
  subImageSrc: PropTypes.string,
  altSubImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  details: PropTypes.string.isRequired,
};

export default CardDetails;
