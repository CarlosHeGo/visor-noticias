import React, { createContext, useEffect, useState, useContext } from 'react';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/noticias.json');
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error('Error al cargar el JSON:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={newsData}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);