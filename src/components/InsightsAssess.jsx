//import React from 'react';
const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const InsightsAssess = ({ light, titleClass, titleText, articles }) => {
	return (
		<section className="insights-assess">
			<div className="insights-assess__wrapper">
				<div className="container">
					<div className="insights-assess__content">
						{light && (
							<svg
								width="1122"
								height="425"
								viewBox="0 0 1122 425"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M786.189 0L728.863 162.336L1122 232.988L693.434 262.664L636.109 425L428.566 281.006L0 310.683L300.297 192.012L92.7547 48.0183L485.891 118.67L786.189 0Z"
									fill="#1A25EF"
									fillOpacity="0.6"
								/>
							</svg>
						)}
						<h2 className={`title title_fade ${titleClass} insights-assess__title`}>{titleText}</h2>
						<div className="insights-assess__articles">
							{articles.map(({ title, link, image }) => {
								return (
									<a href={link} className="insights-assess__article" key={title}>
										<div className="insights-assess__article-img">
											<LazyLoadImage
												src={image['1x']}
												srcSet={`${image['1x']} 1x, ${image['2x']} 2x`}
												alt=""
											/>
										</div>
										<h3 className="title title_size-m insights-assess__article-title">{title}</h3>
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
