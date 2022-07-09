import { writable } from 'svelte/store';

const helmet = writable('');
const chestplate = writable('');
const leggings = writable('');
const boots = writable('');
const ring_1 = writable('');
const ring_2 = writable('');
const bracelet = writable('');
const necklace = writable('');
const weapon = writable('');

const helmet_powders = writable('');
const chestplate_powders = writable('');
const leggings_powders = writable('');
const boots_powders = writable('');
const weapon_powders = writable('');

export const gearStore = [

    { name: 'Helmet',     itemStore: helmet,     powderStore: helmet_powders },
    { name: 'Chestplate', itemStore: chestplate, powderStore: chestplate_powders },
    { name: 'Leggings',   itemStore: leggings,   powderStore: leggings_powders },
    { name: 'Boots',      itemStore: boots,      powderStore: boots_powders },
    { name: 'Ring',       itemStore: ring_1,     powderStore: undefined },
    { name: 'Ring',       itemStore: ring_2,     powderStore: undefined },
    { name: 'Bracelet',   itemStore: bracelet,   powderStore: undefined },
    { name: 'Necklace',   itemStore: necklace,   powderStore: undefined },
    { name: 'weapon',     itemStore: weapon,     powderStore: weapon_powders }
];
