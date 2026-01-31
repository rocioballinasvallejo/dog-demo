/**
 * Presentation Layer - UI State
 * Define el estado de la interfaz de usuario
 */

import { DogEntity } from '../../domain/entities/DogEntity';

export interface DogUiState {
  dog: DogEntity | null;
  isLoading: boolean;
  error: string | null;
}
