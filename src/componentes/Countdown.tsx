import styles from '../styles/componentes/Countdown.module.css';
import { useContext } from 'react';
import { CountdownContex } from '../contexts/CountdownContext';




export function Countdown(){

    const { minutes ,
         seconds, 
         hasFinished, 
         isactive, 
         startCountdown, 
         resetContdown} = useContext(CountdownContex)

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split('');



    return(
       <div> 
            <div className ={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRigth}</span>
                </div>
            </div>


            {hasFinished ? (
            <button type="button"
                disabled 
                className={styles.countdownButton}
                >
                    Ciclo encerrado
            </button>
            ) : (
            <>
                {isactive ? (
                <button type="button" 
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick ={resetContdown}
                >
                    Abandona ciclo
                </button>
            ) : (
                <button type="button" 
                className={styles.countdownButton}
                onClick ={startCountdown}
                >
                    Iniciar ciclo    
                </button>
            )}
            </>
            )}

        </div>   
    );
}