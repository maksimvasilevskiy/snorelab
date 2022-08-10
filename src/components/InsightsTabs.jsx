//import React, { useState, useEffect, useRef } from 'react';
const { createElement, render, useState, useEffect, useRef } = wp.element;
import loader from '../images/loader.gif';

export const InsightsTabs = ({ tagAllRef, tagsContainerRef, tags, activeTag, currentSlug }) => {
  // Custom tags for screen width < 991px
  // useEffect(() => {
  // if (window.innerWidth < 991) {
  //   tagsArr === m_insighttags ? false : settagsArr(m_insighttags);
  // } else {
  //   tagsArr === insighttags ? false : settagsArr(insighttags);
  // }
  // }, [window.innerWidth]);

  const handletagsClick = (e, tagText, id) => {
    const target = e.target.closest('.tabs-btn');

    if (target) {
      const tabName = tagText.toLowerCase();
      const tabs = Array.from(tagsContainerRef.current.children);

      tabs.forEach((tab) => tab.classList.remove('tabs-btn_active'));

      target.classList.add('tabs-btn_active');

      activeTag.update({ target, text: tabName, id });
    }
  };

  if (!tags.state) {
    return (
      <section className="insights-tabs">
        <div className="insights-tabs__wrapper">
          <div className="container">
            <div className="insights-tabs__content">
              <h1 className="title title_fade title_size-l insights-tabs__title">
                Insights
              </h1>
              <img className="insight-loader" alt="" src={loader} />
    					<div className="insight-loader-title">Loading...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="insights-tabs">
      <div className="insights-tabs__wrapper">
        <div className="container">
          <div className="insights-tabs__content">
            <h1 className="title title_fade title_size-l insights-tabs__title">
              Insights
            </h1>
            <div ref={tagsContainerRef} className="tabs-container">
              {tags.state.map((tag, i) => {
                if (tag.name == 'Uncategorized') return;
                let className = `btn tabs-btn`;

                if (i === 0 && !currentSlug) {
                  className = `btn tabs-btn tabs-btn_active`;
                  return (
                    <button
                      className={className}
                      onClick={(evt) => handletagsClick(evt, tag.name, tag.id)}
                      key={tag.id}
                      ref={tagAllRef}
                      id={tag.slug}
                    >
                      <div dangerouslySetInnerHTML={{ __html: tag.name }}></div>
                    </button>
                  );
                }

                return (
                  <button
                    className={className + ((currentSlug && currentSlug === tag.slug) ? ' tabs-btn_active' : '')}
                    onClick={(evt) => handletagsClick(evt, tag.name, tag.id)}
                    key={tag.id}
                    id={tag.slug}
                  >
                    <div dangerouslySetInnerHTML={{ __html: tag.name }}></div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
