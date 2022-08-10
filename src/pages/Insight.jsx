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
import parse from 'html-react-parser';
import loader from '../images/loader.gif';

export const Insight = () => {
  const [currentPath, setCurrentPath] = useState(window.location.href);
  const [currentSlug, setCurrentSlug] = useState(null);
  const [currentTags, setCurrentTags] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const post = usePost(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/posts?per_page=100',
    currentSlug,
    {}
  );

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

  if (post.data) {
		return (
      <main className="insight">
        <div className="insight-wrapper">
          {parse(post.data.content.rendered)}
          {/* <InsightAdvice /> */}
          {/* <InsightStudies /> */}
    			<InsightReview post={post} />
          <InsightDownload />
          {post.data.acf.post_references ? <References references={post.data.acf.post_references} /> : ''}
    			<Share title="Share this article" links={shareInsightLinks} />
        </div>
        <InsightsRelative relatedPosts={post.data.acf.related_articles} />
      </main>
		);
	} else {
		return (
      <main className="insight">
        <div className="insight-wrapper">
          <img className="insight-loader" alt="" src={loader} />
					<div className="insight-loader-title">Loading...</div>
				</div>
			</main>
		);
	}
};
