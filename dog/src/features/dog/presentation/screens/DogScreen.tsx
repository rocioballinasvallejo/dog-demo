/**
 * Presentation Layer - Screen
 * Pantalla principal de la feature Dog
 */

import React, { useEffect } from 'react';
import { Shuffle } from 'lucide-react';
import { useDogViewModel } from '../viewmodel/DogViewModel';
import { DogModule } from '../../di/DogModule';
import { DogImageCard } from '../components/DogImageCard';
import { BreedDisplay } from '../components/BreedDisplay';
import { ErrorMessage } from '../components/ErrorMessage';

export const DogScreen: React.FC = () => {
  // Inyección de dependencias
  const getRandomDogUseCase = DogModule.provideGetRandomDogUseCase();
  
  // ViewModel
  const { state, loadRandomDog } = useDogViewModel(getRandomDogUseCase);

  // Cargar un perro al montar el componente
  useEffect(() => {
    loadRandomDog();
  }, [loadRandomDog]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4 py-8">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">🐕 Dog Breed App</h1>
          <p className="text-gray-300 text-sm">Descubre diferentes razas de perros</p>
        </div>

        {/* Main Card */}
        <div className="bg-gray-800 rounded-3xl shadow-2xl p-6 border border-gray-700 space-y-6">
          
          {/* Error Message */}
          {state.error && (
            <ErrorMessage message={state.error} />
          )}

          {/* Dog Image */}
          {state.isLoading || state.dog ? (
            <DogImageCard 
              imageUrl={state.dog?.imageUrl || ''} 
              isLoading={state.isLoading}
            />
          ) : null}

          {/* Breed Display - Siempre visible */}
          {state.dog && (
            <BreedDisplay 
              breed={state.dog.breed} 
              isRevealed={true}
            />
          )}

          {/* Botón Nuevo Perro con degradado */}
          <button
            onClick={loadRandomDog}
            disabled={state.isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-3"
          >
            {state.isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                <span>Cargando...</span>
              </>
            ) : (
              <>
                <Shuffle className="w-6 h-6" />
                <span>Nuevo Perro</span>
              </>
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-400 text-xs">
            Powered by Dog CEO API
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Arquitectura: Clean Architecture + MVVM
          </p>
        </div>
      </div>
    </div>
  );
};
