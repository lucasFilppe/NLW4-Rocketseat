import styles from '../styles/componentes/Countdown.module.css';
import { useState, useEffect, useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

//formato do countdown
let countdownTimeout: NodeJS.Timeout;

export function Countdown(){

    const {startNewChallenge} = useContext(ChallengesContext);

    //criando estado
    const [time, setTime] = useState(0.1 * 60);

    //estado que armazena se o o countdown esta aberto ou parado
    const [isactive, setIsActive] = useState(false);

    //estado para quando estiver finalizado o contdown
    const [hasFinished, sethasFinished]  = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetContdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    
    useEffect(()=> 
    {
        if(isactive && time > 0) {
            countdownTimeout = setTimeout(() => {
             setTime(time - 1); 
        }, 1000)
    
        }
        //se o cpntdown estiver ativo e time for igual a 0 
        else if (isactive && time == 0 )
        {
            sethasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isactive, time])

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