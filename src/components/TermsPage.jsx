//import React from 'react';
const { createElement, render } = wp.element;
import { acceptanceBlocks } from '../helpers/termsContent';
import { TextPageBlock } from './TextPageBlock';

export const TermsPage = () => {
	return (
		<section className="text-page">
			<div className="text-page__wrapper">
				<div className="container">
					<h1 className="title title_fade title_size-l text-page__title">SnoreLab’s Terms of Use</h1>
					<span className="text-page__subtitle">Last updated: October 17, 2018</span>
					<div className="text-page__first-paragraph">
						<p>
							SnoreLab offers a service that records your snoring to help you gain insight into it, aiming
							to give you the tools to snore less, sleep better and be healthier.
						</p>
						<p>
							These Terms of Use constitute a legal agreement (the “agreement”) between you and SnoreLab,
							a service provided by Reviva Softworks (“us”, “we”) for the use of the SnoreLab mobile app
							(hereafter referred to as “the app” or “SnoreLab), the computer systems and files used
							by the application, and all related services, features and content provided by SnoreLab
							within the app, on the website or social media channels.
						</p>
					</div>
					<div className="text-page__blocks-wrapper">
						<div className="text-page__section">
							<div className="text-page__section-main">
								<h2 className="title title_size-m text-page__section-title">Acceptance of Terms</h2>
								<p>
									Please read this agreement carefully. By using SnoreLab’s services or creating an
									account with us, you acknowledge your acceptance of and agreement to the terms in
									this agreement. If you do not agree to any of the terms in this agreement, please do
									not use the app.
								</p>
								<p>
									We may make modifications to this agreement occasionally. Continued use of the app
									after the effective date of the updated version will indicate your acceptance of the
									new agreement.
								</p>
							</div>
							<div className="text-page__section-blocks">
								{acceptanceBlocks.map(({ title, content }) => (
									<TextPageBlock key={title} title={title} content={content} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
