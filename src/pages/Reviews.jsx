//import React from 'react';
const { createElement, render } = wp.element;
import { ReviewsPage } from '../components/ReviewsPage';

export const Reviews = () => {
	return (
		<main className="reviews">
			<ReviewsPage />
		</main>
	);
};
