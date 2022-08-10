//import React from 'react';
const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import mockup from '../images/Mockup.png';
import mockup_2x from '../images/Mockup@2x.png';
import bed_time from '../images/Time-to-bed.png';
import bed_time_2x from '../images/Time-to-bed@2x.png';

export const HowWorksNotes = () => {
	return (
		<section className="how-works-notes">
			<div className="how-works-notes__wrapper">
				<div className="container">
					<div className="how-works-notes__info">
						<h2 className="title title_fade-m how-works-notes__title">Add notes and look at your trends</h2>
					</div>
					<div className="examples">
						<div className="example example-note">
							<div className="example__text">
								<h3 className="title title_size-s example-title">Make a note</h3>
								<p>
									If there’s anything that you think might be related to&nbsp;your snoring — make a
									note of it. Perhaps you&nbsp;woke up with a&nbsp;dry&nbsp;mouth,
									or&nbsp;had&nbsp;to&nbsp;use&nbsp;the&nbsp;bathroom several times? Snoring is
									complicated so getting to the root of it needs as&nbsp;much information as possible.
								</p>
							</div>
							<div className="example-img how-works-main__example-img">
								<div className="example-blur">
									<svg
										width="590"
										height="458"
										viewBox="0 0 590 458"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M424.626 0L393.664 174.94L606 251.078L374.529 283.06L343.567 458L231.471 302.825L0 334.806L162.193 206.922L50.0974 51.7467L262.433 127.885L424.626 0Z"
											fill="#0598FA"
										/>
									</svg>
								</div>
								<LazyLoadImage src={mockup} srcSet={`${mockup} 1x, ${mockup_2x} 2x`} alt="" />
							</div>
						</div>
						<div className="example example-trends">
							<div className="example__text">
								<h3 className="title title_size-s example-title">The trends</h3>
								<p>
									You can also edit factors such as your weight (a hugely important influence on
									snoring) and any of the remedies and factors. The&nbsp;Trends view summarises all of
									this information. Here, you&nbsp;can see what impact your selected remedies and
									factors are&nbsp;having — a valuable tool when trying to find the best snoring
									solutions for you.
								</p>
							</div>
							<div className="example-img how-works-main__example-img">
								<div className="example-blur">
									<svg
										width="590"
										height="458"
										viewBox="0 0 590 458"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M424.626 0L393.664 174.94L606 251.078L374.529 283.06L343.567 458L231.471 302.825L0 334.806L162.193 206.922L50.0974 51.7467L262.433 127.885L424.626 0Z"
											fill="#488F83"
										/>
									</svg>
								</div>
								<LazyLoadImage src={bed_time} srcSet={`${bed_time} 1x, ${bed_time_2x} 2x`} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
