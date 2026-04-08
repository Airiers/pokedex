const pokemons = [
  { id: 1, nom_fr: "Bulbizarre", nom_en: "Bulbasaur" },
  { id: 2, nom_fr: "Herbizarre", nom_en: "Ivysaur" },
  { id: 3, nom_fr: "Florizarre", nom_en: "Venusaur" },
  { id: 4, nom_fr: "Salamèche", nom_en: "Charmander" },
  { id: 5, nom_fr: "Reptincel", nom_en: "Charmeleon" },
  { id: 6, nom_fr: "Dracaufeu", nom_en: "Charizard" },
  { id: 7, nom_fr: "Carapuce", nom_en: "Squirtle" },
  { id: 8, nom_fr: "Carabaffe", nom_en: "Wartortle" },
  { id: 9, nom_fr: "Tortank", nom_en: "Blastoise" },
  { id: 10, nom_fr: "Chenipan", nom_en: "Caterpie" },
  { id: 11, nom_fr: "Chrysacier", nom_en: "Metapod" },
  { id: 12, nom_fr: "Papilusion", nom_en: "Butterfree" },
  { id: 13, nom_fr: "Aspicot", nom_en: "Weedle" },
  { id: 14, nom_fr: "Coconfort", nom_en: "Kakuna" },
  { id: 15, nom_fr: "Dardargnan", nom_en: "Beedrill" },
  { id: 16, nom_fr: "Roucool", nom_en: "Pidgey" },
  { id: 17, nom_fr: "Roucoups", nom_en: "Pidgeotto" },
  { id: 18, nom_fr: "Roucarnage", nom_en: "Pidgeot" },
  { id: 19, nom_fr: "Rattata", nom_en: "Rattata" },
  { id: 20, nom_fr: "Rattatac", nom_en: "Raticate" },
  { id: 21, nom_fr: "Piafabec", nom_en: "Spearow" },
  { id: 22, nom_fr: "Rapasdepic", nom_en: "Fearow" },
  { id: 23, nom_fr: "Abo", nom_en: "Ekans" },
  { id: 24, nom_fr: "Arbok", nom_en: "Arbok" },
  { id: 25, nom_fr: "Pikachu", nom_en: "Pikachu" },
  { id: 26, nom_fr: "Raichu", nom_en: "Raichu" },
  { id: 27, nom_fr: "Sabelette", nom_en: "Sandshrew" },
  { id: 28, nom_fr: "Sablaireau", nom_en: "Sandslash" },
  { id: 29, nom_fr: "Nidoran-m", nom_en: "Nidoran-m" },
  { id: 30, nom_fr: "Nidorina", nom_en: "Nidorina" },
  { id: 31, nom_fr: "Nidoqueen", nom_en: "Nidoqueen" },
  { id: 32, nom_fr: "Nidoran-f", nom_en: "Nidoran-f" },
  { id: 33, nom_fr: "Nidorino", nom_en: "Nidorino" },
  { id: 34, nom_fr: "Nidoking", nom_en: "Nidoking" },
  { id: 35, nom_fr: "Mélofée", nom_en: "Clefairy" },
  { id: 36, nom_fr: "Mélodelfe", nom_en: "Clefable" },
  { id: 37, nom_fr: "Goupix", nom_en: "Vulpix" },
  { id: 38, nom_fr: "Feunard", nom_en: "Ninetales" },
  { id: 39, nom_fr: "Rondoudou", nom_en: "Jigglypuff" },
  { id: 40, nom_fr: "Grodoudou", nom_en: "Wigglytuff" },
  { id: 41, nom_fr: "Nosferapti", nom_en: "Zubat" },
  { id: 42, nom_fr: "Nosferalto", nom_en: "Golbat" },
  { id: 43, nom_fr: "Mystherbe", nom_en: "Oddish" },
  { id: 44, nom_fr: "Ortide", nom_en: "Gloom" },
  { id: 45, nom_fr: "Rafflesia", nom_en: "Vileplume" },
  { id: 46, nom_fr: "Paras", nom_en: "Paras" },
  { id: 47, nom_fr: "Parasect", nom_en: "Parasect" },
  { id: 48, nom_fr: "Mimitoss", nom_en: "Venonat" },
  { id: 49, nom_fr: "Aéromite", nom_en: "Venomoth" },
  { id: 50, nom_fr: "Taupiqueur", nom_en: "Diglett" },
  { id: 51, nom_fr: "Triopikeur", nom_en: "Dugtrio" },
  { id: 52, nom_fr: "Miaouss", nom_en: "Meowth" },
  { id: 53, nom_fr: "Persian", nom_en: "Persian" },
  { id: 54, nom_fr: "Psykokwak", nom_en: "Psyduck" },
  { id: 55, nom_fr: "Akwakwak", nom_en: "Golduck" },
  { id: 56, nom_fr: "Férosinge", nom_en: "Mankey" },
  { id: 57, nom_fr: "Colossinge", nom_en: "Primeape" },
  { id: 58, nom_fr: "Caninos", nom_en: "Growlithe" },
  { id: 59, nom_fr: "Arcanin", nom_en: "Arcanine" },
  { id: 60, nom_fr: "Ptitard", nom_en: "Poliwag" },
  { id: 61, nom_fr: "Têtarte", nom_en: "Poliwhirl" },
  { id: 62, nom_fr: "Tartard", nom_en: "Poliwrath" },
  { id: 63, nom_fr: "Abra", nom_en: "Abra" },
  { id: 64, nom_fr: "Kadabra", nom_en: "Kadabra" },
  { id: 65, nom_fr: "Alakazam", nom_en: "Alakazam" },
  { id: 66, nom_fr: "Machoc", nom_en: "Machop" },
  { id: 67, nom_fr: "Machopeur", nom_en: "Machoke" },
  { id: 68, nom_fr: "Mackogneur", nom_en: "Machamp" },
  { id: 69, nom_fr: "Chétiflor", nom_en: "Bellsprout" },
  { id: 70, nom_fr: "Boustiflor", nom_en: "Weepinbell" },
  { id: 71, nom_fr: "Empiflor", nom_en: "Victreebel" },
  { id: 72, nom_fr: "Tentacool", nom_en: "Tentacool" },
  { id: 73, nom_fr: "Tentacruel", nom_en: "Tentacruel" },
  { id: 74, nom_fr: "Racaillou", nom_en: "Geodude" },
  { id: 75, nom_fr: "Gravalanch", nom_en: "Graveler" },
  { id: 76, nom_fr: "Grolem", nom_en: "Golem" },
  { id: 77, nom_fr: "Ponyta", nom_en: "Ponyta" },
  { id: 78, nom_fr: "Galopa", nom_en: "Rapidash" },
  { id: 79, nom_fr: "Ramoloss", nom_en: "Slowpoke" },
  { id: 80, nom_fr: "Flagadoss", nom_en: "Slowbro" },
  { id: 81, nom_fr: "Magnéti", nom_en: "Magnemite" },
  { id: 82, nom_fr: "Magnéton", nom_en: "Magneton" },
  { id: 83, nom_fr: "Canarticho", nom_en: "Farfetchd" },
  { id: 84, nom_fr: "Doduo", nom_en: "Doduo" },
  { id: 85, nom_fr: "Dodrio", nom_en: "Dodrio" },
  { id: 86, nom_fr: "Otaria", nom_en: "Seel" },
  { id: 87, nom_fr: "Lamantine", nom_en: "Dewgong" },
  { id: 88, nom_fr: "Tadmorv", nom_en: "Grimer" },
  { id: 89, nom_fr: "Grotadmorv", nom_en: "Muk" },
  { id: 90, nom_fr: "Kokiyas", nom_en: "Shellder" },
  { id: 91, nom_fr: "Crustabri", nom_en: "Cloyster" },
  { id: 92, nom_fr: "Fantominus", nom_en: "Gastly" },
  { id: 93, nom_fr: "Spectrum", nom_en: "Haunter" },
  { id: 94, nom_fr: "Ectoplasma", nom_en: "Gengar" },
  { id: 95, nom_fr: "Onix", nom_en: "Onix" },
  { id: 96, nom_fr: "Soporifik", nom_en: "Drowzee" },
  { id: 97, nom_fr: "Hypnomade", nom_en: "Hypno" },
  { id: 98, nom_fr: "Krabby", nom_en: "Krabby" },
  { id: 99, nom_fr: "Krabboss", nom_en: "Kingler" },
  { id: 100, nom_fr: "Voltorbe", nom_en: "Voltorb" },
  { id: 101, nom_fr: "Électrode", nom_en: "Electrode" },
  { id: 102, nom_fr: "Noeunoeuf", nom_en: "Exeggcute" },
  { id: 103, nom_fr: "Noadkoko", nom_en: "Exeggutor" },
  { id: 104, nom_fr: "Osselait", nom_en: "Cubone" },
  { id: 105, nom_fr: "Ossatueur", nom_en: "Marowak" },
  { id: 106, nom_fr: "Kicklee", nom_en: "Hitmonlee" },
  { id: 107, nom_fr: "Tygnon", nom_en: "Hitmonchan" },
  { id: 108, nom_fr: "Excelangue", nom_en: "Lickitung" },
  { id: 109, nom_fr: "Smogo", nom_en: "Koffing" },
  { id: 110, nom_fr: "Smogogo", nom_en: "Weezing" },
  { id: 111, nom_fr: "Rhinocorne", nom_en: "Rhyhorn" },
  { id: 112, nom_fr: "Rhinoféros", nom_en: "Rhydon" },
  { id: 113, nom_fr: "Leveinard", nom_en: "Chansey" },
  { id: 114, nom_fr: "Saquedeneu", nom_en: "Tangela" },
  { id: 115, nom_fr: "Kangourex", nom_en: "Kangaskhan" },
  { id: 116, nom_fr: "Hypotrempe", nom_en: "Horsea" },
  { id: 117, nom_fr: "Hypocéan", nom_en: "Seadra" },
  { id: 118, nom_fr: "Poissirène", nom_en: "Goldeen" },
  { id: 119, nom_fr: "Poissoroy", nom_en: "Seaking" },
  { id: 120, nom_fr: "Stari", nom_en: "Staryu" },
  { id: 121, nom_fr: "Staross", nom_en: "Starmie" },
  { id: 122, nom_fr: "M. Mime", nom_en: "Mr. Mime" },
  { id: 123, nom_fr: "Insécateur", nom_en: "Scyther" },
  { id: 124, nom_fr: "Lippoutou", nom_en: "Jynx" },
  { id: 125, nom_fr: "Élektek", nom_en: "Electabuzz" },
  { id: 126, nom_fr: "Magmar", nom_en: "Magmar" },
  { id: 127, nom_fr: "Scarabrute", nom_en: "Pinsir" },
  { id: 128, nom_fr: "Tauros", nom_en: "Tauros" },
  { id: 129, nom_fr: "Magicarpe", nom_en: "Magikarp" },
  { id: 130, nom_fr: "Léviator", nom_en: "Gyarados" },
  { id: 131, nom_fr: "Lokhlass", nom_en: "Lapras" },
  { id: 132, nom_fr: "Métamorph", nom_en: "Ditto" },
  { id: 133, nom_fr: "Évoli", nom_en: "Eevee" },
  { id: 134, nom_fr: "Aquali", nom_en: "Vaporeon" },
  { id: 135, nom_fr: "Voltali", nom_en: "Jolteon" },
  { id: 136, nom_fr: "Pyroli", nom_en: "Flareon" },
  { id: 137, nom_fr: "Porygon", nom_en: "Porygon" },
  { id: 138, nom_fr: "Amonita", nom_en: "Omanyte" },
  { id: 139, nom_fr: "Amonistar", nom_en: "Omastar" },
  { id: 140, nom_fr: "Kabuto", nom_en: "Kabuto" },
  { id: 141, nom_fr: "Kabutops", nom_en: "Kabutops" },
  { id: 142, nom_fr: "Ptéra", nom_en: "Aerodactyl" },
  { id: 143, nom_fr: "Ronflex", nom_en: "Snorlax" },
  { id: 144, nom_fr: "Artikodin", nom_en: "Articuno" },
  { id: 145, nom_fr: "Électhor", nom_en: "Zapdos" },
  { id: 146, nom_fr: "Sulfura", nom_en: "Moltres" },
  { id: 147, nom_fr: "Minidraco", nom_en: "Dratini" },
  { id: 148, nom_fr: "Draco", nom_en: "Dragonair" },
  { id: 149, nom_fr: "Dracolosse", nom_en: "Dragonite" },
  { id: 150, nom_fr: "Mewtwo", nom_en: "Mewtwo" },
  { id: 151, nom_fr: "Mew", nom_en: "Mew" },
];

function getRandomId() {
  return Math.floor(Math.random() * 151) + 1;
}

let id = 0;
let points = 0;
let complet = true;
let gameboy = true;
let tries = false;

const results = document.querySelector("#results");

function random() {
  results.style.display = "none";
  const pokemon_element = document.querySelector("#pokemon");
  if (complet) {
    pokemon_element.classList.remove("reveal");
  } else {
    pokemon_element.classList.add("reveal");
  }
  const name = document.querySelector("#name");
  name.innerText = "";
  name.style.display = "none";
  const image = document.querySelector("#image");
  id = getRandomId();
  const pokemon = pokemons[id - 1];
  if (gameboy) {
    let spriteName = pokemon.nom_en
      .toLowerCase()
      .replace(/\./g, "")
      .replace(/ /g, "-");
    image.src = `https://www.smogon.com/dex/media/sprites/rb/${spriteName}.png`;
  } else {
    image.src = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pokemon.id.toString().padStart(3, "0")}.png`;
  }
  image.alt = pokemon.nom_fr;
  image.style.verticalAlign = "middle";
}

function refresh() {
  const pokemon_element = document.querySelector("#pokemon");
  const pokemon = pokemons[id - 1];
  if (complet) {
    pokemon_element.classList.remove("reveal");
  } else {
    pokemon_element.classList.add("reveal");
  }
  if (gameboy) {
    let spriteName = pokemon.nom_en
      .toLowerCase()
      .replace(/\./g, "")
      .replace(/ /g, "-");
    image.src = `https://www.smogon.com/dex/media/sprites/rb/${spriteName}.png`;
  } else {
    image.src = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pokemon.id.toString().padStart(3, "0")}.png`;
  }
}

function reveal() {
  const pokemon_element = document.querySelector("#pokemon");
  pokemon_element.classList.add("reveal");
  const name = document.querySelector("#name");
  const pokemon = pokemons[id - 1];
  name.innerText = pokemon.nom_fr;
}

function toggle_complet() {
  complet = !complet;
  if (complet) {
    document.querySelector("#complet").innerText = "Image cachée";
  } else {
    document.querySelector("#complet").innerText = "Image révélée";
  }
  refresh();
}

function toggle_gameboy() {
  gameboy = !gameboy;
  if (gameboy) {
    document.querySelector("#gb").innerText = "Gameboy 1997";
  } else {
    document.querySelector("#gb").innerText = "Illustrations officielles";
  }
  refresh();
}

function toggle_tries() {
  tries = !tries;
  if (tries) {
    document.querySelector("#try").innerText = "Essais multiples";
  } else {
    document.querySelector("#try").innerText = "Du premier coup";
  }
}

function add_points() {
  if (complet) {
    points += 10;
  } else {
    points += 5;
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nom = document.querySelector("#input").value.trim().toLowerCase();

  if (nom !== "") {
    // Recherche du Pokémon par nom français ou anglais
    const pokemonValide = pokemons.find(
      (p) => p.nom_fr.toLowerCase() === nom || p.nom_en.toLowerCase() === nom,
    );
    const currentPokemon = pokemons[id - 1];
    const name = document.querySelector("#name");
    name.style.display = "block";
    audio = new Audio(
      `https://www.pokebip.com/audio/cris-sl/${pokemons[id - 1].id}.mp3`,
    );
    audio.play();

    if (pokemonValide && pokemonValide.id === currentPokemon.id) {
      add_points();
      results.innerText = "Gagné !";
      results.style.backgroundColor = "rgba(22, 117, 13, 0.8)";
    } else {
      if (Math.abs(pokemonValide?.id - id) === 1) {
        results.innerText = `Perdu ! C'était pas ${nom}, c'était l'autre !`;
      } else {
        results.innerText = `Perdu ! C'était un ${currentPokemon.nom_fr} !`;
      }
      results.style.backgroundColor = "rgba(117, 13, 13, 0.8)";
    }

    results.style.display = "flex";
    reveal();
    document.querySelector("#input").value = "";
  }
});

random();

document.querySelector("#new").addEventListener("click", () => {
  random();
});

document.querySelector("#complet").addEventListener("click", () => {
  toggle_complet();
});

document.querySelector("#gb").addEventListener("click", () => {
  toggle_gameboy();
});

document.querySelector("#try").addEventListener("click", () => {
  toggle_tries();
});
