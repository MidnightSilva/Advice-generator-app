import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const AdviceNumber = () => {
  const advice = useContext(AppContext);
 
  return <div className="adviceNumber">{advice.setAdviceNumber}</div>;
};

export default AdviceNumber;
