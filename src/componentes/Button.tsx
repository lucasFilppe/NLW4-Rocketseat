//importa do react funcionalidade useState
//para definir estados dentro do componente
import {useState} from 'react';

//interface de propriedades que o botao pode receber
interface ButtonProps{
    //umar cor que é uma string
    color: string;
    children: string;
} 

//função que retorna um html butao
//utilizar chaves dentro do html significa usar o java script
export function Button(props: ButtonProps){

    const[counter, setCounter] = useState(1)

    function increment(){
        setCounter(counter + 1);
    }

    return(
        <button 
            type = "button" 
            style = {{backgroundColor: props.color}}     
            onClick = {increment}>
            {props.children}<strong>{counter}</strong>   
        </button>
    );  
}