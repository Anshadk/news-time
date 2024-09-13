import React, { useEffect, useState } from 'react';
import NavBar from "./Components/NavBar";
import NewsBoard from "./Components/NewsBoard";
import axios from 'axios';
import { APIKEY, BASE_URL } from "./Constants/Constant";

function App() {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('general'); 

  const handleNavClick = (selectedCategory) => {
    setCategory(selectedCategory); 
    //console.log(selectedCategory );
  };

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    //console.log(selectedCountry);
  };

  const URL = `${BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${APIKEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setNews(response.data.articles);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [country, category]);
  
  return (
    <>
      <NavBar onCategoryChange={handleNavClick} onCountryChange={handleCountryChange} />
      <NewsBoard news={news} />
    </>
  );
}

export default App;
