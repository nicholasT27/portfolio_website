// Scroll and pointer effects for the quiet design.
//
// Drives the reading-progress line, the top bar tint once the page has scrolled,
// the scroll-in reveal of elements marked .rv, the self-drawing timeline line
// ([data-draw]), and a gentle pointer parallax on the hero scene (#wf and .art).
// Nothing here is required for the content to be readable.

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export function createQuiet() {
	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	let frame = 0;
	let observer = null;
	let progress;
	let header;

	function paint() {
		frame = 0;
		const vh = window.innerHeight;
		const max = Math.max(1, document.documentElement.scrollHeight - vh);
		if (progress) progress.style.transform = `scaleX(${clamp(window.scrollY / max)})`;
		if (header) header.classList.toggle('stuck', window.scrollY > 10);
		document.querySelectorAll('[data-draw]').forEach((element) => {
			const r = element.getBoundingClientRect();
			element.style.setProperty('--p', clamp((vh * 0.7 - r.top) / r.height).toFixed(3));
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

	function onPointerMove(event) {
		if (reduce) return;
		const x = event.clientX / window.innerWidth - 0.5;
		const y = event.clientY / window.innerHeight - 0.5;
		const art = document.querySelector('.art');
		if (art) art.style.transform = `translate(${x * 14}px,${y * 10}px)`;
		const scene = document.getElementById('wf');
		if (scene) scene.style.transform = `translate(${x * -12}px,${y * -8}px)`;
	}

	// Call after the page content changes (first load and every navigation).
	function refresh() {
		bindReveal();
		paint();
	}

	function mount() {
		progress = document.getElementById('prog');
		header = document.getElementById('site-header');
		window.addEventListener('scroll', schedule, { passive: true });
		window.addEventListener('resize', schedule);
		window.addEventListener('pointermove', onPointerMove, { passive: true });
		refresh();
	}

	function destroy() {
		cancelAnimationFrame(frame);
		if (observer) observer.disconnect();
		window.removeEventListener('scroll', schedule);
		window.removeEventListener('resize', schedule);
		window.removeEventListener('pointermove', onPointerMove);
	}

	return { mount, refresh, destroy };
}
