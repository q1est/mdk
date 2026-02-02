// src/shared/api/http.ts

const BASE_URL = import.meta.env.VITE_API_URL || '/api/v1';

export async function http<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    let message = 'API error';
    try {
      const error = await response.json();
      message = error?.message ?? message;
    } catch {}
    throw new Error(message);
  }

  return response.json();
}
