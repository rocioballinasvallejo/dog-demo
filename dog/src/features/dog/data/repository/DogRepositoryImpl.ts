/**
 * Data Layer - Repository Implementation
 * Implementa la interfaz del dominio y maneja las llamadas a la API
 */

import { DogRepository } from '../../domain/repositories/DogRepository';
import { DogEntity } from '../../domain/entities/DogEntity';
import { ApiConfig } from '../../../../core/network/ApiConfig';
import { DogApiResponseDto } from '../dto/DogApiResponseDto';
import { DogMapper } from '../mapper/DogMapper';

export class DogRepositoryImpl implements DogRepository {
  private readonly endpoint = `${ApiConfig.DOG_API_BASE_URL}/breeds/image/random`;

  async getRandomDog(): Promise<DogEntity> {
    try {
      const dto = await ApiConfig.fetchJson<DogApiResponseDto>(this.endpoint);
      
      if (dto.status !== 'success') {
        throw new Error('La API no devolvió un estado exitoso');
      }

      // Mapear DTO a Entidad de Dominio
      return DogMapper.toDomain(dto);
    } catch (error) {
      console.error('Error en DogRepositoryImpl:', error);
      throw new Error('No se pudo obtener la imagen del perro');
    }
  }
}
