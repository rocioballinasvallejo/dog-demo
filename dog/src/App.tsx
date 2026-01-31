/**
 * Punto de entrada principal de la aplicación
 * 
 * Arquitectura: Clean Architecture + MVVM
 * 
 * Estructura de carpetas:
 * 
 * features/dog/
 * ├── data/           # Repositories, DTOs y Mappers
 * │   ├── dto/        # Data Transfer Objects (respuestas de la API)
 * │   ├── mapper/     # Transformación de DTOs a Entidades
 * │   └── repository/ # Implementación de repositorios
 * ├── domain/         # Entidades de negocio y Use Cases
 * │   ├── entities/   # Modelos de dominio puros
 * │   ├── repositories/ # Interfaces de repositorios
 * │   └── usecases/   # Casos de uso (lógica de negocio)
 * ├── di/             # Inyección de dependencias (DogModule)
 * └── presentation/   # UI State, ViewModels y Componentes
 *     ├── state/      # Estados de UI
 *     ├── viewmodel/  # ViewModels (lógica de presentación)
 *     ├── screens/    # Pantallas principales
 *     └── components/ # Componentes reutilizables
 * 
 * core/
 * ├── di/             # AppContainer global
 * └── network/        # Configuración de API base
 */

import { DogScreen } from './features/dog/presentation/screens/DogScreen';

export default function App() {
  return <DogScreen />;
}
