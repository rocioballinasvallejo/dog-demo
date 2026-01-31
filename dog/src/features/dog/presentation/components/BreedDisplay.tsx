/**
 * Presentation Layer - Component
 * Componente: Muestra la raza del perro
 */

import React from 'react';

interface BreedDisplayProps {
  breed: string;
  isRevealed: boolean;
}

export const BreedDisplay: React.FC<BreedDisplayProps> = ({ breed, isRevealed }) => {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 border-2 border-gray-700 shadow-lg">
      <div className="text-center">
        <p className="text-gray-400 text-sm mb-2 font-semibold">RAZA DEL PERRO</p>
        
        <div className="min-h-[60px] flex items-center justify-center">
          {isRevealed ? (
            <h2 className="text-3xl font-bold text-white animate-in fade-in zoom-in duration-300">
              🐕 {breed}
            </h2>
          ) : (
            <div className="flex gap-2">
              {Array.from({ length: Math.min(breed.length, 15) }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
