const DUMMY_POKEMONS = [
  {
    id: 'p1',
    name: 'Bulbasaur',
    imageUrl:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    category: 'Seed',
    types: ['Grass', 'Poison'],
  },
  {
    id: 'p2',
    name: 'Charizard',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    category: 'Flame',
    types: ['Fire', 'Flying'],
  },
  {
    id: 'p3',
    name: 'Blastoise',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    category: 'Shellfish',
    types: ['Water'],
  },
  {
    id: 'p4',
    name: 'Caterpie',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
    category: 'Worm',
    types: ['Bug'],
  },
  {
    id: 'p5',
    name: 'Pikachu',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    category: 'Mouse',
    types: ['Electric'],
  },
  {
    id: 'p6',
    name: 'Butterfree',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    category: 'Butterfly',
    types: ['Bug', 'Flying'],
  },
  {
    id: 'p7',
    name: 'Arbok',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
    category: 'Cobra',
    types: ['Poison'],
  },
  {
    id: 'p8',
    name: 'Squirtle',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    category: 'Tiny Turtle',
    types: ['Water'],
  },
  {
    id: 'p9',
    name: 'Metapod',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
    category: 'Cocoon',
    types: ['Bug'],
  },
  {
    id: 'p10',
    name: 'Sandshrew',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png',
    category: 'Mouse',
    types: ['Ground'],
  },
  {
    id: 'p11',
    name: 'Vulpix',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
    category: 'Fox',
    types: ['Fire'],
  },
  {
    id: 'p12',
    name: 'Jigglypuff',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
    category: 'Ballon',
    types: ['Fairy', 'Normal'],
  },
  {
    id: 'p13',
    name: 'Psyduck',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
    category: 'Duck',
    types: ['Water'],
  },
  {
    id: 'p14',
    name: 'Zubat',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png',
    category: 'Bat',
    types: ['Poison', 'Flying'],
  },
  {
    id: 'p15',
    name: 'Meowth',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
    category: 'Scratch Cat',
    types: ['Normal'],
  },
  {
    id: 'p16',
    name: 'Poliwag',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
    category: 'Tadpole',
    types: ['Water'],
  },
  {
    id: 'p17',
    name: 'Diglett',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png',
    category: 'Mole',
    types: ['Ground'],
  },
  {
    id: 'p18',
    name: 'Machoke',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png',
    category: 'Superpower',
    types: ['Fighting'],
  },
  {
    id: '19',
    name: 'Mew',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
    category: 'New Species',
    types: ['Psychic'],
  },
  {
    id: '20',
    name: 'Mewtwo',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
    category: 'Genetic',
    types: ['Psychic'],
  },
];

module.exports = (req, res) => {
  const num = Math.round(Math.random() * 7);
  const pokemonsToSend = [];
  for (let i = 0; i < num; i++) {
    const index = Math.round(Math.random() * (DUMMY_POKEMONS.length - 1));
    pokemonsToSend.push(DUMMY_POKEMONS[index]);
  }

  return res.status(200).json([...new Set(pokemonsToSend)]);
};
