//import React from 'react';
const { createElement, render, Fragment } = wp.element;
import reflection from '../images/mirror.png';
import reflection_2x from '../images/mirror@2x.png';
import { InsightSection } from './InsightSection';
import insight_2 from '../images/insight-img-2.png';
import insight_2_2x from '../images/insight-img-2@2x.png';

export const InsightHowUse = () => {
  return (
    <>
      <InsightSection title={'How to use SnoreGym'} />
      <div className="insight-img">
        <img
          src={reflection}
          srcSet={`${reflection} 1x, ${reflection_2x} 2x`}
          alt=""
        />
      </div>
      <div className="insight-text">
        <p>
          SnoreGym will work best if used regularly. We recommend setting aside
          at&nbsp;least 10 minutes per day. SnoreGym has two workouts —
          a&nbsp;standard one for 5 minutes or a double workout for 10 minutes.
        </p>
        <p>
          Everybody’s day is different, but we find our workouts are best done
          once in&nbsp;the morning and once in the evening before bed.
          A&nbsp;great way&nbsp;to keep up&nbsp;the regularity is to stick your
          workout onto an already established routine such as brushing your
          teeth. This also has&nbsp;the&nbsp;added benefit of a bathroom mirror
          — ideal for seeing if&nbsp;you&nbsp;are doing the exercises correctly!
        </p>
        <p>
          Whenever you complete a SnoreGym workout, it is automatically added
          to&nbsp;your calendar so you can easily keep track of your progress.
        </p>
        <p>
          Set yourself a daily target and reminders, and in time you should
          see&nbsp;your snoring improve. Remember you can always monitor your
          progress with our partner app, SnoreLab, where you can also link
          the&nbsp;two apps to sync your workouts automatically.
        </p>
      </div>
      <div className="insight-note">
        <p>Remember, you can save $20 with the code</p>
        <a href="#" className="btn btn-arrow insight-note__promocode-btn">
          <div>SNORELAB20</div>
        </a>
      </div>
      <div className="insight-img">
        <img
          src={insight_2}
          srcSet={`${insight_2} 1x, ${insight_2_2x} 2x`}
          alt=""
        />
      </div>
      <div className="insight-note">
        <p>SnoreLab’s full article on specialist anti-snoring pillows</p>
        <a href="#" className="link insight-note__link">
          Read
        </a>
      </div>
      <InsightSection
        title={'Scientific basis for SnoreGym'}
        marginBottom={30}
      />
      <div className="insight-text">
        <p>
          The concept of SnoreGym is based on some promising science. Multiple
          research teams have looked into the effectiveness of using mouth
          exercises to combat snoring and sleep apnea.
        </p>
        <p>
          Discover more about{' '}
          <a href="" className="link">
            dust allergies and snoring and hay fever
          </a>{' '}
          and{' '}
          <a href="#" className="link">
            hay fever.
          </a>
        </p>
      </div>
    </>
  );
};
