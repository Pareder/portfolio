document.addEventListener('DOMContentLoaded', () => {
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

	setInterval(() => {
		document.querySelector('.section.intro').classList.toggle('name');
		document.querySelector('.section.intro').classList.toggle('position');
	}, 3000)
});
