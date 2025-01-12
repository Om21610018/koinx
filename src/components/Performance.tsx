import React from 'react';
import { CoinDetails } from '../types/crypto';
import { Info } from 'lucide-react';

interface Props {
  details: CoinDetails;
}

export const Performance: React.FC<Props> = ({ details }) => {
  // Today's range calculations
  const todayLow = details.market_data.low_24h.usd;
  const todayHigh = details.market_data.high_24h.usd;
  const currentPrice = details.market_data.current_price.usd;
  
  // Calculate position percentage for the current price
  const todayRange = todayHigh - todayLow;
  const todayPosition = ((currentPrice - todayLow) / todayRange) * 100;

  // 52-week range calculations
  const weekLow = 16930.22; // Replace with actual data from your API
  const weekHigh = 49743.83; // Replace with actual data from your API
  
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Performance</h2>
      
      <div className="space-y-8">
        {/* Today's Range */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Today's Low</span>
            <span>Today's High</span>
          </div>
          <div className="relative">
            <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            <div
              className="absolute top-0 transform -translate-x-1/2"
              style={{ left: `${todayPosition}%` }}
            >
              <div className="relative">
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded">
                    ${currentPrice.toLocaleString()}
                  </div>
                </div>
                <div className="w-3 h-3 bg-gray-900 rounded-full" />
              </div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-sm">${todayLow.toLocaleString()}</span>
              <span className="text-sm">${todayHigh.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* 52W Range */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>52W Low</span>
            <span>52W High</span>
          </div>
          <div className="relative">
            <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            <div className="flex justify-between mt-1">
              <span className="text-sm">${weekLow.toLocaleString()}</span>
              <span className="text-sm">${weekHigh.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Fundamentals */}
       
      </div>
    </div>
  );
};

export default Performance;