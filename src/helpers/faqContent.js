import whatIsSnoring from '../images/what-is-snoring.png';
import whatIsSnoring_2x from '../images/what-is-snoring@2x.png';

import audioRecordings1 from '../images/audioRecordings-1.png';
import audioRecordings1_2x from '../images/audioRecordings-1@2x.png';

// Faq elements
const aboutSnorelabFaqs = {
	title: 'About Snorelab',
	elements: [
		{
			btnTitle: 'About',
			content: `
				<p>The SnoreLab app has helped millions of people to understand their snoring and discover solutions. The app is designed to make it easy for you to hear, measure and track your snoring. Our ultimate goal is to help you (and your partner) to get a better night’s sleep!</p>
				<p>You can share SnoreLab’s reports with your doctor or dentist, or experiment with remedies and lifestyle changes and track their impact over time.</p>
				<p>SnoreLab was first created by a husband after his wife complained about his snoring. If you enjoy or benefit from the app please do leave a positive review and talk about it amongst your family and friends.</p>
				<p>We wish you success on your journey towards a more peaceful night’s sleep!</p>
			`
		},
		{ btnTitle: 'Medical disclaimer', content: `` }
	]
};

const aboutSnoringFaqs = {
	title: 'About Snoring',
	elements: [
		{
			btnTitle: 'What is snoring?',
			content: `
				<img loading="lazy" src="${whatIsSnoring}" srcset="${whatIsSnoring} 1x, ${whatIsSnoring_2x} 2x" alt="" />
				<p>
					<a href="#" class="link">Snoring is noisy breathing whilst you sleep</a>. A narrowed or obstructed airway disturbs airflow which causes audible vibrations in soft tissue at the back of your mouth, throat and/or the base of the tongue. A congested nose can also create whistling or popping sounds.
				</p>
		`
		},
		{
			btnTitle: 'Why do I snore?',
			content: `
			<p>Snoring is caused by a combination of factors which vary from person to person. You are more likely to snore if you:</p>
			<ul class="accordion-content__list">
				<li class="accordion-content__item">
					Have certain anatomical features such as small nostrils, an enlarged tongue, tonsils, uvula or soft palate, or a recessed jaw.
				</li>
				<li class="accordion-content__item">
					<a href="#" class="link">Have nasal or sinus congestion.</a>
				</li>
				<li class="accordion-content__item">
					Are <a href="#" class="link">overweight</a>, particularly with fat around your neck
				</li>
			</ul>
		`
		},
		{ btnTitle: 'How can Snorelab help me to reduce my snoring?', content: `` },
		{ btnTitle: 'What remedies are most effective for reducing snoring?', content: `` },
		{ btnTitle: 'Why is my snoring remedy not working?', content: `` },
		{ btnTitle: 'What can i do to stop snoring naturally?', content: `` },
		{ btnTitle: 'What is sleep apnea?', content: `` },
		{ btnTitle: 'Can snorelab detect sleep apnea?', content: `` }
	]
};

const howToUseFaqs = {
	title: 'How to use the app',
	elements: [
		{ btnTitle: 'How should I position my device?', content: `` },
		{ btnTitle: 'Can snorelab run in the background?', content: `` },
		{ btnTitle: 'Will I hear calls and notifications?', content: `` },
		{ btnTitle: 'Does snorelab require internet access?', content: `` },
		{ btnTitle: 'Does snorelab work in airplane mode?', content: `` },
		{ btnTitle: 'Can I set snorelab to start automatically?', content: `` },
		{ btnTitle: 'Do I need to remove my phone case?', content: `` },
		{
			btnTitle: 'I can only listen to a handful audio samples. Was the app recording all night?',
			content: `
			<p>Yes. Regardless of your Recording Mode setting or your Premium/Free status, SnoreLab listens and calculates all night long. The Snore Score and stats will not be affected if you use Samples mode versus Full Night Recording. This simply refers to the amount of audio that is available for playback in the morning.</p>
		`
		}
	]
};

const understandingResultsFaqs = {
	title: 'Understanding the results',
	elements: [
		{ btnTitle: 'What is the snore score?', content: `` },
		{ btnTitle: 'What does light, loud and epic mean?', content: `` },
		{ btnTitle: 'The app has detected a lot of snoring. Should I be worried?', content: `` },
		{ btnTitle: 'The snoring ratings seem too low. What could be wrong?', content: `` },
		{ btnTitle: 'How accurate are the results?', content: `` }
	]
};

const audioRecordingsFaqs = {
	title: 'Audio recordings',
	elements: [
		{
			btnTitle: 'How can I listen to the audio recordings?',
			content: `
			<img loading="lazy" src="${audioRecordings1}" srcset="${audioRecordings1} 1x, ${audioRecordings1_2x} 2x" alt=""/>
			<p>To listen to the recordings simply tap the chart on the results page at the position you wish to hear. Once a recording is playing, you can scroll through the recordings either by dragging the blue spot on the chart or by using the navigation controls in the audio player.</p>
		`
		},
		{ btnTitle: 'How do I record more or less audio?', content: `` },
		{ btnTitle: 'How much disk space do the recordings take up?', content: `` },
		{ btnTitle: 'What happens if I exceed my storage limit?', content: `` },
		{ btnTitle: 'Does snorelab collect audio recordings?', content: `` },
		{ btnTitle: 'Can I export my audio files?', content: `` },
		{ btnTitle: 'I have important audio. How can I stop this from going missing?', content: `` }
	]
};

const snorelabPremiumFaqs = {
	title: 'Snorelab premium',
	elements: [
		{ btnTitle: 'Is snorelab free?', content: `` },
		{ btnTitle: 'What additional features does snorelab premium have?', content: `` },
		{ btnTitle: 'Can I transfer my premium purchase to another device?', content: `` },
		{ btnTitle: 'The purchase process is failing.', content: `` }
	]
};

const troubleshootingFaqs = {
	title: 'Troubleshooting',
	elements: [
		{ btnTitle: 'The recording process has failed.', content: `` },
		{ btnTitle: 'There are two snorers in the room.', content: `` },
		{ btnTitle: 'My snore score is low but I am still told that I snore.', content: `` },
		{ btnTitle: `Snorelab has picked up sounds that aren't snoring.`, content: `` },
		{ btnTitle: 'I forgot to stop Snorelab in the morning.', content: `` },
		{ btnTitle: `Why can't I change the sensitivity settings?`, content: `` }
	]
};

// Faq element arr (for render using map)
const faqElementsArr = [
	aboutSnorelabFaqs,
	aboutSnoringFaqs,
	howToUseFaqs,
	understandingResultsFaqs,
	audioRecordingsFaqs,
	snorelabPremiumFaqs,
	troubleshootingFaqs
];

export default faqElementsArr;
