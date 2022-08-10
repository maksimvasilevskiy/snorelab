//import React from 'react';
const { createElement, render } = wp.element;

export const Share = ({ title, links }) => {
	return (
		<section className="share">
			<div className="share-wrapper">
				<div className="container">
					<h1 className="title title_fade title_size-l share-title">{title}</h1>
					<div className="share-links">
						{links.map(({ icon, link }) => (
							<a href={link} className="btn share-links__item" key={link}>
								<div>
									<img src={icon} alt="" />
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
