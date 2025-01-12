import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Breadcrumb } from '../components/Breadcrumb';
import { CoinHeader } from '../components/CoinHeader';
import { PriceInfo } from '../components/PriceInfo';
import { Performance } from '../components/Performance';
import { Fundamentals } from '../components/Fundamentals';
import { TradingViewChart } from '../components/TradingViewChart';
import { GetStarted } from '../components/GetStarted';
import { TrendingCoins } from '../components/TrendingCoins';
import { CoinCarousel } from '../components/CoinCarousel';
import { getCoinDetails, getTrendingCoins } from '../services/api';
import type { CoinDetails, TrendingCoin } from '../types/crypto';
import SentimentDashboard from '../components/SentimentDashboar';
import BitcoinInfo from '../components/BitcoinInfo';
import Tokenomics from '../components/Tokenomics';
import TeamSection from '../components/TeamSection';
import "../index.css"

export const CoinPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<CoinDetails | null>(null);
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        setError(null);
        
        const [coinDetails, trendingData] = await Promise.all([
          getCoinDetails(id),
          getTrendingCoins(),
        ]);
        
        setDetails(coinDetails);
        setTrendingCoins(trendingData);
        console.log(details);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch cryptocurrency data');
        console.error('Error fetching data:', err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

 
  if (!id) {
    return <Navigate to="/coin/bitcoin" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center h-64">
          <div className="loader"></div>

          </div>
        </div>
      </div>
    );
  }

  if (error || !details) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-red-600">{error || 'Failed to load cryptocurrency data'}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb coinName={details.name} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <CoinHeader details={details} />
            <PriceInfo details={details} />
            <TradingViewChart symbol={details.symbol.toUpperCase()} />
            <Performance details={details} />
            <Fundamentals details={details} />
          </div>
          
          <div className="space-y-6">
            <GetStarted />
            {trendingCoins.length > 0 && <TrendingCoins coins={trendingCoins} />}
          </div>
        </div>
        <SentimentDashboard/>
        <BitcoinInfo/>
        <Tokenomics/>
        <TeamSection/>
        
        {trendingCoins.length > 0 && (
          <div className="mt-8 space-y-6">
            <CoinCarousel title="You May Also Like" coins={trendingCoins} />
            <CoinCarousel title="Trending Coins" coins={trendingCoins} />
          </div>
        )}
        
      </main>
    </div>
  );
};