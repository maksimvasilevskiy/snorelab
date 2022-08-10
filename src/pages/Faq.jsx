//import React from 'react';
const { createElement, render } = wp.element;
import { FaqPage } from '../components/FaqPage';

export const Faq = () => {
	return (
		<main className="faq">
			<FaqPage />
		</main>
	);
};
