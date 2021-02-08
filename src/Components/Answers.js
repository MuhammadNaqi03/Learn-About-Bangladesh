import React, {useContext} from 'react'
import {quizContext} from "../Helpers/Contexts";
import '../App.css';

export default function Menu() {
    const { quizState, setState} = useContext(quizContext);
    return (
        <div className = "answers">
            <button onClick = {() => setState("menu")}>Main Menu</button>
            <div id = "preText">
                <pre>Question 1 - c    |    Question 2 - d</pre>
                <pre>Question 3 - c    |    Question 4 - a</pre>
                <pre>Question 5 - b    |    Question 6 - a</pre>
                <pre>Question 7 - a    |    Question 8 - b</pre>
                <pre>Question 9 - a    |    Question 10 -c</pre>
            </div>
           
        </div>
    )
}