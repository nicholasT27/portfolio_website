<script>
	let sent = false;
	// Prototype-only interaction: keep the form local until a delivery service is chosen.
	function previewSubmit() {
		sent = true;
	}
</script>

<svelte:head><title>Contact — Siang Nicholas</title></svelte:head>

<div class="page contact-layout">
	<section class="contact-pitch">
		<div>
			<p class="eyebrow">CONTACT / 03</p>
			<h1 class="display">Have an idea? <em>Let’s talk.</em></h1>
		</div>
		<div>
			<p>
				Whether it’s a freelance opportunity, a collaboration, or simply a good conversation about
				the web, my inbox is open.
			</p>
			<div class="contact-details">
				<a href="https://github.com/nicholasT27" target="_blank" rel="noreferrer">GitHub ↗</a><span
					>Malaysia · GMT+8</span
				>
			</div>
		</div>
	</section>
	<section class="contact-form">
		<h2>Tell me about your project.</h2>
		<form on:submit|preventDefault={previewSubmit}>
			<div class="field">
				<label for="name">Your name</label><input
					id="name"
					name="name"
					placeholder="How should I address you?"
					required
				/>
			</div>
			<div class="field">
				<label for="email">Email address</label><input
					id="email"
					name="email"
					type="email"
					placeholder="you@example.com"
					required
				/>
			</div>
			<div class="field">
				<label for="message">Project or message</label><textarea
					id="message"
					name="message"
					placeholder="A little context goes a long way..."
					required
				/>
			</div>
			<button class="btn primary" type="submit"
				>{sent ? 'Prototype received ✓' : 'Send message'} <span>↗</span></button
			>
			<p class="prototype-note">
				Prototype preview: this form demonstrates the interaction but does not send data yet.
			</p>
		</form>
	</section>
</div>
