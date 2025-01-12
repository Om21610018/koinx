export interface CryptoPrice {
  inr: number;
  inr_24h_change: number;
  usd: number;
  usd_24h_change: number;
}

export interface CoinDetails {
  id: string;
  symbol: string;
  name: string;
  market_data: {
    current_price: {
      usd: number;
      inr: number;
    };
    market_cap: {
      usd: number;
    };
    market_cap_rank: number;
    price_change_percentage_24h: number;
    total_volume: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    ath: {
      usd: number;
    };
    ath_date: {
      usd: string;
    };
    atl: {
      usd: number;
    };
    atl_date: {
      usd: string;
    };
    market_cap_change_percentage_24h: number;
  };
}

export interface TrendingCoin {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
    data: {
      price: string;
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}