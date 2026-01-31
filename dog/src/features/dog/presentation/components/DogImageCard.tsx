/**
 * Presentation Layer - Component
 * Componente: Tarjeta que muestra la imagen del perro
 */

import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

interface DogImageCardProps {
  imageUrl: string;
  isLoading?: boolean;
}

export const DogImageCard: React.FC<DogImageCardProps> = ({ imageUrl, isLoading = false }) => {
  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gray-700 shadow-2xl">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent"></div>
        </div>
      ) : (
        <ImageWithFallback
          src={imageUrl}
          alt="Imagen de perro aleatorio"
          className="w-full h-full object-cover"
        />
      )}
      
      {/* Efecto de brillo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};
