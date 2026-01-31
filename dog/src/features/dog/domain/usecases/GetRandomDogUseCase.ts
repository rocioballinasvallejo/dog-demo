/**
 * Domain Layer - Use Case
 * Caso de uso que encapsula la lógica de negocio
 */

import { DogRepository } from '../repositories/DogRepository';
import { DogEntity } from '../entities/DogEntity';

export class GetRandomDogUseCase {
  constructor(private repository: DogRepository) {}

  async execute(): Promise<DogEntity> {
    return await this.repository.getRandomDog();
  }
}
