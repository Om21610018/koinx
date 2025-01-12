import React from 'react';
import { CoinDetails } from '../types/crypto';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface Props {
  details: CoinDetails;
}

export const PriceInfo: React.FC<Props> = ({ details }) => {
  const priceChange = details.market_data.price_change_percentage_24h;
  const isPositive = priceChange >= 0;

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold">
            ${details.market_data.current_price.usd.toLocaleString()}
          </span>
          <span
            className={`flex items-center px-2 py-1 rounded text-sm ${
              isPositive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}
          >
            {isPositive ? (
              <ArrowUp className="w-4 h-4 mr-1" />
            ) : (
              <ArrowDown className="w-4 h-4 mr-1" />
            )}
            {Math.abs(priceChange).toFixed(2)}%
          </span>
        </div>
        <div className="text-gray-500">
          ₹ {details.market_data.current_price.inr.toLocaleString()}
        </div>
      </div>
    </div>
  );
};