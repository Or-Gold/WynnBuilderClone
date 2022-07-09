from urllib.request import urlopen
import json

URL = "https://api.wynncraft.com/public_api.php?action=itemDB&category=all"

db = json.loads(urlopen(URL).read().decode('utf-8')).get('items')

TYPES = ["Helmet", "Chestplate", "Leggings", "Boots", "Ring", "Bracelet", "Necklace", "weapon"]
CLEANUP_VALUE_ENTRIES = [0, '0-0', None]

def isClean(v):
    return (v not in CLEANUP_VALUE_ENTRIES)

def isInType(item, type):
    return (item.get("type") == type) or (item.get("category") == type ) or (item.get("accessoryType") == type)

new_dict = {}
for type in TYPES:
    new_dict[type] = {}
    i = 1
    for item in db:
        if isInType(item, type):
            new_dict[type][item["name"]] = {
                    k: v for k,v in item.items() if (isClean(v))
                    }
            new_dict[type][item["name"]]["id"] = i;
            i += 1

with open('itemDB_pretty.json', 'w') as outfile:
    json.dump(new_dict, outfile, indent=4);

with open('itemDB.json', 'w') as outfile:
    json.dump(new_dict, outfile);
