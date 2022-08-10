//import React, { useState, useEffect } from 'react';
const { createElement, render, useState, useEffect } = wp.element;

export const InsightSection = (props) => {
  const [customMargin, setCustomMargin] = useState('auto');

  useEffect(() => {
    if (window.innerWidth > 991) {
      setCustomMargin(props.marginBottom || 'auto');
    }
  }, []);

  let sectionClassName = 'insight-section';

  if (props.className) {
    sectionClassName = `insight-section ${props.className}`;
  }

  return (
    <div className={sectionClassName}>
      <div className="insight-section__wrapper">
        <div className="container">
          <h2
            className={`title title_size-m insight-section__title ${
              props.titleClassName ? props.titleClassName : null
            }`}
            style={{ marginBottom: `${customMargin}px` }}
          >
            {props.title}
          </h2>
        </div>
      </div>
    </div>
  );
};
