//import React from 'react';
const { createElement, render, useState } = wp.element;

export const Questionnaire = ({ questionsType, questions, btnTitle, resultNumber, setResultNumber }) => {
  let questionsArray = [];
  let resultsArray = [];

  console.log(questionsType, questions);

  const [answersArray, setAnswersArray] = useState([]);

  if (questionsType && questions) {
    questionsArray = questions[0].acf[`${questionsType}_questions`];
    resultsArray = questions[0].acf[`${questionsType}_results`];
    questionsArray.map((question) => {
      answersArray.push(-1);
    });
    console.log(resultsArray);
  }

  if (!questions) {
    return <h2 className="title title_size-l">Loading...</h2>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let isFilled = true;
    answersArray.map((elem) => {
      if (elem === -1) {
        isFilled = false;
      }
    });
    if (isFilled) {
      const initialValue = 0;
      const sum = answersArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );
      console.log(sum);
      console.log(checkSum(sum));
      setResultNumber(checkSum(sum));
    } else {
      return;
    }
  }

  const compare = (sign, val1, val2) => {
    switch (sign) {
      case '>':
        return (val1>val2);
      case '>=':
        return (val1>=val2);
      case '<':
        return (val1<val2);
      case '<=':
        return (val1<=val2);
      default:
        return;
    }
  }

  const checkSum = (sum) => {
    let matchIndex = -1;
    resultsArray.map((result, index) => {
      let isTrue = true;
      let matching = false;
      result[`${questionsType}_conditions`].map((condition) => {
        if (!compare(condition[`${questionsType}_condition_sign`], sum, condition[`${questionsType}_condition_value`])) isTrue = false;
      });
      if (isTrue && !matching) {
        matching = true;
        matchIndex = index;
      }
    });
    return matchIndex;
  }

  const handleChange = (e) => {
    const index = (e.target.id).substr(0, (e.target.id).indexOf('-'));
    answersArray[index] = Number(e.target.value);
    console.log(answersArray);
  }

  return (
    (resultNumber === -1) ? (
      <form className="questionnaire-form">
      <ol className="questionnaire-list">
        {questionsArray.map((question, i) => {
          return (
            <li
              className="questionnaire-list__item"
              key={question.question_slug}
            >
              <p>{question.question_title}</p>
              {question.question_answers.map((answer, idx) => {
                return (
                  <div
                    className="questionnaire-list__item-answer"
                    key={answer[`${questionsType}_question_answer`]}
                  >
                    <input
                      type="radio"
                      id={String(i) + '-' + idx}
                      name={question.question_slug}
                      value={answer[`${questionsType}_question_value`]}
                      onChange={handleChange}
                    />
                    <label className="radio" htmlFor={String(i) + '-' + idx}>
                      {answer[`${questionsType}_question_answer`]}
                    </label>
                  </div>
                );
              })}
            </li>
          );
        })}
      </ol>
      <div className="questionnaire-form__submit-wrapper">
        <button
          type="submit"
          className="btn btn-arrow questionnaire-form__submit"
          onClick={handleSubmit}
        >
          <div>{btnTitle}</div>
        </button>
      </div>
    </form>
    ) : (
    <>
      <div className="questionnaire-result__title">{resultsArray[resultNumber][`${questionsType}_result_title`]}</div>
      <div className="questionnaire-result__text">{resultsArray[resultNumber][`${questionsType}_result_text`]}</div>
    </>
    )
  );
};
