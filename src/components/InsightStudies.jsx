//import React from 'react';
const { createElement, render, Fragment } = wp.element;
import { InsightSection } from './InsightSection';

const blockedNoseCauses = [
	{ title: 'Colds and illness', link: '#' },
	{ title: 'Allergies', link: '#' },
	{ title: 'Pollution and weather', link: '#' },
	{ title: 'Alcohol', link: '#' },
	{ title: 'Nasal sprays', link: '#' },
	{ title: 'Certain medications', link: '#' },
	{ title: 'Structural issues in your nose', link: '#' }
];

export const InsightStudies = () => {
	return (
		<>
			<InsightSection title={'What are the studies?'}>
				<div className="insight-text">
					<p>When designing SnoreGym, we looked at a number of different studies.</p>
					<p>
						Several of the studies compared groups performing the anti-snoring exercises with control groups
						performing “sham-therapy” as&nbsp;a&nbsp;placebo.
					</p>
					<p>
						All of the studies evaluated subjects before the exercises and after 3&nbsp;months performing
						them regularly.
					</p>
					<p>
						Whilst most of the studies used sleep studies to objectively measure sleep statistics, research
						teams also used questionnaires to allow the&nbsp;subjects and their partners to subjectively
						evaluate their sleep quality and snoring.
					</p>
					<p>
						You can read more about the individual studies into mouth exercises for snoring and sleep apnea
						in our dedicated article:{' '}
						<a href="#" className="link">
							The&nbsp;Science Behind SnoreGym.
						</a>
					</p>
				</div>
				<div className="insight-note insight-note_left-stick">
					<p>
						… I recorded my snoring and scored 199&nbsp;with 70% of my snoring at the epic level.
						We&nbsp;cleaned, vacuumed and aired the room. I&nbsp;had some allergy medication from the
						doctor, settled down and WOW! I&nbsp;didn’t snore! …
					</p>
				</div>
			</InsightSection>
			<InsightSection title={'Benefit #1 — Snoring reduction'}>
				<div className="insight-text">
					<p>
						In one study, after 3 months doing regular mouth exercises, 47%&nbsp;of&nbsp;participants
						reported not snoring any more [1].
					</p>
					<p>
						Other studies have produced similar findings, some showing an&nbsp;average of 56% snoring
						severity reduction and 36% less time spent snoring.
					</p>
				</div>
			</InsightSection>
			<InsightSection title={'Benefit #1 — Snoring reduction'}>
				<div className="insight-text">
					<span className="insight-text__list-title">
						Here, we explore the different causes of a blocked nose that could be&nbsp;the root of your
						snoring:
					</span>
					<ul className="insight-text__list insight-benefits__list">
						{blockedNoseCauses.map(({ title, link }) => (
							<li className="insight-text__list-item" key={title}>
								<a href={link} className="link">
									{title}
								</a>
							</li>
						))}
					</ul>
					<span className="insight-text__list-title">Remedy your cold-induced snoring with:</span>
					<ul className="insight-text__list insight-benefits__list">
						<li className="insight-text__list-item">Medication</li>
						<li className="insight-text__list-item">
							<a href="#" className="link">
								Neti pots.
							</a>{' '}
							These simple devices use salt water to soothe your nasal passages and clear excess mucus.
						</li>
						<li className="insight-text__list-item">
							<a href="#" className="link">
								Nasal sprays. Anticholinergic nasal sprays
							</a>{' '}
							are the best type for&nbsp;treating a runny nose, whereas{' '}
							<a href="#" className="link">
								decongestant nasal sprays
							</a>{' '}
							can be an effective symptom reliever.
						</li>
					</ul>
				</div>
			</InsightSection>
		</>
	);
};
