<script lang="ts">
    import type { ItemObject } from "$lib/types/dbTypes";

    export let name: string;
    export let input: ItemObject;
    
    const IMG_DIR = "armorTextures";

    $: material = (input !== undefined) ? input.armorType : "default";
    $: image_source = `${IMG_DIR}/${material?.toLowerCase()}_${name.toLowerCase()}.png`;
</script>

<div class="flex flex-col items-center text-2xl capitalize m-5 text-center">
    <div class="m-4">{(input === undefined) ? name : input.name}</div>
    <img class="object-cover w-8 h-8" src={image_source} alt="" />
</div>
