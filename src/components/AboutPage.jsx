//import React from 'react';
const { createElement, render } = wp.element;

export const AboutPage = () => {
	return (
		<section className="about-page">
			<div className="about-page__wrapper">
				<div className="container">
					<h1 className="title title_fade title_size-l about-page__title">About Snorelab</h1>
					<div className="about-page__note">
						<p>
							SnoreLab is the leading snoring analysis app for iPhone and Android, with millions
							of&nbsp;downloads and outstanding user reviews. It&nbsp;is&nbsp;one&nbsp;of&nbsp;the leading
							apps in&nbsp;the&nbsp;iPhone medical category in several countries.
						</p>
					</div>
					<div className="about-page__content">
						<p>
							SnoreLab uses sophisticated algorithms to&nbsp;detect, record and measure snoring, allowing
							users to&nbsp;understand the severity of&nbsp;their snoring problem and to&nbsp;find ways
							to&nbsp;improve it. SnoreLab plans to grow on&nbsp;its&nbsp;position as the leading
							smartphone app&nbsp;for snorers through developing partnerships with leading companies
							in&nbsp;the&nbsp;medical device industry.
						</p>
						<p>
							SnoreLab was created by Jules Goldberg in&nbsp;2012 after his wife complained about
							his&nbsp;snoring. SnoreLab is owned and published by&nbsp;Reviva Softworks Ltd,
							an&nbsp;independent app developer dedicated to&nbsp;developing high quality smartphone apps
							in the medical category.
						</p>
						<p>The company is located in London, UK.</p>
						<p>SnoreLab is a registered trade-mark.</p>
					</div>
				</div>
			</div>
		</section>
	);
};
