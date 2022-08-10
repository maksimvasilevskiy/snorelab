//import React from 'react';
const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import snoregym from '../images/insights-snoregym.png';
import snoregym_2x from '../images/insights-snoregym@2x.png';

export const InsightsFeautured = () => {
	return (
		<section className="insights-feautured">
			<div className="insights-feautured__wrapper">
				<div className="container">
					<h2 className="title title_fade-s insights-feautured__title">Feautured article</h2>
					<div className="insights-feautured__content">
						<div className="order-lg-1 insights-feautured__img">
							<LazyLoadImage src={snoregym} srcSet={`${snoregym} 1x, ${snoregym_2x} 2x`} alt="SnoreGym" />
						</div>
						<div className="order-lg-0 insights-feautured__content-text">
							<div className="insights-feautured__content-wrapper">
								<div className="insights-feautured__content-flags">
									<span>
										<a className="link" href="/insights/?category=solutions">
											Solutions
										</a>
									</span>
								</div>

								<h3 className="title title_size-m insights-feautured__content-title">
									<a href="/insight" className="link">
										Introducing Our New App — SnoreGym
									</a>
								</h3>
								<p>
									From the makers of&nbsp;SnoreLab, SnoreGym is&nbsp;the exercise
									app&nbsp;for&nbsp;snorers.
								</p>
								<p>
									No,&nbsp;we’re&nbsp;not talking pushups and squats — SnoreGym works out your
									“snoring muscles”.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
