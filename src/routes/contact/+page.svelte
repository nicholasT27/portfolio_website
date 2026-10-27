<script>
	let sent = false;
	// Prototype-only interaction: keep the form local until a delivery service is chosen.
	function previewSubmit() {
		sent = true;
	}
</script>

<svelte:head><title>Contact — Siang</title></svelte:head>

<div class="pg">
	<div class="wrap pagehead">
		<p class="eyebrow ln"><span style="--d:.1s">Contact / 03</span></p>
		<h1 class="ln"><span style="--d:.2s">Have an idea? Let’s talk.</span></h1>
		<p class="fade" style="--d:.5s">
			Whether it’s a freelance opportunity, a collaboration, or simply a good conversation about the
			web, my inbox is open.
		</p>
	</div>

	<section class="sec wrap" style="max-width: 820px">
		<p class="eyebrow rv">Tell me about your project</p>
		<form on:submit|preventDefault={previewSubmit}>
			<div class="fld rv">
				<label for="name">Your name</label><input
					id="name"
					name="name"
					placeholder="How should I address you?"
					required
				/>
			</div>
			<div class="fld rv">
				<label for="email">Email address</label><input
					id="email"
					name="email"
					type="email"
					placeholder="you@example.com"
					required
				/>
			</div>
			<div class="fld rv">
				<label for="message">Project or message</label><textarea
					id="message"
					name="message"
					rows="3"
					placeholder="A little context goes a long way..."
					required
				/>
			</div>
			<button class="btn rv" type="submit"
				>{sent ? 'Prototype received ✓' : 'Send message'}
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg
				></button
			>
		</form>
	</section>
</div>
