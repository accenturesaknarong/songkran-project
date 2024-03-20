import React, { createContext, useState, useContext } from 'react';
import en from '../assets/data/english.json';
import th from '../assets/data/thai.json';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [menu, setMenu] = useState('');
  const translations = { en, th };
  const PAGE_STATE = ["Home", "Language", "Menu", "Avatar", "Question-location", "Question-person", "Question-food", "Question-activity", "Result", "Pagoda", "Flag", "Parade"]
	const [currentPage, setCurrentPage] = useState(PAGE_STATE[0])

  // console.log(document?.documentElement?.lang)


  const switchLanguage = (lang) => {
    setLanguage(lang);
    document.documentElement.lang = lang

  };

  const switchMenu = (name) => {
    setMenu(name);
  };

  const goNextPage = () => {
    setCurrentPage(prev => {
      return PAGE_STATE[PAGE_STATE?.findIndex(page => page===prev) + 1]
    })
  }

  const goBackPage = () => {
    setCurrentPage(prev => {
      return PAGE_STATE[PAGE_STATE?.findIndex(page => page===prev) - 1]
    })
  }

  return (
    <MainContext.Provider value={{ language, switchLanguage, translations, menu, switchMenu, PAGE_STATE, currentPage, setCurrentPage, goNextPage, goBackPage }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => useContext(MainContext);
