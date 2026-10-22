// Dusk Glass scroll effects.
//
// Every page is a run of full-colour "chapters" (elements with data-bg, data-ink,
// data-tx and data-label). While the visitor scrolls, the fixed backdrop blends
// between the colours and textures of the chapters on either side of the middle of
// the screen. The same loop drives the progress bar, the chapter chip, word-by-word
// reveals, drifting background words, parallax, the stacked project cards and the
// timeline line. Nothing here is required for the content to be readable.

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t) => t * t * (3 - 2 * t);
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const rgb = (a) => `rgb(${a.join(',')})`;

function parseTexture(value) {
	const result = {};
	(value || '').split(',').forEach((part) => {
		const [name, amount] = part.split(':');
		if (name) result[name.trim()] = Number(amount);
	});
	return result;
}

// Wrap every word of an element's text in a span, keeping inline elements such as <em>.
function splitWords(element) {
	if (element.dataset.split) return;
	element.dataset.split = '1';
	const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
	const nodes = [];
	while (walker.nextNode()) nodes.push(walker.currentNode);
	nodes.forEach((node) => {
		const parts = node.textContent.split(/(\s+)/);
		const fragment = document.createDocumentFragment();
		parts.forEach((part) => {
			if (!part) return;
			if (/^\s+$/.test(part)) {
				fragment.append(document.createTextNode(' '));
			} else {
				const span = document.createElement('span');
				span.className = 'wd';
				span.textContent = part;
				fragment.append(span);
			}
		});
		node.replaceWith(fragment);
	});
}

export function createDusk() {
	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const root = document.documentElement;
	let chapters = [];
	let stages = [];
	let textures = {};
	let lastLabel = '';
	let frame = 0;
	let observer = null;
	let chip;
	let progress;
	let grain;

	function paint() {
		frame = 0;
		if (!chapters.length) return;
		const vh = window.innerHeight;
		const y = window.scrollY + vh * 0.55;
		const tops = chapters.map((c) => c.getBoundingClientRect().top + window.scrollY);
		let i = 0;
		tops.forEach((top, k) => {
			if (top <= y) i = k;
		});
		let t = 0;
		if (i < chapters.length - 1) t = ease(clamp(1 - (tops[i + 1] - y) / (vh * 0.4)));
		const a = stages[i];
		const b = stages[Math.min(i + 1, stages.length - 1)];
		const ink = mix(a.ink, b.ink, t);
		root.style.setProperty('--bg', rgb(mix(a.bg, b.bg, t)));
		root.style.setProperty('--ink', rgb(ink));
		root.style.setProperty('--soft', `rgba(${ink.join(',')},.72)`);
		root.style.setProperty('--txc', `rgba(${ink.join(',')},.2)`);
		Object.keys(textures).forEach((name) => {
			const amount = (a.tx[name] || 0) * (1 - t) + (b.tx[name] || 0) * t;
			textures[name].style.opacity = String(amount);
		});
		if (grain) grain.style.opacity = '0.2';
		const current = t > 0.5 ? Math.min(i + 1, chapters.length - 1) : i;
		const label = chapters[current].dataset.label || '';
		if (chip && label !== lastLabel) {
			chip.textContent = label;
			lastLabel = label;
		}
		if (progress) {
			const max = Math.max(1, root.scrollHeight - vh);
			progress.style.transform = `scaleX(${clamp(window.scrollY / max)})`;
		}

		// Word-by-word reveal.
		document.querySelectorAll('[data-words]').forEach((element) => {
			const words = element.querySelectorAll('.wd');
			const r = element.getBoundingClientRect();
			const amount = clamp((vh * 0.85 - r.top) / (vh * 0.5 + r.height * 0.5));
			const count = Math.round(amount * words.length);
			words.forEach((word, k) => word.classList.toggle('on', reduce || k < count));
		});
		// Large outlined background words drift sideways.
		document.querySelectorAll('.ghost').forEach((ghost) => {
			const r = ghost.parentElement.getBoundingClientRect();
			const amount = clamp((vh - r.top) / (vh + r.height));
			const shift = (0.5 - amount) * Math.min(window.innerWidth, 900) * 1.1;
			ghost.style.transform = `translate3d(${shift}px,-50%,0)`;
		});
		// Parallax.
		document.querySelectorAll('[data-par]').forEach((element) => {
			const r = element.getBoundingClientRect();
			const offset = (r.top + r.height / 2 - vh / 2) * -parseFloat(element.dataset.par);
			element.style.setProperty('--py', `${offset.toFixed(1)}px`);
		});
		// The timeline line draws itself.
		document.querySelectorAll('[data-draw]').forEach((element) => {
			const r = element.getBoundingClientRect();
			element.style.setProperty('--p', clamp((vh * 0.7 - r.top) / r.height).toFixed(3));
		});
		// Stacked cards shrink slightly as the next card covers them.
		const cards = [...document.querySelectorAll('.sc')];
		cards.forEach((card, k) => {
			const next = cards[k + 1];
			if (!next) {
				card.style.transform = '';
				return;
			}
			const stuck = 100 + k * 28;
			const d = clamp((next.getBoundingClientRect().top - stuck) / (vh * 0.55));
			card.style.transform = `scale(${(0.93 + 0.07 * d).toFixed(3)})`;
		});
	}

	function schedule() {
		if (!frame) frame = requestAnimationFrame(paint);
	}

	function bindReveal() {
		if (observer) observer.disconnect();
		const items = [...document.querySelectorAll('.rv')];
		if (!('IntersectionObserver' in window) || reduce) {
			items.forEach((item) => item.classList.add('v'));
			return;
		}
		observer = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('v');
						observer.unobserve(entry.target);
					}
				}),
			{ threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
		);
		items.forEach((item) => {
			if (!item.classList.contains('v')) observer.observe(item);
		});
	}

	// Call after the page content changes (first load and every navigation).
	function refresh() {
		chapters = [...document.querySelectorAll('[data-bg]')];
		stages = chapters.map((c) => ({
			bg: hex(c.dataset.bg),
			ink: hex(c.dataset.ink),
			tx: parseTexture(c.dataset.tx)
		}));
		document.querySelectorAll('[data-words]').forEach(splitWords);
		bindReveal();
		lastLabel = '';
		paint();
	}

	function onPointerMove(event) {
		if (reduce) return;
		const x = event.clientX / window.innerWidth - 0.5;
		const y = event.clientY / window.innerHeight - 0.5;
		document.querySelectorAll('[data-d]').forEach((element) => {
			const d = Number(element.dataset.d);
			element.style.transform = `translate(${x * d * 2}px,${y * d * 2}px)`;
		});
		const magnet = event.target.closest && event.target.closest('[data-magnet]');
		if (magnet) {
			const r = magnet.getBoundingClientRect();
			const dx = (event.clientX - r.left - r.width / 2) * 0.18;
			const dy = (event.clientY - r.top - r.height / 2) * 0.25;
			magnet.style.transform = `translate(${dx}px,${dy}px)`;
		}
	}

	function onPointerOut(event) {
		const magnet = event.target.closest && event.target.closest('[data-magnet]');
		if (magnet) magnet.style.transform = '';
	}

	function mount() {
		chip = document.getElementById('chip');
		progress = document.getElementById('prog');
		grain = document.getElementById('grain');
		document.querySelectorAll('[data-layer]').forEach((layer) => {
			textures[layer.dataset.layer] = layer;
		});
		window.addEventListener('scroll', schedule, { passive: true });
		window.addEventListener('resize', schedule);
		window.addEventListener('pointermove', onPointerMove, { passive: true });
		window.addEventListener('pointerout', onPointerOut);
		if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);
		refresh();
	}

	function destroy() {
		cancelAnimationFrame(frame);
		if (observer) observer.disconnect();
		window.removeEventListener('scroll', schedule);
		window.removeEventListener('resize', schedule);
		window.removeEventListener('pointermove', onPointerMove);
		window.removeEventListener('pointerout', onPointerOut);
	}

	return { mount, refresh, destroy };
}
