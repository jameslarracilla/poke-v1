const typeColors: { [key: string]: string } = {
  Normal: '#A8A878',
  Fire: '#F08030',
  Water: '#6890F0',
  Grass: '#78C850',
  Electric: '#F8D030',
  Ice: '#98D8D8',
  Fighting: '#C03028',
  Poison: '#A040A0',
  Ground: '#E0C068',
  Flying: '#A890F0',
  Psychic: '#F85888',
  Bug: '#A8B820',
  Rock: '#B8A038',
  Ghost: '#705898',
  Dark: '#705848',
  Dragon: '#7038F8',
  Steel: '#B8B8D0',
  Fairy: '#F0B6BC',
};

export const getColorByType = (pokeType: string) => typeColors[pokeType];
