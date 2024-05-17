import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({onButtonClick}) =>{
    const buttonName = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "8", "/", "=", "9", "0", "."];
    return (
        <div className={styles.buttonContainer}>
            {buttonName.map((name,i) => (
             <button key={i} className={styles.button}
                     onClick={() => onButtonClick(buttonName[i])}
             >{name}</button>
            ))}

        </div>
    );
}

export default ButtonContainer;