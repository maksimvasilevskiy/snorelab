//import React, { useEffect, useState } from 'react';
const { createElement, render, useEffect, useState } = wp.element;
import { InsightSection } from './InsightSection';
import insight_3 from '../images/insight-img-3.png';
import insight_3_2x from '../images/insight-img-3@2x.png';
import insight_4 from '../images/insight-img-4.png';
import insight_4_2x from '../images/insight-img-4@2x.png';
import m_insight_3 from '../images/m_insight-img-3.png';
import m_insight_3_2x from '../images/m_insight-img-3@2x.png';
import m_insight_4 from '../images/m_insight-img-4.png';
import m_insight_4_2x from '../images/m_insight-img-4@2x.png';

export const InsightAdvice = () => {
	return (
		<InsightSection className="insight-advice" title={'1. Sleep on your side'} marginBottom={55}>
			<div className="insight-note insight-note_left-stick">
				<p>One of the simplest ways to combat your snoring is to make sure you sleep on your side.</p>
			</div>
			<div className="insight-text">
				<p>
					Sleeping on your back makes you far more likely to snore or&nbsp;experience sleep apnea; here, your
					jaw recedes, your tongue falls back, and weight on your neck compresses your upper airway.
					All&nbsp;of&nbsp;these disturb airflow and cause vibration [1].
				</p>
				<span className="insight-text__list-title">
					There are several ways to get yourself sleeping on your side:
				</span>
				<ul className="insight-text__list">
					<li className="insight-text__list-item">
						Use pillows effectively. You can buy specialist pillows that promote side sleeping or you can
						use normal pillows to prop yourself up&nbsp;to&nbsp;prevent you rolling onto your back.
					</li>
					<li className="insight-text__list-item">
						Make back sleeping difficult. The well-known method amongst many back-sleeping snorers is to{' '}
						<a href="#" className="link">
							tape&nbsp;a&nbsp;tennis&nbsp;ball
						</a>{' '}
						to the back of&nbsp;your pajamas so that sleeping on your back is uncomfortable and practically
						impossible.
					</li>
					<li className="insight-text__list-item">
						Positional trainers. There are devices that detect when you&nbsp;are&nbsp;sleeping on your back
						and give a small vibration which tells your subconscious mind that it is time to turn over.
					</li>
				</ul>
			</div>
			<div className="insight-img insight-img_without-border insight-img_with-note m-note-hidden">
				<img data-img="desktop" src={insight_3} srcSet={`${insight_3} 1x, ${insight_3_2x} 2x`} alt="" />
				<img data-img="mobile" src={m_insight_3} srcSet={`${m_insight_3} 1x, ${m_insight_3_2x} 2x`} alt="" />
				<p>Additional notes made on a session will appear in the Sleep Notes</p>
			</div>
			<div className="insight-img insight-img_without-border insight-img_with-note insight-img_text-left">
				<img data-img="desktop" src={insight_4} srcSet={`${insight_4} 1x, ${insight_4_2x} 2x`} alt="" />
				<img data-img="mobile" src={m_insight_4} srcSet={`${m_insight_4} 1x, ${m_insight_4_2x} 2x`} alt="" />
				<p>
					Inconsistent snoring patterns with obvious pauses could indicate risky breathing periods. This was
					given to&nbsp;us&nbsp;by&nbsp;a&nbsp;SnoreLab user who went on to get a sleep apnea diagnosis.
				</p>
			</div>
			<div className="insight-note insight-note_advice">
				<h3 className="title title_size-s insight-note__title">
					Read SnoreLab’s full article on specialist anti-snoring pillows
				</h3>
				<div className="insight-text">
					<p>
						We often get asked if SnoreLab can use recorded snoring to&nbsp;find sleep apnea. It&nbsp;is
						important to note that SnoreLab is&nbsp;not an automatic sleep apnea detector.
					</p>
					<p>
						Sleep apnea does often have some very distinctive sounds. Whilst SnoreLab could detect this
						typical sound profile, apnea events are&nbsp;not&nbsp;actually defined by sound.
					</p>
					<p>
						An apnea is a period during sleep where breathing stops and&nbsp;is&nbsp;therefore identified by
						measuring both breathing effort and&nbsp;airflow (or lack thereof). A&nbsp;drop in blood oxygen
						saturation also helps to confirm. Measuring this requires specialist equipment beyond the reach
						of a consumer app.
					</p>
					<p>
						In SnoreLab, you can search your session for risky sounds using Full Night Recording mode to
						ensure that every sound and event is&nbsp;captured.
					</p>
					<p>
						Some users have used this feature to discover sounds in&nbsp;their recordings that suggested
						apnea events. They have then found them useful in&nbsp;subsequent medical consultations. For
						many people, SnoreLab has helped flag sleep apnea they weren’t aware that they had.
					</p>
				</div>
			</div>
		</InsightSection>
	);
};
