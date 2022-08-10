//import React from 'react';
const { createElement, render } = wp.element;

export const References = ({ references }) => {
  return (
    <section className="references">
      <div className="references-wrapper">
        <div className="container">
          <h3 className="title references-title">References</h3>
          <ol className="references-list">
            {references.map((item, i) => {
              return (
                <li
                  className="references-list__item"
                  key={item.post_references_item.slice(0, 15)}
                >
                  {item.post_references_item}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
