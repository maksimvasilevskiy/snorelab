//import React from 'react';
const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import score from '../images/Score.png';
import score_2x from '../images/Score@2x.png';
import m_score from '../images/m-Score.png';
import m_score_2x from '../images/m-Score@2x.png';
import audio from '../images/Audio-1.png';
import audio_2x from '../images/Audio-1@2x.png';
import m_audio from '../images/m-Audio-1.png';
import m_audio_2x from '../images/m-Audio-1@2x.png';

export const HowWorksSee = () => {
	return (
		<section className="how-works-see">
			<div className="how-works-see__wrapper">
				<div className="container">
					<div className="how-works-see__info">
						<h2 className="title title_fade-m how-works-see__title">
							See your results and listen to your sounds
						</h2>
						<p>Now to assess the damage!</p>
					</div>
					<div className="examples">
						<div className="example example-score">
							<div className="example__text">
								<h3 className="title title_size-s example-title">Snore score</h3>
								<p>
									SnoreLab gives you a Snore Score: our unique measurement of&nbsp;snoring intensity.
									We also give you&nbsp;a breakdown of how long you&nbsp;were snoring and&nbsp;at what
									levels — quiet, light, loud and epic!
								</p>
							</div>
							<div className="example-img how-works-main__example-img">
								<LazyLoadImage
									className="d-none d-lg-block"
									src={score}
									srcSet={`${score} 1x, ${score_2x} 2x`}
									alt=""
								/>
								<LazyLoadImage
									className="d-lg-none"
									src={m_score}
									srcSet={`${m_score} 1x, ${m_score_2x} 2x`}
									alt=""
								/>
							</div>
						</div>
						<div className="example example-listen">
							<div className="example__text">
								<h3 className="title title_size-s example-title">
									Listen to the sounds you&nbsp;make for yourself
								</h3>
								<p>
									But don’t take our word for it — by tapping on the chart, you&nbsp;can&nbsp;listen
									to the sounds you&nbsp;make for yourself. Use&nbsp;the&nbsp;control panel to scroll
									through your recordings, or drag the&nbsp;blue dot to the point on the chart you
									want to listen to.&nbsp;SnoreLab’s default is to save 20&nbsp;audio samples per
									night, but&nbsp;you can opt to listen to audio for the entire night with
									Full&nbsp;Night Recording.
								</p>
							</div>
							<div className="example-img how-works-main__example-img">
								<LazyLoadImage
									className="d-none d-md-block"
									src={audio}
									srcSet={`${audio} 1x, ${audio_2x} 2x`}
									alt=""
								/>
								<LazyLoadImage
									className="d-md-none"
									src={m_audio}
									srcSet={`${m_audio} 1x, ${m_audio_2x} 2x`}
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
