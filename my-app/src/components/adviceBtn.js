import Dice from '../Assets/icon-dice.svg'

// import { AppContext } from "../context/AppContext";




const adviceBtn = () => {

  // const AdviceGenerator = useContext(AppContext)
  return (
    <div
      // onClick={() => AdviceGenerator(!AdviceGenerator)}
      className="adviceBtn"
    >
      <img src={Dice} alt="dice" />
    </div>
  );
}

export default adviceBtn