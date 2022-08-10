export const calculateSlidesPerView = () => {
	const viewportWidth = window.innerWidth;

	if (viewportWidth >= 1450) {
		return 3.2;
	} else if (viewportWidth >= 1220) {
		return 2.5;
	} else if (viewportWidth >= 767) {
		return 2;
	} else if (viewportWidth >= 576) {
		return 1.6;
	} else if (viewportWidth >= 450) {
		return 1.15;
	} else {
		return 1.2;
	}
};

export const calculateTextWidth = () => {
	const imageBlocks = document.querySelectorAll('.insight-img_with-note');

	if (imageBlocks) {
		imageBlocks.forEach(block => {
			const blockChildren = Array.from(block.children);
			const images = blockChildren.filter(el => el.matches('img'));

			let imageWidth;

			if (images[1]) {
				const firstImageWidth = images[0].clientWidth;
				const secondImageWidth = images[1].clientWidth;

				imageWidth = firstImageWidth > secondImageWidth ? firstImageWidth : secondImageWidth;
			}

			// if (window.clientWidth <= 991 && images[1]) {
			// 	imageWidth = images[1].clientWidth;
			// } else {
			// 	imageWidth = images[0].clientWidth;
			// }

			const textBlocks = blockChildren.filter(el => el.matches('p'));
			textBlocks.forEach(text => (text.style.width = `${imageWidth}px`));
		});
	}
};
