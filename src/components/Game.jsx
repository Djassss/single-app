import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const questions = [
  {
    title: 'React - this ... ?',
    variants: ['Library', 'Framework', 'Application'],
    correct: 0,
  },
  {
    title: 'Component - this ... ?',
    variants: ['Application', 'Part of the application', 'Function'],
    correct: 2,
  },
  {
    title: 'What is JSX ?',
    variants: ['This is an extension of the JavaScript syntax', 'HTML, JS', 'maybe it\'s javaScipt'],
    correct: 0,
  },
  {
    title: 'What is class ?',
    variants: ['Function', 'Component', 'In object-oriented programming,'],
    correct: 2,
  },
  {
    title: 'What is JavaScript ?',
    variants: ['Multi -paradigm programming language', 'It is a programming language', 'Hack'],
    correct: 0,
  },
  {
    title: 'What is Masive ?',
    variants: ['Massive', 'An array is a data structure that stores a set of values', 'maybe it\'s javaScipt'],
    correct: 1,
  },
  {
    title: 'What is Object ?',
    variants: ['Application', 'React', 'Addition in syntax'],
    correct: 2,
  },
  {
    title: 'What is Function ?',
    variants: ['It\'s function', 'Events', 'Function'],
    correct: 1,
  },
  {
    title: 'What is HTML ?',
    variants: ['Standardized hypertext markup language for web browsing documents', 'Programing language', 'maybe it\'s javaScipt'],
    correct: 0,
  },
  {
    title: 'What is CSS ?',
    variants: ['Programing language', 'Program', 'Formal language for describing the appearance of a document'],
    correct: 2,
  },
];


function Result ({ correct }) {
    return(
        <div className='result'>
            <img src={require('../img/game-over.png')}  />
            <h2>You have guessed {correct}  answer out of  {questions.length}</h2>
            <a href='/*'>
              <button>Try again</button>
            </a>
        </div>
    )
}

function MyGame ({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);
  const [myBtn, setMyBtn] = useState(false);
  return(
    <>
    <button onClick={() => setMyBtn(true)} className={`logo ${myBtn ? 'show' : false}`}>
      let's play 
    </button>

 <div className={`block-game ${myBtn ? 'show' : false}`}>
        <div className='progress'>
          <div style={{width: `${percentage}%`}}></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {
            question.variants.map((text, index) => (
              <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
            ))
          }         
        </ul>
    </div>
    </>
  )
}










const Game = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1)

    if(index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className='game'>
        {
          step != questions.length ?
          <MyGame step={step} question={question} onClickVariant={onClickVariant}/>
          : (<Result correct={correct} />)
        }
       
    </div>
  )
}

export default Game