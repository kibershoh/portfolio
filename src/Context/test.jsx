import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Test() {
  const { t, language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="mt-20">
     
      <h1>{t('hello')}</h1>
      <p>{t('welcome')}</p>
      <ul>
        {t('fruits').map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <p>{t('user').name}</p>
      <p>{t('user').age}</p>
    </div>
  );
}

export default Test;