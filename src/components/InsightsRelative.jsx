//import React from 'react';
const { useState, useEffect, useRef, createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { insightArticles } from '../helpers/variables';
import useFetch from '../hooks/useFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { calculateSlidesPerView } from '../helpers/functions';

export const InsightsRelative = (relatedPosts) => {
  const [slidesPerView, setSlidesPerView] = useState(0);
  const posts = useFetch(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/posts?per_page=100',
    {}
  );
  const tags = useFetch('https://snorelab.ux-mind.pro/wp-json/wp/v2/categories?per_page=100', {});

	if (posts.data && relatedPosts.relatedPosts && tags.data) {
		const ids = relatedPosts.relatedPosts.map((insight) => {
	    return insight.related_article.ID;
	  });
		const filteredPosts = ids.map((id) => {
	    return posts.data.find(post => post.id === id);
	  });
		console.log('filteredPosts');
		console.log(filteredPosts);
		return (
			<section className="insights-relative">
				<div className="insights-relative__wrapper">
					<div className="container">
						<h4 className="title title_fade-s insights-relative__title">Related articles</h4>
						<div className="insights-assess__articles">
							{filteredPosts.map(article => {
								return (
									<a href={article.link} className="insights-assess__article" key={article.title.rendered}>
										<div className="insights-assess__article-img">
                      <div style={
                        {
                          background: `url(${article.fimg_url})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          width: '100%',
                          height: '100%'
                        }
                      }>
                      </div>
											{/*<LazyLoadImage
												src={article.fimg_url}
												alt=""
											/>*/}
										</div>
										<div className="insights-assess__item-flags">
											{article.categories.map((tag, i, arr) => {
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
										<a href={article.link} className="link">
											<h3
                        className="title title_size-m insights-assess__article-title"
                        dangerouslySetInnerHTML={{
                          __html: article.title.rendered,
                        }}
                      ></h3>
										</a>
									</a>
								);
							})}
						</div>
					</div>
				</div>
        <div className="insight-swiper-wrap">
          <h4 className="title title_fade-s insights-relative__title">Related articles</h4>
          <Swiper
            spaceBetween={12}
            slidesPerView={3}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{
              clickable: true,
              el: '.home-reviews__pagination',
            }}
            loop={true}
            initialSlide={3}
            centeredSlides={true}
          >
            {filteredPosts.map(article => {
              return (
                <SwiperSlide key={article.id}>
                  <a href={article.link} className="insights-assess__article" key={article.title.rendered}>
                    <div className="insights-assess__article-img">
                      <div style={
                        {
                          background: `url(${article.fimg_url})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          width: '100%',
                          height: '100%'
                        }
                      }>
                      </div>
                      {/*<LazyLoadImage
                        src={article.fimg_url}
                        alt=""
                      />*/}
                    </div>
                    <div className="insights-assess__item-flags">
                      {article.categories.map((tag, i, arr) => {
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
                              href={tagData.link}
                              dangerouslySetInnerHTML={{
                                __html: tagData.name + ((i === arr.length - 1) ? '' : ', '),
                              }}
                            ></a>
                            {/*i === arr.length - 1 ? '' : ' , '*/}
                          </span>
                        );
                      })}
                    </div>
                    <a href={article.link} className="link">
                      <h3
                        className="title title_size-m insights-assess__article-title"
                        dangerouslySetInnerHTML={{
                          __html: article.title.rendered,
                        }}
                      ></h3>
                    </a>
                  </a>
                </SwiperSlide>
              );
            })}
            <div className="home-reviews__pagination-wrapper">
              <div className="home-reviews__pagination" />
            </div>
          </Swiper>
        </div>
			</section>
		);
	} else {
		return '';
	}
};
