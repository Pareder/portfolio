document.addEventListener('DOMContentLoaded', () => {
	AOS?.init?.();

	if (window.location.hash) {
		document.querySelector('.' + window.location.hash.replace('#', '')).scrollIntoView({behavior: 'smooth'});
	}

	const links = document.querySelectorAll('.menu__link[href*="#"]');
	for (const link of links) {
		link.addEventListener('click', e => {
			const navCheckbox = document.getElementById('nav__checkbox');
			if (navCheckbox.checked) {
				navCheckbox.checked = false;
				document.documentElement.classList.remove('blur');
			}

			document.querySelector('.' + e.target.hash.replace('#', '')).scrollIntoView({behavior: 'smooth'});
		});
	}

	const navCheckbox = document.getElementById('nav__checkbox');
	navCheckbox.addEventListener('change', e => {
		const checked = e.target.checked;
		if (checked) {
			document.documentElement.classList.add('blur');
		} else {
			document.documentElement.classList.remove('blur');
		}
	});

	const experienceBtns = document.querySelectorAll('.experience__btn');
	for (const btn of experienceBtns) {
		btn.addEventListener('click', e => {
			const btnIndex = e.target.dataset.index;
			const activeExperienceBlock = document.querySelector('.jobs__block.active');
			if (activeExperienceBlock.dataset.index === btnIndex) {
				return;
			}

			const activeExperienceBtn = document.querySelector('.experience__btn.active');
			e.target.classList.add('active');
			activeExperienceBtn.classList.remove('active');

			const experienceBlock = document.querySelector(`.jobs__block[data-index="${btnIndex}"]`);
			activeExperienceBlock.classList.remove('active');
			experienceBlock.classList.add('active');
		});
	}

	setInterval(() => {
		document.querySelector('.section.intro').classList.toggle('name');
		document.querySelector('.section.intro').classList.toggle('position');
	}, 3000)
});
