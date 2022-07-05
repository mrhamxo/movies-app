import { createContext, useContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = createContext();

// create a provider component
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState({ show: 'false', msg: '' });
  const [query, setQuery] = useState('avengers');

  // get the movies data from the API
  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMovie(data.Search);

      if (data.Response === 'true') {
        setIsLoading(false);
        setMovie(data.Search);
      }
      else {
        setError({ show: 'true', msg: data.error });
        setIsLoading(true);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies(`${API_URL}&s=${query}`);
    // eslint-disable-next-line
  }, []);



  return <AppContext.Provider value={{ isLoading, error, movie, query, setQuery }}>
    {children}
  </AppContext.Provider>
}

// create a consumer component globally
const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };