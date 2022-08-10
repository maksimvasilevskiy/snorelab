//import React from 'react';
const { createElement, render } = wp.element;
import googlePlay from '../images/google-play.svg';
import appStore from '../images/app-store.svg';

export const InsightDownload = () => {
	return (
		<section className="insight-download-section">
			<div className="insight-download__wrapper">
				<svg
					data-svg="decorative"
					width="1122"
					height="425"
					viewBox="0 0 1122 425"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M786.189 0L728.863 162.336L1122 232.988L693.434 262.664L636.109 425L428.566 281.006L0 310.683L300.297 192.012L92.7547 48.0183L485.891 118.67L786.189 0Z"
						fill="#1A25EF"
						fillOpacity="0.6"
					/>
				</svg>
				<div className="container">
					<div className="insight-download__info-apps">
						<a target="_blank" href="https://play.google.com/store/apps/details?id=com.snorelab.app" className="link insight-download__info-app google-play-btn">
							<img src={googlePlay} alt="google play" />
						</a>
						<a target="_blank" href="https://itunes.apple.com/app/id529443604" className="link insight-download__info-app app-store-btn">
							<img src={appStore} alt="app store" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
