"use client";
import React, { useState, memo, useMemo } from "react";

interface MenuLanguageProps {
  titleLanguage: string;
  keyLanguage: string;
}

interface LanguageProps {
  menuLanguage: MenuLanguageProps[];
}

const Language = (props: LanguageProps) => {
  const { menuLanguage } = props;

  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [languageActive, setLanguageActive] = useState(localStorage.getItem('language'));

  const onSelectLanguage = (value) => {
    setLanguageActive(value);
    localStorage.setItem('language', value);
  }

  const title = useMemo(()=>{
    return menuLanguage.find((item) => item.keyLanguage === languageActive)?.titleLanguage
  }, [languageActive])

  return (
    <React.Fragment>
      <a
        onClick={() => setDropdownToggler(!dropdownToggler)}
        className="hover:text-primary flex items-center justify-between gap-3 cursor-pointer"
      >
        {title}
      </a>
      <ul
        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
      >
        {menuLanguage.map((item, key) => (
          <li key={key} className="hover:text-primary">
            <div onClick={() => { onSelectLanguage(item.keyLanguage) }}>{item.titleLanguage}</div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default memo(Language);
