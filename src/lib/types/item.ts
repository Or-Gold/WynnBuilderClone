export class Item {
    name: string;
    displayName?: string;
    tier: Tier = Tier.Normal;
    set: string | null = null;
    sockets: number = 0;
    typ?: ItemType;
    armorType?: ArmorType;
    armorColor?: RGBColor;
    addedLore: string | null = null;
    material?: string;
    dropType?: DropType;
    restrictions?: Restrictions;
    damage?: DamageRange<DamageType.Neutral>;
    fireDamage?: DamageRange<DamageType.Fire>;
    waterDamage?: DamageRange<DamageType.Water>;
    airDamage?: DamageRange<DamageType.Air> ;
    thunderDamage?: DamageRange<DamageType.Thunder>;
    earthDamage?: DamageRange<DamageType.Earth>;
    attackSpeed?: AttackSpeed;
    health?: number;
    fireDefense?: number;
    waterDefense?: number;
    airDefense?: number;
    thunderDefense?: number;
    earthDefense?: number;
    level: number = 0;
    quest: string | null = null;
    classRequirement: Class | null = null;
    strength: number = 0;
    dexterity: number = 0;
    intelligence: number = 0;
    agility: number = 0;
    defense: number = 0;
    healthRegen?: number;
    manaRegen?: number;
    spellDamage?: Percentage;
    damageBonus?: Percentage;
    lifeSteal?: number;
    manaSteal?: number;
    xpBonus?: Percentage;
    lootBonus?: Percentage;
    reflection?: Percentage;
    strengthPoints?: number;
    dexterityPoints?: number;
    intelligencePoints?: number;
    agilityPoints?: number;
    defensePoints?: number;
    thorns?: Percentage;
    exploding?: Percentage;
    speed?: number;
    attackSpeedBonus?: number;
    poison?: number;
    healthBonus?: number;
    soulPoints?: Percentage;
    emeraldStealing?: Percentage;
    healthRegenRaw?: number;
    spellDamageRaw?: number;
    damageBonusRaw?: number;
    bonusFireDamage?: Percentage;
    bonusWaterDamage?: Percentage;
    bonusAirDamage?: Percentage;
    bonusThunderDamage?: Percentage;
    bonusEarthDamage?: Percentage
    bonusFireDefense?: Percentage;
    bonusWaterDefense?: Percentage;
    bonusAirDefense?: Percentage;
    bonusThunderDefense?: Percentage;
    bonusEarthDefense?: Percentage;
    identified?: boolean;
    skin: string = '';
    category: Category;

    constructor(name: string, category: Category) {
        this.name = name;
        this.category = category;
    }
}

class Range {
    min: number;
    max: number;

    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }

    getMin(): number { return this.min; }

    getMax(): number { return this.max }

    getRange(): [number, number] { return [this.min, this.max] }

    getAverage(): number { return (this.getMin() + this.getMax()) / 2 }

}

class DamageRange<DamageType> extends Range {
    typ: DamageType;

    constructor(min: number, max: number, typ: DamageType) {
        super(min, max);
        this.typ = typ;
    }

    getType() {
        return this.typ;
    }
}

class RGBColor {
    r: number;
    g: number;
    b: number;
    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

class Percentage {
    baseNum: number;

    constructor(baseNum: number) {
        this.baseNum = baseNum;
    }

    asFloat(): number { return this.baseNum / 100; }

    asInt(): number { return this.baseNum; }
}

enum Tier { Normal, Unique, Rare, Set, Legenary, Mythic }
enum ItemType { Helmet, Chestplate, Leggings, Boots, Wand, Dagger, Spear, Bow, Relik, Ring, Bracelet, Necklace }
enum ArmorType { Diamond, Iron, Leather, Chain, Golden, }
enum DropType { Never, Lootchest, Dungeon }
enum Restrictions { Untradable, Quest }
enum DamageType { Neutral, Earth, Thunder, Water, Fire, Air }
enum AttackSpeed { SuperSlow, VerySlow, Slow, Normal, Fast, VeryFast, SuperFast }
enum Class { Assassin, Archer, Warrior, Mage, Shaman }
enum Category { Armor, Weapon, Accessory }

