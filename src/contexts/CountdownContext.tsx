import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContexData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isactive: boolean;
    startCountdown:() => void;
    resetContdown:() => void;
}

interface CountdownProviderProps{
    children: ReactNode;
}


export const CountdownContex = createContext({} as CountdownContexData)

//formato do countdown
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider ( {children}: CountdownProviderProps ) {
    const {startNewChallenge} = useContext(ChallengesContext);

    //criando estado
    const [time, setTime] = useState(0.1 * 60);

    //estado que armazena se o o countdown esta aberto ou parado
    const [isactive, setIsActive] = useState(false);

    //estado para quando estiver finalizado o contdown
    const [hasFinished, sethasFinished]  = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown(){
        setIsActive(true);
    }

    function resetContdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
        sethasFinished(false);
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

    return (
        <CountdownContex.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isactive,
            startCountdown,
            resetContdown,

        }}>
            {children}
        </CountdownContex.Provider>
    )
}