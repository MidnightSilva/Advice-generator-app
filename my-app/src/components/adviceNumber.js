import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const AdviceNumber = () => {
  const advice = useContext(AppContext);
  console.log(advice);
  return <div className="adviceNumber">{advice.adviceNumber}</div>;
};

export default AdviceNumber;
