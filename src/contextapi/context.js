import { createContext, useContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = createContext();

// create a provider component
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: 'false', msg: '' });
  const [query, setQuery] = useState('avengers');

  // get the movies data from the API
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.Response === 'True') {
        setIsLoading(false);
        setIsError({ show: false, msg: "" });
        setMovie(data.Search);
      }
      else {
        setIsError({ show: true, msg: data.Error });
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 800);
    return () => clearTimeout(timerOut);

  }, [query]);



  return <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
    {children}
  </AppContext.Provider>
}

// create a consumer component globally
const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext, API_URL };