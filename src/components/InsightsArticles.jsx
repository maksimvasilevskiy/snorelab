//import React from 'react';
const { createElement, render, useEffect, useState } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import loader from '../images/loader.gif';
import parse from 'html-react-parser';

export const InsightsArticles = ({
  searchQuery,
  displayedSearchQuery,
  isSearch,
  setSearchQuery,
  handleSearch,
  posts,
  tags,
  activeTag,
  handleBackButtonClick,
  searchInputRef
}) => {
  const [showMore, setShowMore] = useState(6);

  const handleButtonClick = (e) => {
    setShowMore(showMore + 6);
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  if (!posts.state) {
    return (
      <section className="insights-articles">
        <div className="insights-articles__wrapper">
          <div className="container">
            <h2 className="title title_fade-s insights-articles__title">
              All articles
            </h2>
            <img className="insight-loader" alt="" src={loader} />
  					<div className="insight-loader-title">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="insights-articles">
      <div className="insights-articles__wrapper">
        <div className="container">
          <h2 className="title title_fade-s insights-articles__title">
            { !isSearch ?
              (activeTag.state ? (activeTag.state.text === 'all' ? 'ALL Articles'  : parse(activeTag.state.text)) : 'ALL Articles')
              : 'Search results for “' + displayedSearchQuery + '”'}
          </h2>
          {(activeTag.state.text != 'all') ?
          <div className="insights__search-field-wrap">
            <input ref={searchInputRef} onChange={handleChange} placeholder="Search" className="insights__search-field" type="text" />
            <button onClick={handleSearch} className="insights__search-field-button">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.325 13.399L19.705 18.779C19.8941 18.9682 20.0003 19.2248 20.0002 19.4923C20.0001 19.7599 19.8937 20.0164 19.7045 20.2055C19.5153 20.3946 19.2587 20.5008 18.9912 20.5007C18.7236 20.5006 18.4671 20.3942 18.278 20.205L12.898 14.825C11.2897 16.0707 9.26729 16.6569 7.24214 16.4643C5.21699 16.2718 3.34124 15.315 1.99649 13.7886C0.651744 12.2622 -0.0609975 10.2808 0.0032639 8.24753C0.0675253 6.21427 0.903963 4.28185 2.34242 2.84339C3.78087 1.40494 5.71329 0.568502 7.74656 0.50424C9.77982 0.439979 11.7612 1.15272 13.2876 2.49747C14.814 3.84222 15.7708 5.71796 15.9634 7.74312C16.1559 9.76827 15.5697 11.7907 14.324 13.399H14.325ZM8.00001 14.5C9.59131 14.5 11.1174 13.8678 12.2427 12.7426C13.3679 11.6174 14 10.0913 14 8.49999C14 6.90869 13.3679 5.38257 12.2427 4.25735C11.1174 3.13213 9.59131 2.49999 8.00001 2.49999C6.40871 2.49999 4.88259 3.13213 3.75737 4.25735C2.63215 5.38257 2.00001 6.90869 2.00001 8.49999C2.00001 10.0913 2.63215 11.6174 3.75737 12.7426C4.88259 13.8678 6.40871 14.5 8.00001 14.5Z" fill="#17A2FF"/>
              </svg>
            </button>
          </div> : ''}
          {!posts.state.length
          ? (<>
              <div className="insights-articles__empty-title">Nothing Found</div>
              <div className="insights-articles__empty-text">Sorry, but nothing matched your search terms. Please try again with some different keywords.</div>
              <div class="insights-articles__empty-button">
                <button onClick={handleBackButtonClick} className="btn insights-articles__back-btn">
                  <div>View all articles</div>
                </button>
              </div>
            </>
          ) : (<ul className={`insights-articles__list ${isSearch ? 'articles-grid' : ''}`}>
            {posts.state.map((post, postIndex) => {
              if (postIndex > showMore) {
                return;
              }
              return (
                <li className="insights-articles__item-wrapper" key={post.id}>
                  <div className="insights-articles__item">
                    <div className="order-lg-1 insights-articles__item-img">
                    {!isSearch ?
                      <div class="insights-articles__item-img-content" style={{
                      backgroundImage: `url(${post.fimg_url})`,
                      maxWidth: 390,
                      width: 390,
                      height: 227,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: 10
                    }}></div>
                    : ''}
                      {/*<LazyLoadImage
                        src={post.fimg_url}
                        alt=""
                      />*/}
                    </div>
                    <div className="insights-articles__item-content">
                      <div className="order-lg-0 insights-articles__item-flags">
                        {/* This method adds flag links and adds commas correctly */}
                        {post.categories.map((tag, i, arr) => {
                          const tagData = tags.state.data ? tags.state.data.find(
                            (item) => item.id === tag
                          ) : null;

                          if (!tagData) {
                            return null;
                          }

                          /*const reversedPath = tagData.link.split('/').reverse();
                          const slug = reversedPath[0] === '' ? reversedPath[1] : reversedPath[0];*/

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
                      {post.title.rendered && (
                        <a href={post.link}>
                          <h3 className="link title title_size-m insights-articles__item-title"
                            dangerouslySetInnerHTML={{
                              __html: post.title.rendered,
                            }}
                          ></h3>
                        </a>
                      )}
                      {post.excerpt.rendered && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                          }} className="insights-articles__item-excerpt"
                        ></div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>)}
          {
            (showMore < posts.state.length || isSearch) ? (
              <div className={`insights-articles__show ${isSearch ? 'search-show-buttons' : ''}`}>
                {(isSearch && posts.state.length) ?
                  <button onClick={handleBackButtonClick} className="btn insights-articles__back-btn">
                    <div>Back to all articles</div>
                  </button>
                  : ''
                }
                {(showMore < posts.state.length) ?
                  <button onClick={handleButtonClick} className="btn insights-articles__show-btn">
                    <div>Show more</div>
                  </button>
                : ''}
              </div>
            ) : ''
          }
        </div>
      </div>
    </section>
  );
};
