// Privacy blocks of collect data section
const personalDataBlock = {
	title: 'Personal data we collect if you choose to sign up for Online Backup',
	content: `
		<p>If you choose to sign up to our online backup service, in order to provide access to our cloud services in an authenticated and secure manner, we will collect your email address.</p>
		<p>We will also collect all data that you input into the app (such as age, weight and sex) and your snoring stats, so that you can fully restore this SnoreLab data on other devices.</p>
		<p>We do not collect audio recordings unless you choose to provide them to us.</p>
	`
};

const anonymousDataBlock = {
	title: 'Anonymous data collected from every SnoreLab user',
	content: `
		<p>When you run SnoreLab, you are assigned an anonymous user unique identifier (UUID) that is used to track your usage of the app, track your interactions with various features and to provide us with a summary of your snoring stats. <i>This does not contain information that can personally identify you.</i> A summary of these results is sent to our secure servers.</p>
		<p>We use this information to conduct research, develop app features and troubleshoot; performing data analysis and tests. This is to improve our products and services and to research how users’ results vary based on different criteria on an aggregate basis.</p>
		<p>For example, we may research how snoring intensity varies based on users’ BMI or to evaluate the effectiveness of snoring remedies. The results of this research may be published within the app or elsewhere but that would not include any data that could personally identify you.</p>
	`
};

const audioRecordingsBlock = {
	title: 'Audio recordings',
	content: `
		<p>SnoreLab does not automatically collect or store audio recordings made whilst using the app. To deliver our Cloud Backup service — which enables you to recover your history should you lose or change device — you can optionally allow to us to collect and store a selection of encrypted audio recordings on our server. It is also possible to use Cloud Backup on a data-only basis if preferred. Audio recordings are encrypted using a unique key for each user before being transferred and stored on our server, providing a high level of privacy protection.</p>
		<p>With a view to improving our technologies, we may occasionally ask your permission to collect a limited set of your audio recordings. You have a right to refuse this permission. Should you grant us access to your audio recordings, we will take all necessary steps to ensure the privacy of this data in accordance with this Privacy Policy.</p>
		<p>Please consider that if you choose to share your recordings with us via non-private platforms such as on social media or by email, or with medical professionals, they are consequently not to be considered private and SnoreLab is not liable for any unauthorized handling/use of these recordings.</p>
	`
};

const appleHealthBlock = {
	title: 'Apple Health',
	content: `
	<p>
		If, upon initial setup of SnoreLab on iOS you enable us to link with Apple Health, we may collect data including but not limited to weight, steps and height. This is stored locally within the app, and optionally within our Online Backup system. This personal data is never shared with or sold to any third party and will only ever be used for internally conducted research in an anonymous and aggregated format.
	</p>
	`
};

const googleFitBlock = {
	title: 'Google Fit',
	content: `
	<p>
		The use of information received from Google Fit APIs will adhere to the Google Fit Developer and User Data Policy, including the Limited Use requirements. Specifically, we collect weight data from Google Fit and write sleep data. This is stored locally within the app and is never shared with or sold to any third party and will only ever be used for internally conducted research in an anonymous and aggregated format.
	</p>
	`
};

const technicalInformationBlock = {
	title: 'Technical information we collect automatically',
	content: `
	<p>
		When you use the app or contact our support email channels, we automatically collect the following information:
	</p>
	<ul class="ellipse-list text-page__block-list">
		<li class="text-page__block-item">Device information — information about the mobile device you use to access SnoreLab; including the hardware model, operating system and version, log files, timestamps and unique device identifiers.</li>
		<li class="text-page__block-item">Information from cookies and other tracking technologies — we&nbsp;use&nbsp;various technologies to collect information about your use&nbsp;of&bsp;SnoreLab including your frequency of use and interactions with features.</li>
	</ul>
	`
};

const howWeUseInformationBlock = {
	title: 'How we use this information',
	content: `
	<p>
		In summary, we use all of the above information to:
	</p>
	<ul class="ellipse-list text-page__block-list">
		<li class="text-page__block-item">Provide the services of the app</li>
		<li class="text-page__block-item">Analyze, operate, maintain and improve the app; adding new features and services</li>
		<li class="text-page__block-item">Enable transfer of data between your devices</li>
		<li class="text-page__block-item">Customize content you see when you use the app</li>
		<li class="text-page__block-item">Verify your identity</li>
		<li class="text-page__block-item">Provide customer service; responding to comments, questions and requests</li>
		<li class="text-page__block-item">Monitor and analyze trends in usage and engagements</li>
		<li class="text-page__block-item">Troubleshoot issues with the app or website</li>
		<li class="text-page__block-item">Conduct research</li>
	</ul>
	`
};

const cookiesAndPixelsBlock = {
	title: 'Cookies and pixels',
	content: `
	<p>A cookie is a small text file that a site stores on your computer or mobile device when you visit the site. We use cookies for:</p>
	<p><i>Analytics and Performance:</i> Cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p>
	<p><i>Advertising</i>: We use these cookies to deliver advertisements, to make them more relevant and meaningful to users, and to track the efficiency of our advertising campaigns. Our third-party advertising partners may use these cookies to build a profile of your interests and deliver relevant advertising on other sites.</p>
	`
};

const yourConsentBlock = {
	title: 'Your consent',
	content: `
		<ol class="number-list text-page__block-list">
			<li class="text-page__block-item">We may store and process your personal data you provide through the usage of the app and through the account creation process solely for the purpose of providing services to you, to improve our service features and other purposes indicated in this Privacy Policy.</li>
			<li class="text-page__block-item">The data that you provide to us through the account creation process includes personal data you enter into the app, such as your account data (e.g. your name and email address), and other general data (e.g. age and sex). Depending on the data you provide, it may also contain information about your general health (e.g. weight).</li>
			<li class="text-page__block-item">We will not distribute any of your personal data to third parties, except if it is required to provide the service to you (e.g. technical service providers as detailed in subsequent sections), unless we have asked for your explicit consent.</li>
		</ol>
	`
};

// Array contains all text blocks in a collect data section
export const collectDataBlocks = [
	personalDataBlock,
	anonymousDataBlock,
	audioRecordingsBlock,
	appleHealthBlock,
	googleFitBlock,
	technicalInformationBlock,
	howWeUseInformationBlock,
	cookiesAndPixelsBlock,
	yourConsentBlock
];

// Privacy blocks of access and  control data section
const accessBlock = {
	title: 'Access',
	content: `
		<p>Personal data that you input into SnoreLab will be visible in the app interface, for example in the online backup screen, profile screen and in the records that you create with the app. You can also ask us what personal data we have about you by contacting us&nbsp;on&nbsp;<a href="mailto:support@snorelab.com" class="link">support@snorelab.com</a>. Access rights to personal data is the same for free and paid users.</p>
	`
};

const modificationBlock = {
	title: 'Modification, correction and deletion',
	content: `
		<p>You can modify, correct, delete and update your personal data via the app’s interface. Once deleted, your personal data including your account details, snoring stats and audio recordings cannot be reinstated. Please note that content you have shared with others, for example medical professionals, via the app or otherwise, may remain visible after you have deleted your account.</p>
		<p>You can delete all of your Online Backup data from our servers by signing out of your account in the Online Backup screen and selecting the Delete Account option. Your Online Backup data will then be deleted from our servers within 48 hours.</p>
	`
};

const gdprBlock = {
	title: 'GDPR for EU residents',
	content: `
		<p>EU residents have certain statutory rights regarding their personal data as introduced by the General Data Protection Regulation (GDPR). Subject to any legal exemptions, you may have the right to request access to personal information as well as to seek to update, delete or correct this information:</p>
		<ol class="number-list text-page__block-list">
			<li class="text-page__block-item">Correction of personal data and restricting its processing. You are responsible for ensuring personal information you provide SnoreLab is accurate. Inaccurate information will affect your experience when using the SnoreLab app. If you believe that your personal data is inaccurate, you can contact us and ask us to correct such personal data via <a href="mailto:support@snorelab.com" class="link">support@snorelab.com</a>. You shall also have the right to request restriction of processing of your personal data. If you contest the accuracy of the personal data and we need some time to verify its accuracy.</li>
			<li class="text-page__block-item">Access to your personal data. The app gives you the ability to access and update personal data within the app via your account settings. You shall have the right to request information about whether we have any personal data about you by simply writing us&nbsp;at&nbsp;<a href="mailto:support@snorelab.com" class="link">support@snorelab.com</a>.</li>
			<li class="text-page__block-item">Erasing your personal data. If you believe that your personal data is no longer necessary in relation to the purposes for which it was originally collected, or in cases where you have withdrawn your consent or object to the processing of your personal data, or in cases where the processing of your personal data does not otherwise comply with the GDPR, you have right to contact us and ask us to erase such personal data as described above. You can simply write us at <a href="mailto:support@snorelab.com" class="link">support@snorelab.com</a>. Please be aware that erasing some personal data inserted by you may affect your possibility to utilize the app and its features. Erasing some personal data may also take some time due to technical reasons.</li>
			<li class="text-page__block-item">Right to object processing of your personal data. You can object processing your personal data and stop us from processing your personal data, simply write us&nbsp;at&nbsp;<a href="mailto:support@snorelab.com" class="link">support@snorelab.com</a>. Please consider that erasing some personal data inserted by you may affect your possibility to use the app and its features.</li>
			<li class="text-page__block-item">Notification requirements. We commit to notify you within reasonable period of time and your data protection authority within 72 hours about any personal data breaches in the app.</li>
			<li class="text-page__block-item">Data protection authorities. Subject to GDPR, you also have the right to (i) restrict our use of personal data and (ii) lodge a complaint with your local data protection authority about any of our activities that you deem are not compliant with GDPR.</li>
		</ol>
		<p>Please consider that in the case of a vague request exercising the aforementioned rights we may engage with you so as to better understand the motivation for the request and to locate the relevant information. In case this is impossible, we reserve the right to refuse your request.</p>
		<p>Following the provisions of GDPR we might also require you to prove your identity in order for you to invoke the mentioned rights. This is made to ensure that no rights of others are violated by your request, and the rights described in this section are exercised by an authorized party.</p>
		<p>Please note that we will grant your request within 30 days after receiving it, but it may take us up to 90 days in some cases, for example for full erasure of your personal data stored in our backup systems. This is due to the size and complexity of the systems we use to store data.</p>
	`
};

// Array contains all text blocks in an access data section
export const accessDataBlocks = [accessBlock, modificationBlock, gdprBlock];

const emailBlock = {
	title: 'Email',
	content: `
		<p>
			<a href="mailto:support@snorelab.com" class="link">support@snorelab.com</a> 
			or 
			<a href="mailto:android@snorelab.com" class="link">android@snorelab.com</a>
		</p>
	`
};

const postBlock = {
	title: 'Post',
	content: `
		<p>Reviva Softworks Ltd.</p>
		<p>27 Old Gloucester Street</p>
		<p>London</p>
		<p>WC1N 3AX</p>
		<p>United Kingdom </p>
	`
};

export const contactDataBlocks = [emailBlock, postBlock];
