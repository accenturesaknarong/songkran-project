import React from "react";
import { Flex, Modal } from "antd";
import AnswerCard from "../../components/card/AnswerCard";
import "./style.css";
import CityImage from "../../assets/images/location/City.svg";
import CulturalImage from "../../assets/images/location/CulturalPlaces.svg";
import BeachImage from "../../assets/images/location/Beach.svg";
import SpaceImage from "../../assets/images/location/OuterSpace.svg";
import MainBackground from "../../components/main-background/MainBackground";
import ContentCenter from "../../components/content-center/ContentCenter";
import { useMain } from "../../context/MainContext";
// import { useNavigate } from "react-router";
// import { navigateTo } from "../../utils/common";

const QuestionLocation = () => {
	const { language, translations, goNextPage } = useMain();
	// const navigate = useNavigate();
	
	const handleClick = () => {
		//TODO: handle
		// navigateTo(navigate, "/question/person");
		goNextPage();
	};

	return (
		<MainBackground className="bg-container">
			<Modal open={true} closable={false} width={1400} footer={null}>
				<ContentCenter>
					<p className="header-text">{translations[language].question.location.title}</p>
					<Flex justify="center" wrap="wrap" gap="large">
						<AnswerCard
							image={CityImage}
							title={translations[language].question.location.a1.h1}
							description={translations[language].question.location.a1.d1}
							onClick={() => handleClick("CITY")}
						/>
						<AnswerCard
							image={CulturalImage}
							title={translations[language].question.location.a2.h1}
							description={translations[language].question.location.a2.d1}
							onClick={() => handleClick("CULTURAL_PLACES")}
						/>
						<AnswerCard
							image={BeachImage}
							title={translations[language].question.location.a3.h1}
							description={translations[language].question.location.a3.d1}
							onClick={() => handleClick("BEACH")}
						/>
						<AnswerCard
							image={SpaceImage}
							title={translations[language].question.location.a4.h1}
							description={translations[language].question.location.a4.d1}
							onClick={() => handleClick("OUTER_SPACE")}
						/>
					</Flex>
				</ContentCenter>
			</Modal>
		</MainBackground>
	);
};

export default QuestionLocation;
