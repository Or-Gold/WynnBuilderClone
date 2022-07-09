<script lang="ts">
	import type { Writable } from 'svelte/store';
	import type { ItemMap } from '$lib/types/dbTypes';
    import DisplayHeader from './displayHeader.svelte';
    import DisplayReqs from './displayReqs.svelte';
    import DisplayEleDef from './displayEleDef.svelte';
    import DisplayStats from './displayStats.svelte';
    import DisplayFooter from './displayFooter.svelte';

	export let name: string;
	export let inputs: ItemMap;
	export let itemStore: Writable<string>;
	export let powderStore: Writable<string> | undefined;

	$: input = inputs[$itemStore];
</script>

<div class="flex flex-col basis-1/4 grow bg-blue-700 m-4 rounded-md bg-gradient-to-tl from-blue-700 to-blue-500 text-white">
    <DisplayHeader {input} {name} />
    <DisplayReqs />
    <DisplayEleDef />
    <DisplayStats {input}/>
    <DisplayFooter />
</div>
