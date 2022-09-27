import { useState, createContext } from "react";
import axios from 'axios'

export const AppContext = createContext();

const AppContextProvider = (props) => {
const url = "https://api.adviceslip.com/advice";


const AdviceGenerator =()=>{
const [advice, setAdvice ]= useState([])
axios.get(url)
.then(Response => Response.data)
.then((data)=>{
setAdvice(data).catch((error) => console.log("An error occured"));})
}



    const value = {
      AdviceGenerator,
    };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;