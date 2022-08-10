//import React from 'react';
const { createElement, render } = wp.element;
import { AboutPage } from '../components/AboutPage';

export const About = () => {
	return (
		<main className="about">
			<AboutPage />
		</main>
	);
};
