//import React from 'react';
const { createElement, render } = wp.element;
import { EpworthQuestionnaire } from '../components/EpworthQuestionnaire';
import { shareQuestionnaireLinks } from '../helpers/variables';
import { Share } from '../components/Share';
import { InsightsAssess } from '../components/InsightsAssess';

import stop_bang from '../images/stop-bang.png';
import stop_bang_2x from '../images/stop-bang@2x.png';
import screening from '../images/screening.png';
import screening_2x from '../images/screening@2x.png';

const questionnaireArticles = [
	{
		title: 'Sleep Apnea: Screening, Testing and Treatment',
		link: 'stopbang',
		image: { '1x': screening, '2x': screening_2x }
	},
	{
		title: 'What is Sleep Apnea?',
		link: 'stopbang',
		image: { '1x': stop_bang, '2x': stop_bang_2x }
	}
];

export const Epworth = () => {
	return (
		<main className="epworth">
			<EpworthQuestionnaire />
			<Share title="Share" links={shareQuestionnaireLinks} />
			<InsightsAssess
				light={false}
				titleClass="title_fade-s"
				titleText={window.innerWidth > 991 ? 'Learn more about obstructive sleep apnea' : 'Related articles'}
				articles={questionnaireArticles}
			/>
		</main>
	);
};
