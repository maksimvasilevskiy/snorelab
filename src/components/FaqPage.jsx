//import React from 'react';
const { createElement, render } = wp.element;
import loader from '../images/loader.gif';
import useFetch from '../hooks/useFetch';
//const { createElement, render } = wp.element;
import { Accordion } from './Accordion';
// import faqElementsArr from '@/helpers/faqContent';

export const FaqPage = () => {
  const faqElements = useFetch(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/pages?slug=faqs',
    {}
  );

  console.log(faqElements);

  if (!faqElements.data) {
    return (
      <section className="faq-page">
        <div className="faq-page__wrapper">
          <div className="container">
            <h1 className="title title_fade title_size-l faq-page__title">
              FAQ
            </h1>
            <span className="faq-page__subtitle">
              Frequently Asked Questions
            </span>
            <img className="insight-loader" alt="" src={loader} />
            <div className="insight-loader-title">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="faq-page">
      <div className="faq-page__wrapper">
        <div className="container">
          <h1 className="title title_fade title_size-l faq-page__title">FAQ</h1>
          <span className="faq-page__subtitle">Frequently Asked Questions</span>
          <div className="faq-page__block">
            {/* Renders formed FAQ sections */}
            {faqElements.data[0].acf.faq_sections.map((element) => (
              <Accordion
                key={element.faq_section_title}
                title={element.faq_section_title}
                elements={element.faq_section_items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
