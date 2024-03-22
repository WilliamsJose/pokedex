import { IPokemonType } from '.';
import { IPokemonAbility } from './IPokemonAbility';
import { IPokemonMove } from './IPokemonMoves';
import { IPokemonStats } from './IPokemonStats';

export interface IPokemon {
  id: number;
  name: string;
  is_default: boolean;
  height: number;
  weight: number;
  abilities: IPokemonAbility[];
  stats: IPokemonStats[];
  moves: IPokemonMove[];
  types: IPokemonType[];
  order: number;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}
