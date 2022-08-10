//import React from 'react';
const { createElement, render } = wp.element;
import { collectDataBlocks, accessDataBlocks, contactDataBlocks } from '../helpers/privacyContent';
import { TextPageBlock } from './TextPageBlock';

export const PrivacyPage = () => {
	return (
		<section className="text-page">
			<div className="text-page__wrapper">
				<div className="container">
					<h1 className="title title_fade title_size-l text-page__title">SnoreLab’s Privacy Policy</h1>
					<span className="text-page__subtitle">Last updated: June 24, 2019</span>
					<div className="text-page__first-paragraph">
						<p>
							At SnoreLab, we respect the privacy of your data and are committed to&nbsp;being transparent
							about how we handle it. This Privacy Policy details how SnoreLab collects, uses, stores,
							transfers and discloses data obtained from our interactions with you. Here, we also
							highlight the&nbsp;choices you can make about how we manage this data and&nbsp;how&nbsp;you
							may revoke your consent to&nbsp;these processes.
						</p>
						<p>
							This Privacy Policy establishes a legal agreement between Reviva Softworks Ltd (“we”, “us”,
							“SnoreLab”, “the app”) and you (“you”, “your”) as&nbsp;the user of SnoreLab. If you do not
							accept the terms of this Privacy Policy, we ask that you do not use the app.
						</p>
					</div>
					<div className="text-page__blocks-wrapper">
						<div className="text-page__section">
							<div className="text-page__section-main">
								<h2 className="title title_size-m text-page__section-title">
									Data we collect from you and how we use it
								</h2>
								<p>
									SnoreLab only collects data that is relevant to the functionality
									of&nbsp;the&nbsp;service we provide.
								</p>
							</div>
							<div className="text-page__section-blocks">
								{collectDataBlocks.map(({ title, content }) => (
									<TextPageBlock key={title} title={title} content={content} />
								))}
							</div>
						</div>
						<div className="text-page__section">
							<div className="text-page__section-main">
								<h2 className="title title_size-m text-page__section-title">
									Your access to and control of your personal data
								</h2>
							</div>
							<div className="text-page__section-blocks">
								{accessDataBlocks.map(({ title, content }) => (
									<TextPageBlock key={title} title={title} content={content} />
								))}
							</div>
						</div>
						<div className="text-page__section text-page__section-contact">
							<div className="text-page__section-main">
								<h2 className="title title_size-m text-page__section-title">How to contact us</h2>
								<p>
									If you have any queries or concerns about the privacy of your personal information
									or any of the information provided within this Privacy Policy, you may contact us
									via:
								</p>
							</div>
							<div className="text-page__section-blocks">
								{contactDataBlocks.map(({ title, content }) => (
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
