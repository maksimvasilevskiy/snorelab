//import React, { useEffect } from 'react';
const { createElement, render, useEffect, useState } = wp.element;
import usePost from '../hooks/usePost';
import useFetch from '../hooks/useFetch';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//const { createElement, render, useEffect } = wp.element;
import { InsightSection } from '../components/InsightSection';
import { InsightMain } from '../components/InsightMain';
import { InsightAdvice } from '../components/InsightAdvice';
import { InsightStudies } from '../components/InsightStudies';
import { InsightReview } from '../components/InsightReview';
import { InsightDownload } from '../components/InsightDownload';
import { References } from '../components/References';
import { shareInsightLinks } from '../helpers/variables';
import { Share } from '../components/Share';
import { InsightsRelative } from '../components/InsightsRelative';
import { calculateTextWidth } from '../helpers/functions';

export const Insight = () => {
  /*const [currentPath, setCurrentPath] = useState(
    'https://snorelab.ux-mind.pro/are-you-a-seasonal-snorer/'
  );*/
  const [currentPath, setCurrentPath] = useState(window.location.href);
  const [currentSlug, setCurrentSlug] = useState(null);
  const [currentTags, setCurrentTags] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const post = usePost(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/posts',
    currentSlug,
    {}
  );

  const tags = useFetch('https://snorelab.ux-mind.pro/wp-json/wp/v2/tags', {});

  // Sets tags of the article
  useEffect(() => {
    if (tags.data && post.data && !loaded) {
      const postTagsIds = post.data.tags;

      const postTags = tags.data.filter((tag) => postTagsIds.includes(tag.id));

      setCurrentTags(postTags);
      setLoaded(true);
    }
  }, [tags, loaded]);

  useEffect(() => {
    const reversedPath = currentPath.split('/').reverse();

    const slug = reversedPath[0] === '' ? reversedPath[1] : reversedPath[0];

    console.log(slug);

    setCurrentSlug(slug);
  }, [currentPath]);

  useEffect(() => {
    window.addEventListener('load', calculateTextWidth);
    window.onresize = () => calculateTextWidth();

    return () => {
      window.removeEventListener('load', calculateTextWidth);
    };
  }, [post]);

  if (!post.data) {
    return null;
  }

  return (
    <main className="insight">
      <div className="insight-wrapper">
        <InsightMain data={post.data} tags={currentTags} />
        {post.data.acf.post_content.map((post, i) => {
          const key = `${i}_${post.post_element_type}`;

          switch (post.post_element_type) {
            case 'text': {
              return (
                <div className="insight-text" key={key}>
                  {post.post_text.map((textItem, idx) => {
                    switch (textItem.post_text_element_type) {
                      case 'paragraph': {
                        return (
                          <p
                            key={`${textItem.post_text_paragraph}`}
                            dangerouslySetInnerHTML={{
                              __html: textItem.post_text_paragraph,
                            }}
                          ></p>
                        );
                      }
                      case 'list-title': {
                        return (
                          <span
                            className="insight-text__list-title"
                            key={`${textItem.post_text_list_title}`}
                          >
                            {textItem.post_text_list_title}
                          </span>
                        );
                      }
                      case 'list': {
                        return (
                          <ul
                            className="insight-text__list"
                            key={`${textItem.post_text_element_type}`}
                          >
                            {textItem.post_text_list.map((item, i) => {
                              return (
                                <li
                                  className="insight-text__list-item"
                                  key={`${i}_${item.post_text_list_item.slice(
                                    8
                                  )}`}
                                  dangerouslySetInnerHTML={{
                                    __html: item.post_text_list_item,
                                  }}
                                ></li>
                              );
                            })}
                          </ul>
                        );
                      }
                    }
                  })}
                </div>
              );
            }
            case 'image': {
              return (
                <div className="insight-img" key={key}>
                  <LazyLoadImage
                    width="600"
                    src={post.post_image_1x.url}
                    srcSet={
                      post.post_image_2x.url
                        ? `${post.post_image_1x.url} 1x, ${post.post_image_2x.url} 2x`
                        : null
                    }
                    alt=""
                  />
                </div>
              );
            }
            case 'note-with-button': {
              return (
                <div className="insight-note" key={key}>
                  <p>{post.post_note_with_button_text}</p>
                  <a
                    href="#"
                    className="btn btn-arrow insight-note__promocode-btn"
                  >
                    <div>{post.post_note_with_button_button_text}</div>
                  </a>
                </div>
              );
            }
            case 'note-with-link': {
              return (
                <div className="insight-note" key={key}>
                  <p>{post.post_note_with_link_text}</p>
                  <a
                    href={post.post_note_with_link_link_href}
                    className="link insight-note__link"
                  >
                    {post.post_note_with_link_link_text}
                  </a>
                </div>
              );
            }
            case 'note-left-stick': {
              return (
                <div className="insight-note insight-note_left-stick" key={key}>
                  <p>{post.post_note_left_stick_text}</p>
                </div>
              );
            }
            case 'image-with-text': {
              return (
                <div
                  className="insight-img insight-img_without-border insight-img_with-note insight-img_text-left m-note-hidden"
                  key={key}
                >
                  <LazyLoadImage
                    width="600"
                    data-img="desktop"
                    src={post.post_image_with_text_1x.url}
                    srcSet={
                      post.post_image_with_text_2x.url
                        ? `${post.post_image_with_text_1x.url} 1x, ${post.post_image_with_text_2x.url} 2x`
                        : null
                    }
                    alt=""
                  />
                  {/* <img
                      data-img="mobile"
                      src={m_insight_3}
                      srcSet={`${m_insight_3} 1x, ${m_insight_3_2x} 2x`}
                      alt=""
                    /> */}
                  <p>{post.post_image_with_text_subscript}</p>
                </div>
              );
            }
            case 'note-advice': {
              return (
                <div className="insight-note insight-note_advice" key={key}>
                  <h3 className="title title_size-s insight-note__title">
                    {post.post_note_advice_title}
                  </h3>
                  <div className="insight-text">
                    {post.post_note_advice_text.map((text, i) => {
                      return (
                        <p key={`${key}_${i}`}>
                          {text.post_note_advice_paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            }
            case 'subtitle': {
              return (
                <InsightSection
                  titleClassName={'insight-section__title_s'}
                  title={post.post_title}
                  key={key}
                />
              );
            }
            case 'title': {
              return <InsightSection title={post.post_title} key={key} />;
            }
            default: {
              return null;
            }
          }
        })}
        {/* <InsightAdvice /> */}
        {/* <InsightStudies /> */}
        <InsightReview />
        <InsightDownload />
        <References references={post.data.acf.post_references} />
        <Share title="Share this article" links={shareInsightLinks} />
        <InsightsRelative />
      </div>
    </main>
  );
};
