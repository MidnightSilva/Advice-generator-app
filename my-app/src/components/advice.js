import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Advice = () => {
  const advice = useContext(AppContext);
  console.log(advice)
  return (


    <div className="advice">{advice.advice}</div>
  );
};

export default Advice;
