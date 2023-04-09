import React, { useState } from "react";

function Quiz() {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });

  const [selectedAnswers, setSelectedAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });

  const questions = [
    {
      question: "Em qual ano foi criado o React?",
      options: ["2011", "2023", "2015"],
      answer: "2011",
      id: "q1",
    },
    {
      question: "Quem foi o fundador do React?",
      options: ["Steve Jobs", "Jordan Walke", "Mark Zuckerberg"],
      answer: "Jordan Walke",
      id: "q2",
    },
    {
      question: "Quem criou o Java Script e em qual ano foi criado ?",
      options: ["Mark Zuckerberg(2000)", "Elon Musk(2001)", "Brendan Eich(1995)"],
      answer: "Brendan Eich(1995)",
      id: "q3",
    },
  ];

  const handleOptionChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
    setSelectedAnswers({ ...selectedAnswers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let correct = 0;
    let incorrect = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[questions[i].id] === questions[i].answer) {
        correct++;
      } else {
        incorrect++;
      }
    }
    const resultMessage = `Respostas Corretas: ${correct}\nRespostasIncorretas: ${incorrect}`;
    alert(resultMessage);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <div key={q.id}>
            <h3>{q.question}</h3>
            {q.options.map((option) => (
              <div key={option}>
                <label>
                  <input
                    type="radio"
                    name={q.id}
                    value={option}
                    checked={answers[q.id] === option}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
            <p>Resposta selecionada: {selectedAnswers[q.id]}</p>
          </div>
        ))}
        <button type="submit">Finalizar Quiz</button>
      </form>
    </div>
  );
}

export default Quiz;