import Dice from '../Assets/icon-dice.svg'
import { AppContext } from "../context/AppContext";
import { useContext } from "react"



const AdviceBtn = () => {

  const AdviceGenerator = useContext(AppContext)
  return (
    <div
      onClick={() => AdviceGenerator(!AdviceGenerator)}
      className="adviceBtn"
    >
      <img src={Dice} alt="dice" />
    </div>
  );
}

export default AdviceBtn