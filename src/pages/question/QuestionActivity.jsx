import React from "react";
import { Flex, Modal } from "antd";
import AnswerCard from "../../components/card/AnswerCard";
import "./style.css";
import RestImage from "../../assets/images/activity/Rest.svg";
import GameImage from "../../assets/images/activity/PlayGames.svg";
import CleaningImage from "../../assets/images/activity/HouseCleaning.svg";
import WorkImage from "../../assets/images/activity/Work.svg";
import MainBackground from "../../components/main-background/MainBackground";
import ContentCenter from "../../components/content-center/ContentCenter";
import { useMain } from "../../context/MainContext";
// import { useNavigate } from "react-router";
// import { navigateTo } from "../../utils/common";

const QuestionActivity = () => {
	const { language, translations, menu, PAGE_STATE, goNextPage, setCurrentPage  } = useMain();
	// const navigate = useNavigate();

	const handleClick = (value) => {
		//TODO: handle
		console.log(value);
		if( menu==="water") {
			setCurrentPage(PAGE_STATE[11])
		}else {
			goNextPage()
		}
	};

	return (
		<MainBackground className="bg-container">
			<Modal open={true} closable={false} width={1400} footer={null}>
				<ContentCenter>
					<p className="header-text">
						{translations[language].question.activity.title} - {menu}
					</p>
					<Flex justify="center" wrap="wrap" gap="large">
						<AnswerCard
							image={RestImage}
							title={translations[language].question.activity.a1.h1}
							description={translations[language].question.activity.a1.d1}
							onClick={() => handleClick("REST")}
						/>
						<AnswerCard
							image={GameImage}
							title={translations[language].question.activity.a2.h1}
							description={translations[language].question.activity.a2.d1}
							onClick={() => handleClick("PLAY_GAMES")}
						/>
						<AnswerCard
							image={CleaningImage}
							title={translations[language].question.activity.a3.h1}
							description={translations[language].question.activity.a3.d1}
							onClick={() => handleClick("HOUSE_CLEANING")}
						/>
						<AnswerCard
							image={WorkImage}
							title={translations[language].question.activity.a4.h1}
							description={translations[language].question.activity.a4.d1}
							onClick={() => handleClick("WORK")}
						/>
					</Flex>
				</ContentCenter>
			</Modal>
		</MainBackground>
	);
};

export default QuestionActivity;
