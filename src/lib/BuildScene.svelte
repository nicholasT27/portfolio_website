<script>
	// Animated scene inside the hero arch. `variant="wireframe"` fills a grey page with colour,
	// block by block; `variant="skills"` settles skill pills around a ring.
	export let variant = 'wireframe';
</script>

{#if variant === 'wireframe'}
	<div class="wf" id="wf">
		<div class="nav2">
			<div class="sk" style="--c:#2f4b47;--d:0s" />
			<div class="sk" style="--c:#cfd9d4;--d:.4s" />
		</div>
		<div class="sk hero2" style="--c:linear-gradient(135deg,#f2cdb8,#e5b79a);--d:1s" />
		<div class="lines">
			<div class="sk" style="--c:#2a3b3a;--d:1.8s" />
			<div class="sk" style="--c:#9fb0ab;--d:2.1s" />
			<div class="sk" style="--c:#9fb0ab;--d:2.4s" />
		</div>
		<div class="row">
			<div class="sk" style="--c:#1d2a2b;--d:3s" />
			<div class="sk" style="--c:#cfd9d4;--d:3.3s" />
		</div>
		<svg class="cur" viewBox="0 0 20 20" aria-hidden="true"
			><path
				d="M3 2 L3 15 L7 11.5 L9.8 17 L12 16 L9.3 10.6 L14.5 10.4Z"
				fill="#1d2a2b"
				stroke="#fff"
				stroke-width="1.2"
				stroke-linejoin="round"
			/></svg
		>
	</div>
	<div class="stagechip" aria-hidden="true">
		<span>Design</span><span>Build</span><span>Launch</span>
	</div>
{:else}
	<div class="sk2" id="wf">
		<div class="core" />
		<span class="pill dk" style="--x:14%;--y:30%;--d:0s;--fx:-40px;--fy:-30px">HTML</span>
		<span class="pill" style="--x:52%;--y:26%;--d:.4s;--fx:40px;--fy:-30px">CSS</span>
		<span class="pill" style="--x:30%;--y:41%;--d:.8s;--fx:-50px;--fy:10px">SvelteKit</span>
		<span class="pill dk" style="--x:56%;--y:48%;--d:1.2s;--fx:50px;--fy:10px">React</span>
		<span class="pill" style="--x:12%;--y:56%;--d:1.6s;--fx:-40px;--fy:40px">Tailwind</span>
		<span class="pill" style="--x:50%;--y:63%;--d:2s;--fx:40px;--fy:40px">Node.js</span>
		<span class="pill dk" style="--x:22%;--y:72%;--d:2.4s;--fx:-30px;--fy:50px">Docker</span>
		<div class="hand">always learning</div>
	</div>
{/if}
