//import React from 'react';

const { createElement, render } = wp.element;
import { PrivacyPage } from '../components/PrivacyPage';

export const Privacy = () => {
	return (
		<main className="privacy">
			<PrivacyPage />
		</main>
	);
};
