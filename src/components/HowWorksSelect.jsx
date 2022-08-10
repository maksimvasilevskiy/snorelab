//import React from 'react';
const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import factors from '../images/Factors.png';
import factors_2x from '../images/Factors@2x.png';
import createRemedies from '../images/Create-Remedies.png';
import createRemedies_2x from '../images/Create-Remedies@2x.png';

export const HowWorksSelect = () => {
	return (
		<section className="how-works-select">
			<div className="how-works-select__wrapper">
				<div className="container">
					<div className="how-works-select__info">
						<h2 className="title title_fade-m how-works-select__title">
							Select relevant remedies and&nbsp;factors
						</h2>
						<p>
							Do you have a blocked nose? Did&nbsp;you shower before bed? Are&nbsp;you&nbsp;trying any
							specific remedies to help your snoring?
						</p>
					</div>
					<div className="examples">
						<div className="example example-factors">
							<div className="example__text">
								<h3 className="title title_size-s example-title">Factors and&nbsp;remedies</h3>
								<p>
									It’s a great idea to keep track of&nbsp;all&nbsp;of these factors and remedies in
									SnoreLab. This can help you&nbsp;identify the things that trigger your snoring and
									what measures help you to snore less.
								</p>
							</div>
							<div className="example-img how-works-main__example-img">
								<LazyLoadImage src={factors} srcSet={`${factors} 1x, ${factors_2x} 2x`} alt="" />
							</div>
						</div>
						<div className="example example-create">
							<div className="example__text">
								<h3 className="title title_size-s example-title">
									Create your own remedies and&nbsp;factors
								</h3>
								<p>
									If you don’t see the appropriate remedy or factor, remember, you can create your
									own! Simply tap the Create New button to make custom remedies and factors.
								</p>
							</div>
							<div className="example-img how-works-main__example-img">
								<LazyLoadImage
									src={createRemedies}
									srcSet={`${createRemedies} 1x, ${createRemedies_2x} 2x`}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
