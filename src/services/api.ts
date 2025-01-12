import axios, { AxiosError } from 'axios';
import { CryptoPrice, TrendingCoin } from '../types/crypto';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

const api = axios.create({
  baseURL: COINGECKO_API,
  timeout: 15000, // Increased timeout
  headers: {
    'Accept': 'application/json',
  }
});

const retryRequest = async (fn: () => Promise<any>, retries = 3, delay = 1000) => {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    
    if (error instanceof AxiosError && error.response?.status === 429) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return retryRequest(fn, retries - 1, delay * 2);
    }
    
    throw error;
  }
};

export const getCryptoPrice = async (id: string): Promise<CryptoPrice> => {
  try {
    const response = await retryRequest(() => 
      api.get(`/simple/price?ids=${id}&vs_currencies=inr,usd&include_24hr_change=true`)
    );
    if (!response.data[id]) {
      throw new Error('Cryptocurrency not found');
    }
    return response.data[id];
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 429) {
        throw new Error('API rate limit exceeded. Please try again in a moment.');
      }
      if (error.response?.status === 404) {
        throw new Error('Cryptocurrency not found');
      }
    }
    throw new Error('Failed to fetch cryptocurrency price');
  }
};

export const getTrendingCoins = async (): Promise<TrendingCoin[]> => {
  try {
    const response = await retryRequest(() => 
      api.get('/search/trending')
    );
    return response.data.coins;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 429) {
      throw new Error('API rate limit exceeded. Please try again in a moment.');
    }
    throw new Error('Failed to fetch trending coins');
  }
};

export const getCoinDetails = async (id: string) => {
  try {
    const response = await retryRequest(() => 
      api.get(`/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 429) {
        throw new Error('API rate limit exceeded. Please try again in a moment.');
      }
      if (error.response?.status === 404) {
        throw new Error(`Cryptocurrency "${id}" not found`);
      }
    }
    throw new Error('Failed to fetch coin details');
  }
};