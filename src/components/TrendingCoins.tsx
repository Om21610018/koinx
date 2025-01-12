import React from "react";
import { TrendingCoin } from "../types/crypto";
import { ArrowUp, ArrowDown } from "lucide-react";

interface Props {
  coins: TrendingCoin[];
}

export const TrendingCoins: React.FC<Props> = ({ coins }) => {
  console.log(coins);
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {coins.slice(0, 3).map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={coin?.item?.small}
                alt={coin?.item?.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="font-medium">
                {coin?.item?.symbol.toUpperCase()}
              </span>
            </div>
            <div
              className={`flex items-center gap-1 ${
                coin?.item?.data.price_change_percentage_24h.usd >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {coin?.item?.data?.price_change_percentage_24h.usd >= 0 ? (
                <ArrowUp className="w-4 h-4" />
              ) : (
                <ArrowDown className="w-4 h-4" />
              )}
              {Math.abs(coin?.item?.data.price_change_percentage_24h?.usd).toFixed(
                2
              )}
              %
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};
