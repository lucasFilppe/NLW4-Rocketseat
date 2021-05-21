import styles from '../styles/componentes/ChallengeBox.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContex } from '../contexts/CountdownContext';

export function ChallengeBox() {
    /*variavel que indica se temos um desafio ou não*/
     //const hasActiveChallenge = true;

     //vem de dentro do react
     const {activeChallenge, resetChallenge, completeChallange} = useContext(ChallengesContext);
     const {resetContdown}  = useContext(CountdownContex);
     
     function handleChallengeSucessed () {
         completeChallange();
         resetContdown();
     }

     function handleChallengeFailed () {
        resetChallenge();
        resetContdown();
    }

    return(
       <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className = {styles.challengeActive}>
                    
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    
                    <main>
                        <p>Icone/svg {activeChallenge.type}</p>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFailed}
                        >
                             Falhei
                        </button>
                        
                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                        onChangeCapture={completeChallange}
                        onClick={handleChallengeSucessed}
                        >
                            Completei
                        </button>
                    
                    </footer>
                </div>
            ) : (

             /*elemtos de quando nao estiver ativo*/
            <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
                <b>Icone level up</b>
                Avace de leve completando desafios
            </p>
            </div>
            )}
       </div> 
    )
}