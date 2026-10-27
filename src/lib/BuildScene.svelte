<script>
	// Animated scene inside the hero arch. `variant="wireframe"` fills a grey page with colour,
	// block by block; `variant="blocks"` drops page blocks into place and "publishes" them.
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
	<div class="ab" id="wf">
		<div class="tb"><i /><i /><i /></div>
		<div class="body">
			<div class="blk hero3" style="--d:0s" />
			<div class="three">
				<div class="blk" style="--d:.5s" />
				<div class="blk" style="--d:.9s" />
				<div class="blk" style="--d:1.3s" />
			</div>
			<div class="foot3">
				<div class="ln3">
					<i class="blk" style="--d:1.7s" />
					<i class="blk" style="--d:1.9s" />
				</div>
				<div class="btn3" />
			</div>
			<span class="done">Published ✓</span>
		</div>
		<svg class="cur2" viewBox="0 0 20 20" aria-hidden="true"
			><path
				d="M3 2 L3 15 L7 11.5 L9.8 17 L12 16 L9.3 10.6 L14.5 10.4Z"
				fill="#1d2a2b"
				stroke="#fff"
				stroke-width="1.2"
				stroke-linejoin="round"
			/></svg
		>
	</div>
{/if}
