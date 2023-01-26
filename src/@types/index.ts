export interface Pokemon {
  id: string;
  name: string;
  category: string;
  types: string[];
  imageUrl: string;
}

export interface UserPokemon extends Pokemon {
  quantity: number;
}

export interface LoginState {
  id: string;
  name: string;
  lastname: string;
  username: string;
  isLogged: boolean;
}
