export declare type ItemDataBase = {
    [key: string]: ItemMap;
    Helmet: ItemMap;
    Chestplate: ItemMap;
    Leggings: ItemMap;
    Boots: ItemMap;
    Ring: ItemMap;
    Bracelet: ItemMap;
    Necklace: ItemMap;
    Weaopn: ItemMap;
}

export declare type ItemMap = {
    [key: string]: ItemObject
}

export declare type ItemObject = {
    [key: string]: string | number | null | boolean
    name?: string;
    displayName?: string;
    tier?: string;
    set?: string | null;
    sockets?: number;
    type?: string;
    armorType?: string;
    armorColor?: string;
    addedLore?: string | null;
    material?: string;
    dropType?: string;
    restrictions?: string;
    damage?: string;
    fireDamage?: string;
    waterDamage?: string;
    airDamage?: string;
    thunderDamage?: string;
    earthDamage?: string;
    attackSpeed?: string;
    health?: number;
    fireDefense?: number;
    waterDefense?: number;
    airDefense?: number;
    thunderDefense?: number;
    earthDefense?: number;
    level?: number;
    quest?: string | null;
    classRequirement?: string | null;
    strength?: number;
    dexterity?: number;
    intelligence?: number;
    agility?: number;
    defense?: number;
    healthRegen?: number;
    manaRegen?: number;
    spellDamage?: number;
    damageBonus?: number;
    lifeSteal?: number;
    manaSteal?: number;
    xpBonus?: number;
    lootBonus?: number;
    reflection?: number;
    strengthPoints?: number;
    dexterityPoints?: number;
    intelligencePoints?: number;
    agilityPoints?: number;
    defensePoints?: number;
    thorns?: number;
    exploding?: number;
    speed?: number;
    attackSpeedBonus?: number;
    poison?: number;
    healthBonus?: number;
    soulPoints?: number;
    emeraldStealing?: number;
    healthRegenRaw?: number;
    spellDamageRaw?: number;
    damageBonusRaw?: number;
    bonusFireDamage?: number;
    bonusWaterDamage?: number;
    bonusAirDamage?: number;
    bonusThunderDamage?: number;
    bonusEarthDamage?: number;
    bonusFireDefense?: number;
    bonusWaterDefense?: number;
    bonusAirDefense?: number;
    bonusThunderDefense?: number;
    bonusEarthDefense?: number;
    accessoryType?: string;
    identified?: boolean;
    skin?: string
    category?: string
    id: string
}

