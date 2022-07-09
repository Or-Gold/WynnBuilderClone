<script type="ts">
	import ItemField from './ItemField.svelte';
	import PowderField from './PowderField.svelte';
	import type { ItemDataBase } from '$lib/types/dbTypes';
    import { gearStore } from '$lib/stores/GearStore';

	export let db: ItemDataBase;
</script>

<div class="grid grid-cols-2 gap-4 mt-4">
	{#each gearStore as { itemStore, powderStore, name }}
		<ItemField {name} store={itemStore} inputs={db[name]} />
		{#if powderStore !== undefined}
			<PowderField store={powderStore} />
		{/if}
	{/each}
</div>
