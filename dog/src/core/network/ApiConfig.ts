/**
 * Core - Network Layer
 * Configuración base para las llamadas HTTP
 */

export class ApiConfig {
  static readonly DOG_API_BASE_URL = 'https://dog.ceo/api';
  static readonly TIMEOUT = 10000; // 10 segundos

  /**
   * Wrapper genérico para llamadas fetch con manejo de errores
   */
  static async fetchJson<T>(url: string): Promise<T> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.TIMEOUT);

      const response = await fetch(url, {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('La solicitud tardó demasiado tiempo');
        }
        throw error;
      }
      throw new Error('Error desconocido en la red');
    }
  }
}
