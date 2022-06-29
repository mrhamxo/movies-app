import { createContext, useContext } from "react";

const AppContext = createContext();

// create a provider component
const AppProvider = ({children}) => {
  return <AppContext.Provider value='hamza'>
    {children}
  </AppContext.Provider>
}

// create a consumer component globally
const useGlobalContext = () => {
  return useContext(AppContext);
}
export {AppContext, AppProvider, useGlobalContext};