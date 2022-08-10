//import React from 'react';
const { createElement, render, forwardRef, useRef } = wp.element;
import { CareersForm } from './CareersForm';

const currentJobsArr = ['iOS Developer', 'Android Developer'];

export const CareersPage = forwardRef((props, ref) => {
	return (
		<section className="careers-page">
			<div className="careers-page__wrapper">
				<div className="container">
					<h1 className="title title_fade title_size-l careers-page__title">Careers</h1>
					<div className="careers-page__subtitle">
						<p>We are seeking talented people to join our team.</p>
					</div>
					<div className="careers-page__info">
						<p>
							We are small team who are passionate about creating a best in class product to help the
							world’s snorers (and their partners!) improve their sleep. We are located in London, UK.
						</p>
						<span className="careers-page__jobs-title">At this time we are seeking:</span>
						<ul className="careers-page__jobs-list">
							{currentJobsArr.map(job => (
								<li className="careers-page__jobs-item" key={job}>
									{job}
								</li>
							))}
						</ul>
					</div>
					<CareersForm ref={ref} />
				</div>
			</div>
		</section>
	);
});
