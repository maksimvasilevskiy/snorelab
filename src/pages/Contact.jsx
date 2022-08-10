//import React from 'react';
const { createElement, render } = wp.element;
import { ContactPage } from '../components/ContactPage';

export const Contact = () => {
	return (
		<main className="contact">
			<ContactPage />
		</main>
	);
};
