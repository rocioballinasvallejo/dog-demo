/**
 * Presentation Layer - Component
 * Componente: Muestra mensajes de error
 */

import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-900/50 border-2 border-red-500 rounded-2xl p-4 flex items-start gap-3">
      <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
      <div>
        <h3 className="text-red-500 font-bold mb-1">Error</h3>
        <p className="text-red-300 text-sm">{message}</p>
      </div>
    </div>
  );
};
