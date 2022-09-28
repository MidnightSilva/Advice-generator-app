import Dice from '../Assets/icon-dice.svg'
import { AppContext  } from "../context/AppContext";
import { useContext } from "react";




const AdviceBtn = () => {

const GetAdvice = useContext(AppContext);

  return (
    <div
      onClick={() => GetAdvice.GetAdvice(!GetAdvice.GetAdvice)}
      className="adviceBtn"
    >
      <img src={Dice} alt="dice" />
    </div>
  );
  }
export default AdviceBtn