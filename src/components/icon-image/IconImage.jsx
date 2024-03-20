import React from "react";
import PropTypes from "prop-types";
import placeholderImage from "../../assets/images/placeholder-icon.png";
import "./style.css";

const IconImage = ({
  imageSrc,
  altText,
  width,
  height,
  isDisabledBackground,
  backgroundColor,
  borderColor,
  borderWidth,
  isBorderImage,
}) => {
  return (
    <div
      className="icon-image-container"
      style={{
        width: width ?? "160px",
        height: height ?? "160px",
      }}
    >
      <img
        src={imageSrc ?? placeholderImage}
        alt={altText ?? "image"}
        style={{
          backgroundColor: isDisabledBackground
            ? null
            : backgroundColor ?? "white",
        }}
      />
      {isBorderImage && (
        <div
          className="inner-border"
          style={{
            border: `${borderWidth ?? 6}px solid ${borderColor ?? "#db00ff"}`,
          }}
        />
      )}
    </div>
  );
};

IconImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  isDisabledBackground: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  isBorderImage: PropTypes.bool,
};

export default IconImage;
