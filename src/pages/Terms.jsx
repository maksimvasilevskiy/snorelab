//import React from 'react';
const { createElement, render } = wp.element;
import { TermsPage } from '../components/TermsPage';

export const Terms = () => {
	return (
		<main className="terms">
			<TermsPage />
		</main>
	);
};
