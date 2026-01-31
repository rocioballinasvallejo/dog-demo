/**
 * Data Layer - DTO (Data Transfer Object)
 * Representa la estructura exacta de la respuesta de la API
 */

export interface DogApiResponseDto {
  message: string; // URL de la imagen
  status: string;  // "success" o "error"
}
