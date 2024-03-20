import React from "react";
import { Flex, Modal } from "antd";
import AnswerCard from "../../components/card/AnswerCard";
import "./style.css";
import FriendsImage from "../../assets/images/person/friends.svg";
import FamilyImage from "../../assets/images/person/family.svg";
import PartnerImage from "../../assets/images/person/partner.svg";
import PetImage from "../../assets/images/person/pet.svg";
import MainBackground from "../../components/main-background/MainBackground";
import ContentCenter from "../../components/content-center/ContentCenter";
import { useMain } from "../../context/MainContext";
// import { useNavigate } from "react-router";
// import { navigateTo } from "../../utils/common";

const QuestionPerson = () => {
	const { language, translations, goNextPage } = useMain();
	// const navigate = useNavigate();

	const handleClick = () => {
		//TODO: handle
		// console.log(value);
		// navigateTo(navigate, "/question/food");
		goNextPage();
	};

	return (
		<MainBackground className="bg-container">
			<Modal open={true} closable={false} width={1400} footer={null}>
				<ContentCenter>
					<p className="header-text">
					{translations[language].question.person.title}
					</p>
					<Flex justify="center" wrap="wrap" gap="large">
						<AnswerCard
							image={FriendsImage}
							title={translations[language].question.person.a1.h1}
							description={translations[language].question.person.a1.d1}
							onClick={() => handleClick("FRIENDS")}
						/>
						<AnswerCard
							image={FamilyImage}
							title={translations[language].question.person.a2.h1}
							description={translations[language].question.person.a2.d1}
							onClick={() => handleClick("FAMILY")}
						/>
						<AnswerCard
							image={PartnerImage}
							title={translations[language].question.person.a3.h1}
							description={translations[language].question.person.a3.d1}
							onClick={() => handleClick("PARTNER")}
						/>
						<AnswerCard
							image={PetImage}
							title={translations[language].question.person.a4.h1}
							description={translations[language].question.person.a4.d1}
							onClick={() => handleClick("PET")}
						/>
					</Flex>
				</ContentCenter>
			</Modal>
		</MainBackground>
	);
};

export default QuestionPerson;
