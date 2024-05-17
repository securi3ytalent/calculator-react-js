import { useState } from 'react'
import './App.css'
import styles from './App.module.css'
import Display from "./component/Display.jsx";
import ButtonContainer from "./component/ButtonContainer.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    let [calVal, setCalVal] = useState("");
    let onBUttonClick = (butoonText) => {
        if(butoonText === "C"){
            setCalVal("");
        }
        else if(butoonText === "="){
            setCalVal(eval(calVal));
        }
        else{
            setCalVal(calVal + butoonText);
        }
    }

  return (
    <>
        <div className={styles.calculator}>
            <Display displayValue={calVal} />
            <ButtonContainer
                onButtonClick={onBUttonClick}
            />
        </div>
    </>
  )
}

export default App
