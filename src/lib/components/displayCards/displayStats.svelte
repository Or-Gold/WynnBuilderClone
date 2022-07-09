<script lang="ts">
	import type { ItemObject } from '$lib/types/dbTypes';

	export let input: ItemObject;
</script>

<div class="">
	{#if input !== undefined}
		{#each Object.entries(input) as [key, value]}
			<div class="grid grid-cols-3 mb-5 grow text-center">
				<div>{value < 0 ? Math.round(value * 0.7) : Math.round(value * 0.3)}</div>
				<div>{key}</div>
				<div>{Math.round(value * 1.3)}</div>
			</div>
		{/each}
	{/if}
</div>
