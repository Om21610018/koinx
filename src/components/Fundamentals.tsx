import React from 'react';
import { CoinDetails } from '../types/crypto';

interface Props {
  details: CoinDetails;
}

export const Fundamentals: React.FC<Props> = ({ details }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Fundamentals</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">Bitcoin Price</span>
            <span className="font-medium">
              ${details.market_data.current_price.usd.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">24h Low / 24h High</span>
            <span className="font-medium">
              ${details.market_data.low_24h.usd.toLocaleString()} / 
              ${details.market_data.high_24h.usd.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">Trading Volume</span>
            <span className="font-medium">
              ${details.market_data.total_volume.usd.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">Market Cap Rank</span>
            <span className="font-medium">#{details.market_data.market_cap_rank}</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">Market Cap</span>
            <span className="font-medium">
              ${details.market_data.market_cap.usd.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">Market Cap Dominance</span>
            <span className="font-medium">
              {details.market_data.market_cap_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">All-Time High</span>
            <div className="text-right">
              <div className="font-medium">
                ${details.market_data.ath.usd.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">
                {new Date(details.market_data.ath_date.usd).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">All-Time Low</span>
            <div className="text-right">
              <div className="font-medium">
                ${details.market_data.atl.usd.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">
                {new Date(details.market_data.atl_date.usd).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};