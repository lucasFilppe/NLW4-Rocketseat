import styles from '../styles/componentes/ChallengeBox.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function ChallengeBox() {
    /*variavel que indica se temos um desafio ou não*/
     //const hasActiveChallenge = true;

     //vem de dentro do react
     const {activeChallenge, resetChallenge} = useContext(ChallengesContext);
    
     


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
                        onClick={resetChallenge}
                        >
                             Falhei
                        </button>
                        
                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
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