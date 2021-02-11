import React, { createContext, useContext } from 'react';

// our context sets a property of type string
const LanguageContext = createContext({ lang: 'en' });

const Display = () => {
  // lang will be of type string
  const { lang } = useContext(LanguageContext);
  return <>
    <p>Your selected language: {lang}</p>
  </>
}

export default Display;