// Terms blocks of acceptance section
const medicalServicesBlock = {
	title: 'Medical Services Disclaimer',
	content: `
		<p>SnoreLab is not a medical device or intended to replace professional medical advice and/or diagnosis. SnoreLab is not intended to diagnose or treat sleep apnea or any illness/medical condition. Please consult with a licensed physician before making any decisions or taking any actions that may affect your health, safety and wellbeing. Do not disregard professional advice because of anything you have seen, heard or read in the SnoreLab app, website or social media channels. Always consult with a healthcare professional if you have any questions or concerns about your snoring or general health.</p>
	`
};

const creatingAccountBlock = {
	title: 'Creating an Account and Your Eligibility',
	content: `
		<p>To use certain features within the app, such as the cloud backup, you are required to create an account and will be asked to provide information including your full name, email address, age and sex. This information will be used in accordance with our <a href="/privacy" class="link">Privacy Policy</a>. You agree to provide accurate information and that you will update your details if they change.</p>
		<p>If you are under 18, your parent or guardian must read and accept the terms of this agreement. By using the app, you confirm that your parent or guardian has read and accepted the terms.</p>
	`
};

const useBlock = {
	title: 'Your Use of The App, Website and Other Communication Channels',
	content: `
		<p>Any information submitted by you through the app, or snoring data recorded whilst using the app is governed by SnoreLab’s <a href="/privacy" class="link">Privacy Policy</a>. You are responsible for all your activity within the app. If you submit feedback via the app or directly via the support email channels, you are responsible for these communications.</p>
		<p>We collect certain information when you use our website, answer questionnaires or engage with us via social media. This information is collected regardless of whether or not you have a SnoreLab account and your use of these channels is not to be considered private. Information as to what this data includes, why it is collected and how it is handled by us and others can be found in our <a href="/privacy" class="link">Privacy Policy</a>.</p>
	`
};

const breachesBlock = {
	title: 'Breaches of The Terms of Use',
	content: `
		<p>You agree that if you do any of the following, you are in breach of this agreement:</p>
		<ol class="number-list text-page__block-list">
			<li class="text-page__block-item">Sell, rent, lease, loan, sublicense, distribute or transfer the rights to the app or associated content</li>
			<li class="text-page__block-item">Modify, reverse engineer or disassemble the app</li>
			<li class="text-page__block-item">Copy, adapt, modify, translate the app without our consent</li>
			<li class="text-page__block-item">Permit others to use the app in a manner that is in breach of the terms of this agreement</li>
			<li class="text-page__block-item">Disable any measures in the app that are designed for protection of intellectual property</li>
			<li class="text-page__block-item">Attempt to navigate around measures adopted to control access to content protected by copyright</li>
			<li class="text-page__block-item">To compile data in a way that is usable by a competitor product/service</li>
		</ol>
		<p>Any such use shall immediately terminate your license to use the app.</p>
	`
};

// Array contains all text blocks in an acceptance section
export const acceptanceBlocks = [medicalServicesBlock, creatingAccountBlock, useBlock, breachesBlock];
