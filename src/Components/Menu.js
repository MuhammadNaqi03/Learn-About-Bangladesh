import React, {useContext} from 'react'
import {quizContext} from "../Helpers/Contexts";
import '../App.css';

export default function Menu() {
    const { quizState, setState} = useContext(quizContext);
    return (
        <div className = "menu">
            <button onClick = {() => setState("quiz")}>Start Quiz</button>
        </div>
    )
}
