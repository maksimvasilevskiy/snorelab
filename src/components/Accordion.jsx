//import React from 'react';
const { createElement, render } = wp.element;

export const Accordion = ({ title, elements }) => {
  const handleAccordionClick = (e) => {
    const target = e.target;

    target.classList.toggle('accordion-btn_open');
  };

  return (
    <div className="accordion">
      <h4 className="title title_fade-s accordion-title">{title}</h4>
      <ul className="accordion-list">
        {elements.map((element) => {
          return (
            <li className="accordion-list__item" key={element.faq_item_title}>
              <button
                className="accordion-btn"
                onClick={(evt) => handleAccordionClick(evt)}
              >
                {element.faq_item_title}
              </button>
              <div className="accordion-content__wrapper">
                {element.faq_item_image && (
                  <img
                    src={element.faq_item_image.url}
                    srcSet={
                      element.faq_item_image_2x
                        ? `${element.faq_item_image.url} 1x, ${element.faq_item_image_2x.url} 2x`
                        : null
                    }
                    alt=""
                  ></img>
                )}
                <div
                  className="accordion-content"
                  dangerouslySetInnerHTML={{ __html: element.faq_item_content }}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
