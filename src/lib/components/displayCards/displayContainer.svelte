<script lang="ts">
	import { gearStore } from '$lib/stores/GearStore';
	import type { ItemDataBase } from '$lib/types/dbTypes';
	import DisplayCard from './displayCard.svelte';

	export let db: ItemDataBase;
</script>

<div class="flex flex-wrap m-20">
	{#each gearStore as { name, itemStore, powderStore }}
		<DisplayCard inputs={db[name]} {name} {itemStore} {powderStore} />
	{/each}
</div>
