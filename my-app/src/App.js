import './App.css';
import Advice from "./components/advice"
import AdviceBtn from './components/adviceBtn';
import AdviceNumber from './components/adviceNumber'
import Divider from "./Assets/pattern-divider-desktop.svg"
import AppContextProvider from "./context/AppContext";




function App() {
  return (

    <AppContextProvider>
      <div>
        <div className="advice-card">
          <AdviceNumber />
          <Advice />
          <img src={Divider} alt="divider" />
        </div>
        <AdviceBtn />
      </div>
    </AppContextProvider>
  );
}

export default App;
