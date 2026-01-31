/**
 * Dependency Injection - Dog Module
 * Proporciona las dependencias específicas de la feature Dog
 */

import { DogRepository } from '../domain/repositories/DogRepository';
import { DogRepositoryImpl } from '../data/repository/DogRepositoryImpl';
import { GetRandomDogUseCase } from '../domain/usecases/GetRandomDogUseCase';

export class DogModule {
  private static dogRepository: DogRepository | null = null;
  private static getRandomDogUseCase: GetRandomDogUseCase | null = null;

  /**
   * Proporciona la instancia del repositorio (Singleton)
   */
  static provideDogRepository(): DogRepository {
    if (!this.dogRepository) {
      this.dogRepository = new DogRepositoryImpl();
    }
    return this.dogRepository;
  }

  /**
   * Proporciona la instancia del caso de uso
   */
  static provideGetRandomDogUseCase(): GetRandomDogUseCase {
    if (!this.getRandomDogUseCase) {
      this.getRandomDogUseCase = new GetRandomDogUseCase(
        this.provideDogRepository()
      );
    }
    return this.getRandomDogUseCase;
  }
}
