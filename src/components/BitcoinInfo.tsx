import React from "react";
import bitinfo1 from "../../assets/bitinfo1.png";
import bitinfo2 from "../../assets/bitinfo2.png";

interface BitcoinStats {
  price: string;
  volume: string;
  hourChange: string;
  weekHigh: string;
  weekLow: string;
  circulation: string;
  maxSupply: string;
}

interface Props {
  stats?: BitcoinStats;
}

const BitcoinInfo: React.FC<Props> = ({ stats }) => {
  const defaultStats: BitcoinStats = {
    price: "US$16,951.82",
    volume: "$19.14 B",
    hourChange: "+0.36%",
    weekHigh: "$18,366.66",
    weekLow: "$16,394.75",
    circulation: "19.24 M BTC",
    maxSupply: "21 M BTC",
  };

  const currentStats = stats || defaultStats;

  return (
    <div className="w-full mx-auto space-y-8 p-6">
      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-xl font-semibold">About Bitcoin</h2>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">What is Bitcoin?</h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            Bitcoin's price today is {currentStats.price}, with a 24-hour
            trading volume of {currentStats.volume}. BTC is{" "}
            {currentStats.hourChange} in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of {currentStats.weekHigh}, and
            3.40% from its 7-day all-time low of {currentStats.weekLow}. BTC has
            a circulating supply of {currentStats.circulation} and a max supply
            of {currentStats.maxSupply}.
          </p>

          <div className="space-y-4 text-gray-600 text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
              lobortis tristique pharetra. Diam id et lectus urna et tellus
              aliquam dictum at.
            </p>
            <p>
              Diam praesent massa dapibus magna aliquam a dictumst volutpat.
              Egestas vitae pellentesque auctor amet.
            </p>
            <p>
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
              massa vel convallis duis ac.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r flex gap-x-4  items-center from-emerald-400 to-blue-500 rounded-lg p-6 text-white">
          <img
            src={bitinfo1}
            alt={"error"}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Calculate your Profits</h3>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-opacity-90 transition-all flex items-center gap-2">
              Check Now
              <span>→</span>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r flex gap-x-4    items-center from-orange-400 to-red-500 rounded-lg p-6 text-white">
        <img
            src={bitinfo2}
            alt={"error"}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div className="space-y-4">
            <h3 className="font-medium text-lg">
              Calculate your tax liability
            </h3>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-opacity-90 transition-all flex items-center gap-2">
              Check Now
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinInfo;
