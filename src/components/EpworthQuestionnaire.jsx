//import React from 'react';
const { createElement, render, useState } = wp.element;
import useFetch from '../hooks/useFetch';
//const { createElement, render } = wp.element;
import { Questionnaire } from './Questionnaire';
// import { epworthQuestions } from '../helpers/variables';

export const EpworthQuestionnaire = () => {
  const epworth = useFetch(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/pages?slug=epworth',
    {}
  );

  const [resultNumber, setResultNumber] = useState(-1);

  if (!epworth.data) {
    return (
      <section className="questionnaire">
        <div className="questionnaire-wrapper">
          <div className="container">
            <h1 className="title title_size-m questionnaire-title">
              Epworth Sleepiness Scale
            </h1>
            <h2 className="title title_size-l">Loading...</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="questionnaire">
      <div className="questionnaire-wrapper">
        <div className="container">
          {(resultNumber === -1) ? (
          <>
            <h1 className="title title_size-m questionnaire-title">
              Epworth Sleepiness Scale
            </h1>
            <div className="questionnaire-text">
              <p>
                Feeling excessively sleepy during the day is a key symptom of
                sleep apnea. A useful way to measure your fatigue is by using the
                Epworth Sleepiness Scale.
              </p>
              <p>
                Consider the scenarios below and think about how likely you are to
                fall asleep.
              </p>
              <p>
                You can{' '}
                <a className="link" href="#">
                  read more about identifying obstructive&nbsp;sleep apnea
                </a>{' '}
                in&nbsp;SnoreLab’s Insights area.
              </p>
              <p>
                You can also assess your sleep apnea risk using the{' '}
                <a className="link" href="#">
                  STOP-Bang Questionnaire
                </a>
                .
              </p>
            </div>
          </>
          ) : ''}
          <Questionnaire
            questionsType={epworth.data[0].slug}
            questions={epworth.data}
            btnTitle="Calculate results"
            resultNumber={resultNumber}
            setResultNumber={setResultNumber}
          />
          <div className="questionnaire-change">
            <a
              type="button"
              className="btn btn-arrow questionnaire-change__prev"
              href="/stopbang/"
            >
              <div>Prev</div>
            </a>
            <a
              type="button"
              className="btn btn-arrow btn_gray-text questionnaire-change__next"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              <div>Next</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
