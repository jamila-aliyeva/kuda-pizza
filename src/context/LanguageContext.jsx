import { createContext, useState } from "react";
import PropTypes from "prop-types";
import languages from "../components/data/languages";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [langType, setLangType] = useState(
    localStorage.getItem("language") || "ru"
  );

  const changeLang = (e) => {
    setLangType(e.target.value);
    localStorage.setItem("language", e.target.value);
  };

  const state = {
    langType,
    lang: languages[langType],
    setLangType,
    changeLang,
  };
  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageContextProvider.prototype = {
  children: PropTypes.node,
};
export default LanguageContextProvider;
