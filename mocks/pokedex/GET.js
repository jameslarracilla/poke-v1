const DUMMY_POKEMONS = [
  {
    id: 'p3',
    name: 'Blastoise',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    category: 'Shellfish',
    types: ['Water'],
    quantity: 1,
  },
  {
    id: 'p4',
    name: 'Caterpie',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
    category: 'Worm',
    types: ['Bug'],
    quantity: 2,
  },
  {
    id: 'p5',
    name: 'Pikachu',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    category: 'Mouse',
    types: ['Electric'],
    quantity: 3,
  },
  {
    id: '20',
    name: 'Mewtwo',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
    category: 'Genetic',
    types: ['Psychic'],
    quantity: 1,
  },
];

module.exports = (req, res) => {
  return res.status(200).json([...new Set(DUMMY_POKEMONS)]);
};
