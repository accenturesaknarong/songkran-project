import React, { useEffect, useState } from "react";
import ContentCenter from "../../components/content-center/ContentCenter";
import Loading1 from "../../assets/images/loading/Loading-1.svg";
import Loading2 from "../../assets/images/loading/Loading-2.svg";
import Loading3 from "../../assets/images/loading/Loading-3.svg";
import Loading4 from "../../assets/images/loading/Loading-4.svg";
import Loading5 from "../../assets/images/loading/Loading-5.svg";
import LoadingGrey1 from "../../assets/images/loading-grey/Loading-grey-1.svg";
import LoadingGrey2 from "../../assets/images/loading-grey/Loading-grey-2.svg";
import LoadingGrey3 from "../../assets/images/loading-grey/Loading-grey-3.svg";
import LoadingGrey4 from "../../assets/images/loading-grey/Loading-grey-4.svg";
import LoadingGrey5 from "../../assets/images/loading-grey/Loading-grey-5.svg";
import { Flex } from "antd";
import "./style.css";
//import { useNavigate } from "react-router";
import { useMain } from "../../context/MainContext";

const Generate = () => {
	const { language, translations } = useMain();
	const [loading, setLoading] = useState(0);
	//const navigate = useNavigate();

	useEffect(() => {
		const interval = setInterval(() => {
			setLoading(loading + 1);
		}, 500);

		//Clearing the interval
		return () => clearInterval(interval);
	}, [loading]);

	return (
		<ContentCenter>
			<Flex vertical gap="large">
				<p className="header">
					{translations[language].generate.title + ".".repeat(loading % 4)}
				</p>
				<p className="subtitle">{translations[language].generate.subtitle}</p>
				<Flex justify="center" wrap="wrap" gap="large">
					<img src={loading % 6 >= 1 ? Loading1 : LoadingGrey1} />
					<img src={loading % 6 >= 2 ? Loading2 : LoadingGrey2} />
					<img src={loading % 6 >= 3 ? Loading3 : LoadingGrey3} />
					<img src={loading % 6 >= 4 ? Loading4 : LoadingGrey4} />
					<img src={loading % 6 >= 5 ? Loading5 : LoadingGrey5} />
				</Flex>
			</Flex>
		</ContentCenter>
	);
};

export default Generate;
