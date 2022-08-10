//import React from 'react';
const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import delay from '../images/Delay.png';
import delay_2x from '../images/Delay@2x.png';
import soundscape from '../images/Soundscape.png';
import soundscape_2x from '../images/Soundscape@2x.png';
import alarm from '../images/Alarm.png';
import alarm_2x from '../images/Alarm@2x.png';

export const HowWorksMake = () => {
	return (
		<section className="how-works-make">
			<div className="how-works-make__wrapper">
				<div className="container">
					<div className="how-works-make__info">
						<h2 className="title title_fade-m how-works-make__title">
							Make use of our soundscapes and&nbsp;alarm clock
						</h2>
						<p>
							SnoreLab is an app that records your snoring, giving you objective data to help find the
							solutions that work for you. <br />This is our concise guide to getting started with
							SnoreLab…
						</p>
					</div>
					<div className="examples">
						<div className="example example-delay">
							<div className="example__text">
								<h3 className="title title_size-s example-title">Set a delay</h3>
								<p>
									Before starting your session, consider setting a&nbsp;delay. This means that
									SnoreLab won’t record the&nbsp;noises you make before you&nbsp;finally get to sleep.
									This is done by pressing the Time to Sleep button on the Start screen.
								</p>
							</div>
							<div className="example-img how-works-main__example-img">
								<LazyLoadImage src={delay} srcSet={`${delay} 1x, ${delay_2x} 2x`} alt="" />
							</div>
						</div>
						<div className="example example-soundscape">
							<div className="example__text">
								<h3 className="title title_size-s example-title">Choose a&nbsp;soundscape</h3>
								<p>
									Here, you can also choose a&nbsp;relaxing soundscape to help you&nbsp;drift off.
									This will cut off once SnoreLab starts recording.
								</p>
							</div>
							<div className="example-img how-works-main__example-img">
								<LazyLoadImage
									src={soundscape}
									srcSet={`${soundscape} 1x, ${soundscape_2x} 2x`}
									alt=""
								/>
							</div>
						</div>
						<div className="example example-alarm">
							<div className="example__text">
								<h3 className="title title_size-s example-title">Set SnoreLab’s alarm clock</h3>
								<p>
									By setting SnoreLab’s alarm clock, your session will automatically stop at this
									chosen time. Our selection of sounds slowly fade in to gently wake you up.
								</p>
							</div>
							<div className="example-img how-works-main__example-img">
								<LazyLoadImage src={alarm} srcSet={`${alarm} 1x, ${alarm_2x} 2x`} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
