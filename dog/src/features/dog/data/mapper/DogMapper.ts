/**
 * Data Layer - Mapper
 * Transforma DTOs (datos de la API) a Entidades de Dominio
 */

import { DogApiResponseDto } from '../dto/DogApiResponseDto';
import { DogEntity } from '../../domain/entities/DogEntity';

export class DogMapper {
  /**
   * Extrae el nombre de la raza de la URL de la imagen
   * Ejemplo: "https://images.dog.ceo/breeds/poodle/n02113712_1438.jpg" -> "Poodle"
   */
  private static extractBreedFromUrl(imageUrl: string): string {
    try {
      const breedMatch = imageUrl.match(/\/breeds\/([^\/]+)\//);
      
      if (breedMatch && breedMatch[1]) {
        const breed = breedMatch[1]
          .replace(/-/g, ' ')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        return breed;
      }
      
      return 'Raza desconocida';
    } catch (error) {
      return 'Raza desconocida';
    }
  }

  /**
   * Convierte DogApiResponseDto a DogEntity
   */
  static toDomain(dto: DogApiResponseDto): DogEntity {
    return {
      imageUrl: dto.message,
      breed: this.extractBreedFromUrl(dto.message),
    };
  }
}
