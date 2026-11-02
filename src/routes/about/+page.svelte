<script>
	import BuildScene from '$lib/BuildScene.svelte';
	import { resumeUrl, certificateUrl } from '$lib/site';
</script>

<svelte:head><title>About — Siang</title></svelte:head>

<div class="pg">
	<div class="wrap pagehead">
		<p class="eyebrow ln"><span style="--d:.1s">About me</span></p>
		<h1 class="ln"><span style="--d:.2s">Web developer for small businesses.</span></h1>
		<p class="fade" style="--d:.5s">
			I build clear, fast websites for small businesses in Malaysia, designed to work well on phones
			and laptops.
		</p>
	</div>

	<section class="sec wrap">
		<div class="two">
			<div>
				<p class="eyebrow rv">Hello, I’m Siang</p>
				<h2 class="rv">Practical websites, built with care.</h2>
				<p class="body rv">
					I’m a freelance web developer based in Selangor, Malaysia. I build responsive websites
					with Next.js, React and Tailwind CSS, from landing pages and small business sites to
					portfolios and simple product or service websites.
				</p>
				<p class="body rv">
					I care about clean structure and pages that are simple for customers to use, from the
					first message to launch.
				</p>
				<div class="btns rv" style="margin-top: 26px">
					<a class="btn" href="/portfolio"
						>See my projects
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg
						></a
					>
					<a class="lnk" href="/contact"
						>Message me
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg
						></a
					>
				</div>
			</div>
			<div class="art">
				<div
					class="arch"
					style="animation-delay: 0.2s"
					role="img"
					aria-label="Skill tags drifting in and settling around a ring"
				>
					<div class="in"><BuildScene variant="skills" /></div>
				</div>
			</div>
		</div>
	</section>

	<section class="sec wrap">
		<p class="eyebrow rv">What I bring</p>
		<div class="sh"><h2 class="rv">Capabilities &amp; tools</h2></div>
		<div class="cols3">
			<div class="box rv">
				<i>01</i>
				<h3>Front-end development</h3>
				<p>
					Responsive, component-based interfaces with HTML, CSS, JavaScript, React, SvelteKit, and
					Tailwind CSS.
				</p>
			</div>
			<div class="box rv" style="--d:.1s">
				<i>02</i>
				<h3>Product-minded UI</h3>
				<p>
					Interfaces shaped around hierarchy, clarity, accessible patterns, and the needs behind
					each screen.
				</p>
			</div>
			<div class="box rv" style="--d:.2s">
				<i>03</i>
				<h3>Back-end foundations</h3>
				<p>Practical experience with Node.js, APIs, PocketBase, AWS, and Docker.</p>
			</div>
		</div>
	</section>

	<section class="sec wrap">
		<p class="eyebrow rv">Learning journey</p>
		<div class="sh"><h2 class="rv">Education</h2></div>
		<div class="tl" data-draw>
			<i class="fill" />
			<div class="it rv">
				<time>JUL 2023</time>
				<h3>Next Academy — Full Stack Web Development</h3>
				<p>Certificate of Completion</p>
			</div>
			<div class="it rv" style="--d:.1s">
				<time>2027 · EXPECTED</time>
				<h3>Wawasan Open University</h3>
				<p>Bachelor of Information Technology (Hons), Computer Systems and Networks</p>
			</div>
		</div>
	</section>

	<section class="sec wrap">
		<p class="eyebrow rv">For employers / 01—02</p>
		<div class="sh"><h2 class="rv">Résumé &amp; credentials</h2></div>
		<div class="docs">
			<a class="doc dk rv" href={resumeUrl} target="_blank" rel="noreferrer">
				<div>
					<span>RÉSUMÉ</span>
					<h3>Experience, education, and technical skills.</h3>
				</div>
				<u>View résumé ↗</u>
			</a>
			<a class="doc rv" style="--d:.1s" href={certificateUrl} target="_blank" rel="noreferrer">
				<div>
					<span>CERTIFICATE</span>
					<h3>Full Stack Web Development — Next Academy.</h3>
				</div>
				<u>View certificate ↗</u>
			</a>
		</div>
	</section>
</div>
