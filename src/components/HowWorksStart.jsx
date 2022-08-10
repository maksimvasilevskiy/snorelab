//import React from 'react';
const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import start from '../images/Start.png';
import start_2x from '../images/Start@2x.png';
import placement from '../images/Placement.png';
import placement_2x from '../images/Placement@2x.png';
import m_start from '../images/m-Start.png';
import m_start_2x from '../images/m-Start@2x.png';

export const HowWorksStart = () => {
	return (
		<section className="how-works-start">
			<div className="how-works-start__wrapper">
				<svg
					data-svg="decorative"
					width="576"
					height="1314"
					viewBox="0 0 576 1314"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M594.372 0.74997L817.121 458.827L1321.61 388.534L954.787 741.935L1177.54 1200.01L728.077 960.348L361.253 1313.75L450.296 812.228L0.837613 572.564L505.328 502.271L594.372 0.74997Z"
						fill="url(#paint0_linear_537_1130)"
						fillOpacity="0.7"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_537_1130"
							x1="703.018"
							y1="631.335"
							x2="102.534"
							y2="466.13"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#1F12D3" />
							<stop offset="1" stopColor="#3FAFDE" />
						</linearGradient>
					</defs>
				</svg>
				<div className="container">
					<div className="how-works-start__info">
						<h2 className="title title_fade-m how-works-start__title">
							Press Start and place the&nbsp;phone down
						</h2>
					</div>
					<div className="examples">
						<div className="example example-start">
							<div className="order-lg-1 example-img how-works-main__example-img">
								<div className="example-blur">
									<svg
										width="737"
										height="630"
										viewBox="0 0 737 630"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M516.418 0L478.763 240.639L737 345.37L455.491 389.361L417.836 630L281.509 416.55L0 460.541L197.254 284.63L60.9271 71.18L319.164 175.911L516.418 0Z"
											fill="#0598FA"
										/>
									</svg>
								</div>
								<img
									className="d-none d-lg-block"
									src={start}
									srcSet={`${start} 1x, ${start_2x} 2x`}
									alt=""
								/>
								<LazyLoadImage
									className="d-lg-none"
									src={m_start}
									srcSet={`${m_start} 1x, ${m_start_2x} 2x`}
									alt=""
								/>
							</div>
							<div className="order-lg-0 example__text">
								<h3 className="title title_size-s example-title">Start</h3>
								<p>
									Once you’re ready, press the Start button and put your phone face-down near to your
									bed. We&nbsp;recommend having your phone about an arm’s length away from your face
									with the&nbsp;device’s microphones facing towards you.
								</p>
							</div>
						</div>
						<div className="example example-placement">
							<div className="order-lg-1 example__text">
								<h3 className="title title_size-s example-title">Placement</h3>
								<p>
									Having the phone face-down isn’t vital — this simply allows you&nbsp;to keep the
									device unlocked whilst making use&nbsp;of&nbsp;the&nbsp;phone’s proximity sensor to
									turn off the screen. This means that if you want to check your phone during
									the&nbsp;night, there aren’t any annoying unlocking procedures
									to&nbsp;go&nbsp;through.
								</p>
							</div>
							<div className="order-lg-0 example-img how-works-main__example-img">
								<div className="example-blur">
									<svg
										width="737"
										height="556"
										viewBox="0 0 737 556"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M516.418 0L478.763 240.639L737 345.37L455.491 389.361L417.836 630L281.509 416.55L0 460.541L197.254 284.63L60.9271 71.18L319.164 175.911L516.418 0Z"
											fill="#43CB83"
										/>
									</svg>
								</div>
								<LazyLoadImage src={placement} srcSet={`${placement} 1x, ${placement_2x} 2x`} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
