/**
 * Core - Dependency Injection
 * Contenedor global de la aplicación
 * Aquí se pueden registrar dependencias compartidas entre features
 */

export class AppContainer {
  private static instance: AppContainer;

  private constructor() {
    // Constructor privado para Singleton
  }

  static getInstance(): AppContainer {
    if (!AppContainer.instance) {
      AppContainer.instance = new AppContainer();
    }
    return AppContainer.instance;
  }

  /**
   * Aquí se pueden agregar providers globales como:
   * - Logger
   * - Analytics
   * - Storage
   * etc.
   */
}
