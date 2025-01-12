import React, { useRef } from 'react';
import { TrendingCoin } from '../types/crypto';
import { ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  title: string;
  coins: TrendingCoin[];
}

export const CoinCarousel: React.FC<Props> = ({ title, coins }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // card width + gap
      const currentScroll = scrollRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full relative">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors hidden md:block"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors hidden md:block"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar scroll-smooth relative"
      >
        {coins.map((coin) => (
          <div
            key={coin.item.id}
            className="min-w-[300px] border bg-white rounded-lg p-4 flex flex-col gap-4 transition-transform hover:shadow-md"
          >
            <div className="flex items-center gap-2">
              <img
                src={coin.item.small}
                alt={coin.item.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="font-medium">
                {coin.item.symbol.toUpperCase()}
              </span>
              <span
                className={`flex items-center gap-1 text-sm ${
                  coin.item.data.price_change_percentage_24h.usd >= 0
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {coin.item.data.price_change_percentage_24h.usd >= 0 ? (
                  <ArrowUp className="w-4 h-4" />
                ) : (
                  <ArrowDown className="w-4 h-4" />
                )}
                {Math.abs(
                  coin.item.data.price_change_percentage_24h.usd
                ).toFixed(2)}%
              </span>
            </div>
            <div className="text-lg font-bold">
              ${coin.item.data.price}
            </div>
            <img
              src={coin?.item?.data?.sparkline}
              alt={`${coin.item.name} price graph`}
              className="w-48 h-20 py-2 px-2 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Add custom styles for hiding scrollbar */}
      <style>
        {`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default CoinCarousel;