//import React from 'react';
const { createElement, render } = wp.element;

export const TextPageBlock = ({ title, content }) => {
	return (
		<div className="text-page__block">
			<h3 className="title title_size-s text-page__block-title">{title}</h3>
			<div className="text-page__block-content" dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
};
