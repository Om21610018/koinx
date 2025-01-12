import React from 'react';
import { CoinDetails } from '../types/crypto';

interface Props {
  details: CoinDetails;
}

export const CoinHeader: React.FC<Props> = ({ details }) => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={details?.image?.small}
        alt={details.name}
        className="w-8 h-8"
      />
      <h1 className="text-2xl font-bold">{details.name}</h1>
      <span className="text-gray-500 uppercase">{details.symbol}</span>
      <span className="bg-gray-600 text-white px-3 py-1 rounded">
        Rank #{details.market_data.market_cap_rank}
      </span>
    </div>
  );
};