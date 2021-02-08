import React, {useContext} from 'react'
import {quizContext} from "../Helpers/Contexts";
import '../App.css';
import {allQuestions} from '../Helpers/Questions';

export default function Result() {
    const { score, setScore, setState } = useContext(quizContext);

    const restartQuiz = () => {
        //Resets the score and returns to the main menu
        setScore(0);
        setState("menu");
    }

     const showAnswers = () => {
        //Resets the score and returns to answer
        setScore(0);
        setState("answers");
    }

    return (
        <div className = "result">
           <h2>Quiz done. Good Job!!</h2>

           {/* Displays the total number */}
           <h3>{score}/{allQuestions.length}</h3>
           <button onClick = {restartQuiz}>Restart</button>
           <button onClick = {showAnswers}>Show Answers</button>
        </div>
    )
}
