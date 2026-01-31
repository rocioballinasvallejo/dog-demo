/**
 * Presentation Layer - ViewModel
 * Maneja el estado de la UI y coordina los casos de uso
 */

import { useState, useCallback } from 'react';
import { GetRandomDogUseCase } from '../../domain/usecases/GetRandomDogUseCase';
import { DogUiState } from '../state/DogUiState';

export const useDogViewModel = (getRandomDogUseCase: GetRandomDogUseCase) => {
  const [state, setState] = useState<DogUiState>({
    dog: null,
    isLoading: false,
    error: null,
  });

  /**
   * Carga un nuevo perro aleatorio
   */
  const loadRandomDog = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const dogEntity = await getRandomDogUseCase.execute();
      
      setState({
        dog: dogEntity,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        dog: null,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Error desconocido',
      });
    }
  }, [getRandomDogUseCase]);

  /**
   * Limpia el estado
   */
  const clearState = useCallback(() => {
    setState({
      dog: null,
      isLoading: false,
      error: null,
    });
  }, []);

  return {
    state,
    loadRandomDog,
    clearState,
  };
};
