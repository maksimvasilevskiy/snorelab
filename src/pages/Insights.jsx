//import React from 'react';
const { createElement, render, useState, useEffect, useRef } = wp.element;
import { InsightsTabs } from '../components/InsightsTabs';
import { InsightsFeautured } from '../components/InsightsFeautured';
import { InsightsArticles } from '../components/InsightsArticles';
import { InsightsAssess } from '../components/InsightsAssess';
import useFetch from '../hooks/useFetch';

import stop_bang from '../images/stop-bang.png';
import stop_bang_2x from '../images/stop-bang@2x.png';
import screening from '../images/screening.png';
import screening_2x from '../images/screening@2x.png';

const insightsAssessArticles = [
  {
    title: 'Answer the Stop-BANG Questionnaire',
    link: '/stopbang',
    image: { '1x': stop_bang, '2x': stop_bang_2x },
  },
  {
    title: 'Screening dor Sleep Apnea: Epworth Sleepiness Scale',
    link: '/epworth',
    image: { '1x': screening, '2x': screening_2x },
  },
];

export const Insights = () => {
  const tagsContainerRef = useRef(null);
  const tagAllRef = useRef(null);
  const searchInputRef = useRef(null);
  const [currentPosts, setCurrentPosts] = useState(null);
  const [tagsArr, setTagsArr] = useState(null);
  const [activeTag, setActiveTag] = useState({ text: 'all', id: 111 });
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedSearchQuery, setDisplayedSearchQuery] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [currentSlug, setCurrentSlug] = useState(null);

  const posts = useFetch(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/posts?per_page=100',
    {}
  );
  const tags = useFetch('https://snorelab.ux-mind.pro/wp-json/wp/v2/categories?per_page=100', {});

  useEffect(() => {
    if (!currentPosts) {
      return;
    } else if (activeTag.id === 111) {
      if (!searchQuery) {
        setCurrentPosts(posts.data);
      }
      return;
    }

    const filteredPosts = posts.data.filter((post) => {
      return post.categories.indexOf(activeTag.id) >= 0;
    });

    console.log('filter posts')

    setCurrentPosts(filteredPosts);
  }, [activeTag]);

  useEffect(() => {
    if (tags.data) {
      const currentPath = window.location.href;

      const allTags = tags.data.concat();

      allTags.reverse().push({ id: 111, name: 'All' });
      allTags.reverse();

      setTagsArr(allTags);

      if (currentPath.includes('?category=')) {
        const reversedPath = currentPath.split('?category=').reverse();
        const slug = reversedPath[0] === '' ? reversedPath[1] : reversedPath[0];
        const tag = tags.data.find(tag => tag.slug === slug);
        console.log({ text: tag.name, id: tag.id });
        setActiveTag({ text: tag.name, id: tag.id });
        setCurrentSlug(slug);
      }
    }
  }, [tags.data]);

  useEffect(() => {
    if (posts.data) {
      if (activeTag && activeTag.text !== 'all') {
        const filteredPosts = posts.data.filter((post) => {
          return post.categories.indexOf(activeTag.id) >= 0;
        });

        console.log('filter posts')

        setCurrentPosts(filteredPosts);
      } else {
        setCurrentPosts(posts.data);
      }
      console.log(activeTag)
    }
  }, [posts.data]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!currentPosts) {
      return;
    }
    if (searchQuery) {
      const searchedPosts = posts.data.filter((post) => {
        const titleCheck = post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase());
        const excerptCheck = post.excerpt.rendered.toLowerCase().includes(searchQuery.toLowerCase());
        return (titleCheck || excerptCheck);
      });
      setCurrentPosts(searchedPosts);
      setDisplayedSearchQuery(searchQuery);
      setIsSearch(true);
    } else {
      setIsSearch(false);
      setCurrentPosts(posts.data);
      if (!isSearch) {
        const tabs = Array.from(tagsContainerRef.current.children);
        tabs.forEach((tab) => tab.classList.remove('tabs-btn_active'));
        tagAllRef.current.classList.add('tabs-btn_active');
        setActiveTag({ text: 'all', id: 111 });
      }
    }
  }

  const handleBackButtonClick = (e) => {
    e.preventDefault();
    setActiveTag({ text: 'all', id: 111 });
    setSearchQuery('');
    setIsSearch(false);
    setCurrentPosts(posts.data);
    if (!isSearch) {
      const tabs = Array.from(tagsContainerRef.current.children);
      tabs.forEach((tab) => tab.classList.remove('tabs-btn_active'));
      tagAllRef.current.classList.add('tabs-btn_active');
      setActiveTag({ text: 'all', id: 111 });
    }
    searchInputRef.current.value = '';
    window.scrollTo(0, 0);
  }

  return (
    <main className="insights">
      {!isSearch ?
      <InsightsTabs
        tagAllRef={tagAllRef}
        tagsContainerRef={tagsContainerRef}
        tags={{ state: tagsArr, update: setTagsArr }}
        activeTag={{ state: activeTag, update: setActiveTag }}
        currentSlug={currentSlug}
      /> : ''}
      {(activeTag.text === 'all' && !isSearch) ? <InsightsFeautured /> : ''}
      <InsightsArticles
        searchQuery={searchQuery}
        displayedSearchQuery={displayedSearchQuery}
        isSearch={isSearch}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        posts={{ state: currentPosts, update: setCurrentPosts }}
        tags={{ state: tags }}
        activeTag={{ state: activeTag, update: setActiveTag }}
        handleBackButtonClick={handleBackButtonClick}
        searchInputRef={searchInputRef}
      />
      <InsightsAssess
        light={true}
        titleClass="title_size-l"
        titleText="Assess your sleep apnea risk"
        articles={insightsAssessArticles}
      />
    </main>
  );
};
