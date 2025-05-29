import { QueryClient } from '@tanstack/react-query';
import type { ProductDetails } from 'src/types/ProductDetailsType';

export const queryClient = new QueryClient();

export interface DevicesResponse {
  devices: ProductDetails[];
}

export class FetchProductsError extends Error {
  code?: number;
  info?: unknown;
}

export async function fetchProductsData(): Promise<DevicesResponse> {
  const url = 'https://static.ui.com/fingerprint/ui/public.json';
  const response = await fetch(url);

  if (!response.ok) {
    const error = new FetchProductsError('An error occurred while fetching the devices');
    error.code = response.status;
    try {
      error.info = await response.json();
    } catch {
      error.info = undefined;
    }
    throw error;
  }

  const responce = (await response.json()) as DevicesResponse;
  return responce;
}