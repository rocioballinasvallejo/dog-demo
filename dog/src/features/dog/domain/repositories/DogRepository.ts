/**
 * Domain Layer - Repository Interface
 * Contrato que debe implementar la capa de datos
 */

import { DogEntity } from '../entities/DogEntity';

export interface DogRepository {
  getRandomDog(): Promise<DogEntity>;
}
