import React from "react";
import { Flex, Modal } from "antd";
import AnswerCard from "../../components/card/AnswerCard";
import "./style.css";
import KhaosoiImage from "../../assets/images/food/KhaoSoi.svg";
import TomyumImage from "../../assets/images/food/TomYum.svg";
import SomtumImage from "../../assets/images/food/SomTum.svg";
import GangtaiplaImage from "../../assets/images/food/GaengTaiPla.svg";
import MainBackground from "../../components/main-background/MainBackground";
import ContentCenter from "../../components/content-center/ContentCenter";
import { useMain } from "../../context/MainContext";
// import { useNavigate } from "react-router";
// import { navigateTo } from "../../utils/common";

const QuestionFood = () => {
	const { language, translations, goNextPage } = useMain();
	// const navigate = useNavigate();
	
	const handleClick = (value) => {
		//TODO: handle
		console.log(value);
		// navigateTo(navigate, "/question/activity");
		goNextPage();
	};

	return (
		<MainBackground className="bg-container">
			<Modal open={true} closable={false} width={1400} footer={null}>
				<ContentCenter>
					<p className="header-text">{translations[language].question.food.title}</p>
					<Flex justify="center" wrap="wrap" gap="large">
						<AnswerCard
							image={KhaosoiImage}
							title={translations[language].question.food.a1.h1}
							description={translations[language].question.food.a1.d1}
							onClick={() => handleClick("KHAOSOI")}
						/>
						<AnswerCard
							image={TomyumImage}
							title={translations[language].question.food.a2.h1}
							description={translations[language].question.food.a2.d1}
							onClick={() => handleClick("TOM_YUM_GOONG")}
						/>
						<AnswerCard
							image={SomtumImage}
							title={translations[language].question.food.a3.h1}
							description={translations[language].question.food.a3.d1}
							onClick={() => handleClick("SOM_TUM")}
						/>
						<AnswerCard
							image={GangtaiplaImage}
							title={translations[language].question.food.a4.h1}
							description={translations[language].question.food.a4.d1}
							onClick={() => handleClick("GANG_TAI_PLA")}
						/>
					</Flex>
				</ContentCenter>
			</Modal>
		</MainBackground>
	);
};

export default QuestionFood;
