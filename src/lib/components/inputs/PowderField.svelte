<script type="ts">
	import type { Writable } from 'svelte/store';

	export let store: Writable<string>;

    if (store === undefined) {
        alert("Something went wrong... could not retrive powder store!")
    }
</script>

<input
	class="placeholder:capitalize outline-none focus:bg-blue-200 hover:bg-blue-200 transition ease-in-out bg-cyan-50 cursor-pointer rounded-sm h-8 indent-4"
	placeholder="Powders"
	bind:value={$store}
/>

