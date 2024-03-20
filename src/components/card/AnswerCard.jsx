import { Card } from "antd";
import React from "react";
import PropTypes from "prop-types";
import "./style.css"

const AnswerCard = ({image, title, description, onClick}) => {
	return (
		<Card
			hoverable
			className="card-style"
			cover={
				<img
					className="card-image"
					style={{borderRadius: "32px 32px 0px 0px"}}
					src={image}
				/>
			}
			onClick={onClick}
		>
			<p className="text-title">{title}</p>
			<p className="text-description">{description}</p>
		</Card>
	);
};

AnswerCard.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	onClick: PropTypes.func,
}

export default AnswerCard;
