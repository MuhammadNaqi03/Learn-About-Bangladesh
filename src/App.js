import './App.css';
import React, {useState, useContext} from 'react';
import Menu from "./Components/Menu";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import Answers from "./Components/Answers";
import {quizContext} from "./Helpers/Contexts";

function App() {
  const[quizState, setState] = useState("menu");
  const[score,setScore] = useState(0);

  return (
    <div className="app">
      <h1>Learn About Bangladesh</h1>

      <quizContext.Provider value = {{quizState,setState, score, setScore}}>
      {/* Checks which states are we in and renders accordingly*/}
      {quizState === "menu" && <Menu/>}
      {quizState === "quiz" && <Quiz/>}
      {quizState === "result" && <Result/>}
      {quizState === "answers" && <Answers/>}
      </quizContext.Provider>

    </div>
  );
}

export default App;
