import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Language from "./Language";
import { useMain } from "../../context/MainContext";
import Menu from "./Menu";
// import { MainProvider } from "../../context/MainContext";
import Avatar from "../avatars/Avatar";
import QuestionActivity from "../question/QuestionActivity";
import QuestionFood from "../question/QuestionFood";
import QuestionLocation from "../question/QuestionLocation";
import QuestionPerson from "../question/QuestionPerson";
import Result from "../result/Result";
import PagodaSelect from "../pagoda/PagodaSelect";
import PagodaFlag from "../pagoda/PagodaFlag";
import PagodaFlower from "../pagoda/PagodaFlower";
import Parade from "../parade/Parade";



const Main = () => {
	const { PAGE_STATE, currentPage } = useMain()

	const STATE = new Map([
		[PAGE_STATE[0], { component: <Home /> }],
		[PAGE_STATE[1], { component: <Language /> }],
		[PAGE_STATE[2], { component: <Menu /> }],
		[PAGE_STATE[3], { component: <Avatar /> }],
		[PAGE_STATE[4], { component: <QuestionLocation /> }],
		[PAGE_STATE[5], { component: <QuestionPerson /> }],
		[PAGE_STATE[6], { component: <QuestionFood /> }],
		[PAGE_STATE[7], { component: <QuestionActivity /> }],
		[PAGE_STATE[8], { component: <PagodaSelect /> }],
		[PAGE_STATE[9], { component: <PagodaFlag /> }],
		[PAGE_STATE[10], { component: <PagodaFlower /> }],
		[PAGE_STATE[11], { component: <Result /> }],
		[PAGE_STATE[12], { component: <Parade /> }],
	])

	//   const INITIAL_USER_SONGKRAN_CARD = {
	//     lang: "",
	//     type: "",
	//     questions: [],
	//   };

	//   const reducer = (state, action) =>{
	// 	switch action.type{

	// 	}
	//   }

	//   const [data, dispatch] = useReducer(reducer, INITIAL_KRATONG_DATA);

	return (
		STATE?.get(currentPage)?.component
	);
};



export default Main;
