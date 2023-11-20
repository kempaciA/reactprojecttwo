import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

// function FlashCards() {
//   const [selectedId, setSelectedId] = useState(null);

//   function handleClick(sex) {
//     setSelectedId(sex !== selectedId ? sex : null);
//   }

//   return (
//     <div  className="flashcards">
//       {questions.map((question) => (
//         <div
//           key={question.id}
//           onClick={() => handleClick(question.id)}
//           className={question.id === selectedId ? "selected" : ""}
//         >
//           <p >
//             {question.id === selectedId ? question.answer : question.question}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }




function FlashCards() {

  const [selectId, setSelectedId] = useState(null);

  function handleClick (id) {
    setSelectedId(id !== selectId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div key={question.id} className={question.id === selectId ? "selected" : ""} onClick={() => handleClick(question.id)}>
          <p>
            {question.id === selectId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  )
}
