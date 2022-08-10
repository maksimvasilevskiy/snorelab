//import React from 'react';
const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import dashboard from '../images/Dashboard.png';
import dashboard_2x from '../images/Dashboard@2x.png';
import audio from '../images/Audio.png';
import audio_2x from '../images/Audio@2x.png';

export const SuccessStoriesMain = () => {
	return (
		<section className="success-stories-main">
			<div className="success-stories-main__wrapper">
				<div className="container">
					<div className="success-stories-main__info">
						<h1 className="title title_fade title_size-l success-stories-main__title">SnoreLab Success Stories</h1>
					</div>
					<div class="success-stories-main__text">
						<p>
							SnoreLab was created out of desire to help people and we love hearing stories about the app achieving just that. This page is a collection of genuine user stories taken from iTunes user reviews.
						</p>
						<p>
							You’ll notice that everyone has a different snoring trigger and hence a different snoring solution. SnoreLab aims to help you find those triggers to get the solution that works for you…
						</p>
					</div>
					<div class="success-stories-main__stories">
						<div class="success-stories-main__story">
							<div class="success-stories-main__story-title">
								For some snorers, weight loss can be a powerful tool:
							</div>
							<div class="success-stories-main__story-text">
								I had a very high snore score and thought I tried everything. I was diagnosed with asthma after allergy tests came back normal. I started asthma treatment and my score is now 0. I watched the SnoreLab graph drop over the last 4 months. I am amazed. My snoring was caused by asthma. I’m now able to sleep longer and feel rested. I also <a href="#">lost 25 pounds</a>. Amazing how awesome I feel after I sleep thru out the night without getting “elbowed” by my spouse and being able to breath.
							</div>
						</div>
						<div class="success-stories-main__story">
							<div class="success-stories-main__story-title">
								Often, allergies and hay fever can worsen snoring:
							</div>
							<div class="success-stories-main__story-text">
								“Using this product I identified <a href="#">hay fever as the source of my snoring</a>. Adding a Tempur pillow and a hay fever remedy has had a dramatic effect after one week, more energy, ability to concentrate after getting a good nights sleep. Went from a score of plus fifty to less than 10 in one week. Brilliant!”
							</div>
						</div>
						<div class="success-stories-main__story">
							<div class="success-stories-main__story-title">
								Sometimes, just simple weather changes or the climate you live in can make you snore:
							</div>
							<div class="success-stories-main__story-text">
								“Love this app — I live in a very dry climate — after several scores between 35 and 50 — I bought a <a href="#">humidifier</a> and now my score was 7!”
							</div>
						</div>
						<div class="success-stories-main__story">
							<div class="success-stories-main__story-title">
								For many of our users, anti-snoring mouthpieces can massively reduce snoring:
							</div>
							<div class="success-stories-main__story-text">
								<p>
									“If you snore, think you snore or are positive that you don’t snore: get this app! For me, it app proved to me that I did snore. The problem was how to fix it. I started with <a href="#">nasal strips</a> and nasal sprays. The app proved that these remedies had no effect, so I decided to buy a snore guard (<a href="#">SnoreRx</a>) and viola… no snoring! How do I know? This app records you all night long, graphs snoring episodes and the intensity and gives you a Snore Score. Before the device, my Snore Scores were between 15 and 45. Since the device, my scores are 1 to 3! I’m also starting to feel refreshed in the morning.”
								</p>
								<p>
									“After a few nights, I bought the upgrade to this app. It’s both the most expensive app I’ve ever bought, and some of the best money I’ve ever spent. I have been experimenting with different types of anti-snore devices to see what works best and is most comfortable for me, and this app helped me quickly and objectively rate how effective they are at preventing me from snoring. The interface is easy, and it supports every feature I wanted. After spending literally thousands of dollars on sleep medicine doctors, I’m now sleeping better after using this app to help me choose between a few, comparatively inexpensive, over-the-counter remedies. This ended up far more effective than I had imagined (specifically for me, <a href="#">the tongue-retention class of device</a>), and this app helped me do it in a couple of weeks (and I knew what was and was not working after each night!)”
								</p>
							</div>
						</div>
						<div class="success-stories-main__story">
							<div class="success-stories-main__story-title">
								We hear from plenty of users who attribute their snoring to sleeping position. Specialist pillows can be invaluable in these instances:
							</div>
							<div class="success-stories-main__story-text">
								<p>
									“This app is brilliant. It proved my theory that I snore when I sleep on my back and <a href="#">I don’t snore when I sleep on my side</a>. What a great idea this app is!!! I have chronic health problems and, without a good night’s sleep, I just can’t function. So it’s very important to know how to get the best, and most restful sleep. I can also share that arthritis and a poor mattress had made sleeping on my side all but impossible for many years and, during that time, I became a walking zombie from snoring and <a href="#">sleep apnea</a>. I NEVER felt rested and could fall asleep ANYWHERE on a dime (and give you 9-cents change). For example: when I stopped the car at traffic lights and stop signs (it’s the God’s-Honest Truth). Then, I got a foam mattress from IKEA and voilá! I sleep comfortably on my side again! And what a dramatic difference it has made in my life! I wake up feeling REFRESHED! A sensation I had forgotten entirely. I wish the same sweet recovery for all of you who wake up every morning feeling like what you really need is … another 8 hours of sleep! Snore less and sleep more – you’re gonna LOVE it!”
								</p>
								<p>
									“When I first started using the App my Snore Index was anywhere between 50 and 96. I started to try some of the different Remedies. Bought a wedge pillow and in one night my Snore Index went down to near zero and has stayed near zero ever since using the pillow – and is actually zero most nights. Had seen three doctors, two specialists, one dentist and had a sleep study conducted – they all pointed me to dental appliances which I had troubles wearing due to a gag reflex. None had suggested a <a href="#">wedge pillow</a>. Thank you Snore Lab!”
								</p>
							</div>
						</div>
						<div class="success-stories-main__story">
							<div class="success-stories-main__story-title">
								Sometimes, a problem as simple as a blocked nose can cause snoring:
							</div>
							<div class="success-stories-main__story-text">
								<p>
									“I have used this app for six weeks now. I have adjusted my <a href="#">sinus aids</a> and my snoring has reduced from 210 to 60! I can be a <a href="#">travel</a> companion once again!”
								</p>
								<p>
									“I started using Snore Lab on the 23rd of January (a week ago), first on its own and now I use <a href="#">nasal strips</a> at night. My wife has not had to get out of bed and go to another bedroom at all. I was supposed to see a doctor today at a sleep clinic where I went back in November, but I cancelled the appointment as I know what he was going to say “you suffer from sleep apnea” and here’s the solution!! The CPAP mask. Enough already, if I wanted to wear a mask I’d go nuts. Thank you SnoreLab, keep doing your thing!”
								</p>
							</div>
						</div>
						<div class="success-stories-main__story">
							<div class="success-stories-main__story-title">
								SnoreLab can also be very useful in medical consultations:
							</div>
							<div class="success-stories-main__story-text">
								<p>
									“Great app to monitor the severity of your own snoring and take to doctor to play the audio. Saved me from another <a href="#">sleep study</a> in the lab.”
								</p>
								<p>
									“This is a fantastic app. It really gives you a great concept of your snoring pattern and how long you sleep for. In the end I learned I have severe case of <a href="#">sleep apnea</a>.”
								</p>
								<p>
									“I’ve never really understood why my wife wears earplugs to bed. This app has allowed me to record and track my nightly racket and convince me that a <a href="#">sleep apnea test</a> should be next. Life changing app.”
								</p>
								<p>
									“Now that I can hear what I sound like, I have been able to act upon my snoring and have reduced it significantly. Truly great app!”
								</p>
							</div>
						</div>
						<div class="success-stories-main__story">
							<div class="success-stories-main__story-title">
								The app is widely acclaimed by dentists and medical professionals:
							</div>
							<div class="success-stories-main__story-text">
								“As a qualified ABDSM dentist who exclusively treats obstructive sleep apnea patients using oral appliances, we sometimes struggle to have fast, easy, objective metrics for our patients to see and appreciate. SnoreLab gives us that and then some! We have all of our patients download SnoreLab at their consult appointment and use the data to help them confirm their condition. After treatment they can see the results immediately the next morning. They experience vast improvements in snoring scores. They will still have to undergo a follow up sleep test to confirm the treatment is successful, but this quick and easy app helps them see the changes right away.”
							</div>
						</div>
						<div class="success-stories-main__story">
							<div class="success-stories-main__story-title">
									We aim to give you understanding of your snoring problem so you can make the most appropriate changes:
								</div>
								<div class="success-stories-main__story-text">
									<p>
										“This app is a revelation. For the first time I feel in control of my snoring problem. I can monitor scientifically what exacerbates and what alleviates the problem. I feel certain now I can cure the problem and get my wife back to our bed! Thank you SnoreLab.”
									</p>
									<p>
										“Helped an Epic snorer! Simple to use and has customisable features to personalise your war against the snore. Helps to show your patterns and records them. Quite frightening but useful. Helped me identify remedies and lifestyle patterns that impacted on my ‘snore’ . Now obsessed by the nightly graphs.”
									</p>
									<p>
										“This is the best sleep recorder I have tried. While it doesn’t do anything directly to cut down on your snoring, it is helpful to know how loud your snoring is. It allows you to test out various ways to cut down on snoring. I’m down 40 plus percent in just two weeks!”
									</p>
								</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};
