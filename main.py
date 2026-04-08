import random

types = {
    "Normal": {
        "super_effective": [],
        "not_very_effective": ["Rock"],
        "no_effect": ["Ghost"]
    },
    "Fire": {
        "super_effective": ["Grass", "Ice", "Bug"],
        "not_very_effective": ["Fire", "Water", "Rock"],
        "no_effect": []
    },
    "Water": {
        "super_effective": ["Fire", "Ground", "Rock"],
        "not_very_effective": ["Water", "Grass"],
        "no_effect": []
    },
    "Electric": {
        "super_effective": ["Water", "Flying"],
        "not_very_effective": ["Electric", "Grass"],
        "no_effect": ["Ground"]
    },
    "Grass": {
        "super_effective": ["Water", "Ground", "Rock"],
        "not_very_effective": ["Fire", "Grass", "Flying", "Bug"],
        "no_effect": []
    },
    "Ice": {
        "super_effective": ["Grass", "Ground", "Flying", "Dragon"],
        "not_very_effective": ["Fire", "Water"],
        "no_effect": []
    },
    "Fighting": {
        "super_effective": ["Normal", "Rock", "Ice"],
        "not_very_effective": ["Flying", "Poison", "Bug"],
        "no_effect": ["Ghost"]
    },
    "Poison": {
        "super_effective": ["Grass"],
        "not_very_effective": ["Poison", "Ground", "Rock"],
        "no_effect": []
    },
    "Ground": {
        "super_effective": ["Fire", "Electric", "Poison", "Rock"],
        "not_very_effective": ["Grass", "Bug"],
        "no_effect": ["Flying"]
    },
    "Flying": {
        "super_effective": ["Grass", "Fighting", "Bug"],
        "not_very_effective": ["Electric", "Rock"],
        "no_effect": []
    },
    "Psychic": {
        "super_effective": ["Fighting", "Poison"],
        "not_very_effective": ["Psychic"],
        "no_effect": []
    },
    "Bug": {
        "super_effective": ["Grass", "Poison"],
        "not_very_effective": ["Fire", "Fighting", "Flying", "Ghost"],
        "no_effect": []
    },
    "Rock": {
        "super_effective": ["Fire", "Ice", "Flying", "Bug"],
        "not_very_effective": ["Fighting", "Ground"],
        "no_effect": []
    },
    "Ghost": {
        "super_effective": ["Ghost"],
        "not_very_effective": ["Poison"],
        "no_effect": ["Normal", "Psychic"]
    },
    "Dragon": {
        "super_effective": ["Dragon"],
        "not_very_effective": [],
        "no_effect": []
    }
}

pokemon_1 = {
    "type":["Electric"],
    "level":5,
    "speed":10,
    "attack":7,
    "power":40,
    "attack_type":"Electric"
}

pokemon_2 = {
    "type":["Flying","Ground"],
    "level":5,
    "base_defense":40,
    "base_hp":40
}

stab = 1
for t in pokemon_1["type"]:
    if t == pokemon_1["attack_type"]:
        stab = 1.5

efficiency = 1
for t in pokemon_2["type"]:
    if t in types[pokemon_1["attack_type"]]["super_effective"]:
        print(f"C'est super efficace sur le type {t} !")
        efficiency *= 2
    elif t in types[pokemon_1["attack_type"]]["not_very_effective"]:
        print(f"Ce n'est pas très efficace sur le type {t}...")
        efficiency *= 0.5
    elif t in types[pokemon_1["attack_type"]]["no_effect"]:
        print(f"Les Pokémons de type {t} sont immunisés !")
        efficiency *= 0
    else:
        efficiency *= 1

if random.random() < (pokemon_1["speed"]/512):
    critic = 2
else:
    critic = 1

IV = random.randint(0, 31)
EV = 0
defense = ((2 * pokemon_2["base_defense"] + IV + EV // 4) / 100) * pokemon_2["level"] + 5
hp = int(((2 * pokemon_2["base_hp"] + IV + EV // 4) / 100) * pokemon_2["level"] + pokemon_2["level"] + 10)

damages = int(((((((2*pokemon_1["level"]+10)/250) * (pokemon_1["attack"]/defense) * (pokemon_1["power"]+2)) * stab) * efficiency) * critic) * random.uniform(0.85, 1.0))

hp_remaining = hp - damages
print(f"{damages} HP de dégâts")
print(f"{hp_remaining}/{hp} HP restant")

if hp_remaining <= 0:
    print("Le Pokémon adverse est K.O !")
elif hp_remaining < hp/2:
    print("Le Pokémon adverse est gravement affaibli !")