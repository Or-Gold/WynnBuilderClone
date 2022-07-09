<script type="ts">
	import type { ItemMap } from '$lib/types/dbTypes';
	import type { Writable } from 'svelte/store';

	export let name: string;
	export let store: Writable<string>;
	export let inputs: ItemMap;
</script>

<input
	class="placeholder:capitalize outline-none focus:bg-blue-200 hover:bg-blue-200 transition ease-in-out bg-cyan-50 cursor-pointer rounded-sm h-8 indent-4"
	placeholder={name}
	bind:value={$store}
	list={name}
/>

<datalist id={name}>
	{#each Object.keys(inputs) as input}
		<option value={input} />
	{/each}
</datalist>
