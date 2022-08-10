//import React from 'react';
const { createElement, render } = wp.element;

export const ContactPage = () => {
	return (
		<section className="contact-page">
			<div className="contact-page__wrapper">
				<div className="container">
					<h1 className="title title_fade title_size-l contact-page__title">Contact Us</h1>
					<div className="contact-page__content">
						<p>
							If you encounter any issues with SnoreLab or&nbsp;would like to contact
							us&nbsp;for&nbsp;press enquiries or&nbsp;business development opportunities,
							you&nbsp;can&nbsp;reach us via the Send feedback link in&nbsp;the app, or directly on&nbsp;
							<a href="mailto:support@snorelab.com" className="link">
								support@snorelab.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
