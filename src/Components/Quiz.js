import React, {useState, useContext} from 'react'
import {allQuestions} from '../Helpers/Questions';
import {quizContext} from "../Helpers/Contexts";

export default function Quiz() {
    const {score, setScore, setState} = useContext(quizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerGiven, setAnswerGiven] = useState("");


    const nextQuestion = () => {
        {/* Increments the score if the answer is correct */}
        if(allQuestions[currentQuestion].solution === answerGiven){
            setScore(score+1);
        } 
        {/* Goes to the next question */}
        setCurrentQuestion(currentQuestion+1);
    };

    const endQuiz = () => {
        if(allQuestions[currentQuestion].solution === answerGiven){
            setScore(score+1);
        } 
        //Changes the state
        setState("result");
    };

    return (
        <div className="quiz">
            {/* Question to show */}
            <h2>{allQuestions[currentQuestion].prompt}</h2>

            <div className = "options">

                {/* Options to show */}
                <button onClick = {() => setAnswerGiven("a")}>{allQuestions[currentQuestion].a}</button>
                <button onClick = {() => setAnswerGiven("b")}>{allQuestions[currentQuestion].b}</button>
                <button onClick = {() => setAnswerGiven("c")}>{allQuestions[currentQuestion].c}</button>
                <button onClick = {() => setAnswerGiven("d")}>{allQuestions[currentQuestion].d}</button>
            </div>
            <div id = "nextPhase">
                {currentQuestion === allQuestions.length-1?
                (
                    <button onClick = {endQuiz}> End Quiz </button>
                ):
                (
                    <button onClick = {nextQuestion}> Next Question </button>
                )}
                
            </div>
        </div>
    )
}
