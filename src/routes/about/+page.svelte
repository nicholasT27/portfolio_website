<script>
	import BuildScene from '$lib/BuildScene.svelte';
</script>

<svelte:head><title>About — Siang</title></svelte:head>

<div class="pg">
	<div class="wrap pagehead">
		<p class="eyebrow ln"><span style="--d:.1s">The person behind the code</span></p>
		<h1 class="ln"><span style="--d:.2s">Curious by default.</span></h1>
		<p class="fade" style="--d:.5s">
			I care about the details that make digital products feel clear, capable, and genuinely
			pleasant to use.
		</p>
	</div>

	<section class="sec wrap">
		<div class="two">
			<div>
				<p class="eyebrow rv">Hello, I’m Siang</p>
				<h2 class="rv">A developer who enjoys turning rough ideas into polished experiences.</h2>
				<p class="body rv">
					I build responsive websites and web applications with a focus on clean structure,
					intuitive interactions, and accessible experiences.
				</p>
				<p class="body rv">
					I’m happiest when I’m learning something new, untangling a tricky problem, or helping a
					product become simpler for the people using it.
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
						>Get in touch
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
				<p>
					Practical experience with Node.js, APIs, PocketBase, AWS, Docker, and automation
					workflows.
				</p>
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
		<p class="eyebrow rv">Documents / 01—02</p>
		<div class="sh"><h2 class="rv">Résumé &amp; credentials</h2></div>
		<div class="docs">
			<a
				class="doc dk rv"
				href="https://drive.google.com/file/d/17U7lxEtt_aCQndFmK9MwfnHy6z7P5BKO/view?usp=share_link"
				target="_blank"
				rel="noreferrer"
			>
				<div>
					<span>RÉSUMÉ</span>
					<h3>Experience, education, and technical skills.</h3>
				</div>
				<u>View résumé ↗</u>
			</a>
			<a
				class="doc rv"
				style="--d:.1s"
				href="https://drive.google.com/file/d/1TC5cQ-ors8yiV2AKKXMkgwWDJolJhBmW/view?usp=drive_link"
				target="_blank"
				rel="noreferrer"
			>
				<div>
					<span>CERTIFICATE</span>
					<h3>Full Stack Web Development — Next Academy.</h3>
				</div>
				<u>View certificate ↗</u>
			</a>
		</div>
	</section>
</div>
