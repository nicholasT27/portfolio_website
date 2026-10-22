<script>
	let sent = false;
	// Prototype-only interaction: keep the form local until a delivery service is chosen.
	function previewSubmit() {
		sent = true;
	}
</script>

<svelte:head><title>Contact — Siang</title></svelte:head>

<div class="page">
	<section
		class="hero contact-pitch"
		data-bg="#241038"
		data-ink="#fdf0f7"
		data-tx="mesh:1"
		data-label="Contact"
	>
		<div class="ghost" aria-hidden="true">HELLO</div>
		<div class="in">
			<p class="eyebrow">CONTACT / 03</p>
			<h1 class="display">
				<span class="w" style="--k:0">Have</span> <span class="w" style="--k:1">an</span>
				<span class="w" style="--k:2">idea?</span> <em>Let’s talk.</em>
			</h1>
			<p class="lede">
				Whether it’s a freelance opportunity, a collaboration, or simply a good conversation about
				the web, my inbox is open.
			</p>
			<div class="cue"><i />Scroll</div>
		</div>
	</section>

	<section
		class="contact-form"
		data-bg="#10264a"
		data-ink="#eaf3ff"
		data-tx="aurora:1,grid:.4"
		data-label="Tell me about your project"
	>
		<div class="in">
			<h2 class="form-title">Tell me about your project.</h2>
			<form on:submit|preventDefault={previewSubmit}>
				<div class="field rv">
					<label for="name">Your name</label><input
						id="name"
						name="name"
						placeholder="How should I address you?"
						required
					/>
				</div>
				<div class="field rv">
					<label for="email">Email address</label><input
						id="email"
						name="email"
						type="email"
						placeholder="you@example.com"
						required
					/>
				</div>
				<div class="field rv">
					<label for="message">Project or message</label><textarea
						id="message"
						name="message"
						placeholder="A little context goes a long way..."
						required
					/>
				</div>
				<div class="rv">
					<button class="btn primary" type="submit"
						>{sent ? 'Prototype received ✓' : 'Send message'} <span>↗</span></button
					>
				</div>
				<p class="prototype-note">
					Prototype preview: this form demonstrates the interaction but does not send data yet.
				</p>
			</form>
		</div>
	</section>
</div>
