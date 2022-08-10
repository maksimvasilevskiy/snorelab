//import React from 'react';
const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import record from '../images/Record.png';
import record_2x from '../images/Record@2x.png';
import pause from '../images/Pause.png';
import pause_2x from '../images/Pause@2x.png';
import slide_btn from '../images/Slide-btn.png';
import slide_btn_2x from '../images/Slide-btn@2x.png';
import m_slide_btn from '../images/m-Slide-btn.png';
import m_slide_btn_2x from '../images/m-Slide-btn@2x.png';
import rating from '../images/Rating-1.png';
import rating_2x from '../images/Rating-1@2x.png';

export const HowWorksSleep = () => {
	return (
		<section className="how-works-sleep">
			<div className="how-works-sleep__wrapper">
				<div className="container">
					<div className="how-works-sleep__info">
						<h2 className="title title_fade-m how-works-sleep__title">
							Go to sleep and let SnoreLab do&nbsp;its&nbsp;thing
						</h2>
					</div>
					<div className="examples">
						<div className="example example-record">
							<div className="order-1 order-xl-0 example__text">
								<h3 className="title title_size-s example-title">
									SnoreLab will listen to&nbsp;you&nbsp;snore
								</h3>
								<p>
									We use sophisticated snore detection algorithms to calculate your scores and give
									you&nbsp;a picture of what you&nbsp;sound like.
								</p>
							</div>
							<div className="order-0 order-xl-1 example-img how-works-main__example-img">
								<LazyLoadImage src={record} srcSet={`${record} 1x, ${record_2x} 2x`} alt="" />
							</div>
						</div>
						<div className="order-1 order-lg-0 example example-pause">
							<div className="example__text">
								<h3 className="title title_size-s example-title">Pause</h3>
								<p>
									Remember, you can pause the&nbsp;monitoring if you
									get&nbsp;up&nbsp;in&nbsp;the middle of the night.
								</p>
							</div>
							<div className="example-img how-works-main__example-img">
								<LazyLoadImage src={pause} srcSet={`${pause} 1x, ${pause_2x} 2x`} alt="" />
							</div>
						</div>
						<div className="example example-stop">
							<div className="example-img how-works-main__example-img">
								<LazyLoadImage
									className="d-none d-lg-block"
									src={slide_btn}
									srcSet={`${slide_btn} 1x, ${slide_btn_2x} 2x`}
									alt=""
								/>
								<LazyLoadImage
									className="d-block d-lg-none"
									src={m_slide_btn}
									srcSet={`${m_slide_btn} 1x, ${m_slide_btn_2x} 2x`}
									alt=""
								/>
							</div>
							<div className="example__text">
								<h3 className="title title_size-s example-title">Stop the session</h3>
								<p>
									In the morning, when you are ready to end your session, use the Slide button to stop
									the session.
								</p>
							</div>
						</div>
						<div className="order-1 order-lg-0 example example-rating">
							<div className="example__text">
								<h3 className="title title_size-s example-title">Rest rating</h3>
								<p>
									You can then register your Rest Rating — a great way of tracking how your snoring
									affects your sleep quality.
								</p>
							</div>
							<div className="example-img how-works-main__example-img">
								<LazyLoadImage src={rating} srcSet={`${rating} 1x, ${rating_2x} 2x`} alt="" />
							</div>
						</div>
					</div>
				</div>
				<svg
					data-svg="decorative"
					width="503"
					height="878"
					viewBox="0 0 503 878"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M462 0L570.889 335.127H923.262L638.187 542.246L747.076 877.373L462 670.254L176.924 877.373L285.813 542.246L0.737579 335.127H353.111L462 0Z"
						fill="#17A2FF"
						fillOpacity="0.4"
					/>
				</svg>
			</div>
		</section>
	);
};
