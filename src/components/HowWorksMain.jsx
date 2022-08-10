//import React from 'react';
const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import dashboard from '../images/Dashboard.png';
import dashboard_2x from '../images/Dashboard@2x.png';
import audio from '../images/Audio.png';
import audio_2x from '../images/Audio@2x.png';

export const HowWorksMain = () => {
	return (
		<section className="how-works-main">
			<div className="how-works-main__wrapper">
				<div className="container">
					<div className="how-works-main__info">
						<h1 className="title title_fade title_size-l how-works-main__title">How SnoreLab Works</h1>
						<p>
							SnoreLab is an app that records your snoring, giving you objective data to help find the
							solutions that work for you.
							<br />
							This is our concise guide to getting started with SnoreLab…
						</p>
					</div>
					<div className="examples">
						<div className="example example-dashboard">
							<div className="example__text">
								<h3 className="title title_size-s example-title">
									Anti-snoring remedies and&nbsp;techniques
								</h3>
								<p>
									By measuring nightly changes in your snoring intensity with SnoreLab, you can try
									different anti-snoring remedies and&nbsp;techniques and hopefully discover one which
									really works.
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
								<LazyLoadImage src={dashboard} srcSet={`${dashboard} 1x, ${dashboard_2x} 2x`} alt="" />
							</div>
						</div>
						<div className="example example-audio">
							<div className="example__text">
								<h3 className="title title_size-s example-title">What you sound like</h3>
								<p>
									Crucially, SnoreLab also allows you to hear what you sound like so&nbsp;you don’t
									just have to take your partner’s word for it! We find this can be a dramatic
									revelation which spurs you to take action.
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
								<LazyLoadImage src={audio} srcSet={`${audio} 1x, ${audio_2x} 2x`} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
