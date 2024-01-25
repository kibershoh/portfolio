// LanguageProvider.js
import React, { useState, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from '../constants/translations';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = key => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
