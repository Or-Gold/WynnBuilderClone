<script context="module" lang="ts">
	export async function load({ fetch }: LoadEvent) {
		const url = 'itemDB.json';
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				db: response.ok && (await response.json())
			}
		};
	}
</script>

<script type="ts">
	import DisplayContainer from '$lib/components/displayCards/displayContainer.svelte';
	import InputContainer from '$lib/components/inputs/InputContainer.svelte';
	import type { ItemDataBase } from '$lib/types/dbTypes';
	import type { LoadEvent } from '@sveltejs/kit';

	export let db: ItemDataBase;
</script>

<svelte:head>
	<title>Wynnbuilder</title>
</svelte:head>

<body class="bg-blue-400">
	<div class="mt-4">
		<h1 class="text-white text-center text-4xl">Wynnbuilder Clone</h1>
		<h2 class="text-white text-center text-xl">Made with Svelte</h2>
	</div>
	<div class="flex justify-center">
		<InputContainer {db} />
	</div>
	<div>
		<DisplayContainer {db} />
	</div>
</body>
