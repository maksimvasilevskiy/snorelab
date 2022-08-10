//import React from 'react';
const { createElement, render } = wp.element;
import { homeInsights } from '../helpers/variables';
import useFetch from '../hooks/useFetch';
import ellipse from '../images/ellipse-1.png';

export const HomeInsights = () => {
  const pageInsights = useFetch(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/pages/18',
    {}
  );
  const posts = useFetch(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/posts?per_page=100',
    {}
  );
  const tags = useFetch('https://snorelab.ux-mind.pro/wp-json/wp/v2/categories?per_page=100', {});

  if (!pageInsights.data || !posts.data || !tags.data) {
    return (
      <section className="home-insights">
        <div className="home-insights__wrapper">
          <div className="container">
            <h2 className="title title_fade title_size-m home-insights__title">
              Snoring insights
            </h2>
            <div className="home-insights__container">
              <h2 className="title title_fade title_size-s">Loading...</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
  const ids = pageInsights.data.acf.home_page_insights.map((insight) => {
    return insight.home_page_insight.ID;
  });

  const filteredPosts = ids.map((id) => {
    return posts.data.find(post => post.id === id);
  });

  /*const filteredPosts = posts.data.filter((post) => {
    return ids.includes(post.id);
  })*/

  return (
    <section className="home-insights">
      <div className="home-insights__wrapper">
        <div className="container">
          <h2 className="title title_fade title_size-m home-insights__title">
            Snoring insights
          </h2>
          <div className="home-insights__container">
            {filteredPosts.map((post, i) => {
              return (
                <div className="home-insights__item" key={post.id}>
                  <div className="home-insights__item-content">
                    <div className="home-insights__item-flags">
                      {post.categories.map((tag, i, arr) => {
                        const tagData = tags.data.find(
                          (item) => item.id === tag
                        );

                        if (!tagData) {
                          return null;
                        }

                        return (
                          <span key={tagData.id}>
                            <a
                              className="link"
                              href={'/insights/?category='+tagData.slug}
                              dangerouslySetInnerHTML={{
                                __html: tagData.name,
                              }}
                            ></a>
                            {i === arr.length - 1 ? '' : ' , '}
                          </span>
                        );
                      })}
                    </div>
                    <a
                      className="link home-insights__item-title"
                      href={post.link}
                    >
                      <h4
                        className="title"
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      ></h4>
                    </a>
                    {i === 0 && post.excerpt.rendered && (
                      <div
                        className="home-insights__excerpt"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      ></div>
                    )}
                  </div>
                  <img
                    src={post.fimg_url}
                    alt=""
                  />
                  <div className="home-insights__item-fade" />
                </div>
              );
            })}
          </div>
          <div className="home-insights__read-more">
            <a className="link btn btn-arrow" href="/insights">
              <div>Read more</div>
            </a>
          </div>
        </div>
        <img className="bg-light-3 changed" alt="" src={ellipse} />
        {/*<svg
          data-svg="decorative"
          width="379"
          height="371"
          viewBox="0 0 379 371"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="189.5" cy="185.5" rx="189.5" ry="185.5" fill="#17A2FF" />
        </svg>*/}
      </div>
    </section>
  );
};
