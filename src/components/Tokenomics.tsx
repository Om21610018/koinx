import React from 'react';


interface DistributionData {
  crowdsaleInvestors: number;
  foundation: number;
}

interface Props {
  distribution?: DistributionData;
}

const Tokenomics: React.FC<Props> = ({ distribution }) => {
  const defaultDistribution: DistributionData = {
    crowdsaleInvestors: 80,
    foundation: 20
  };

  const data = distribution || defaultDistribution;
  const circumference = 2 * Math.PI * 50; // radius is 50
  const crowdsaleStroke = (circumference * data.crowdsaleInvestors) / 100;
  const foundationStroke = (circumference * data.foundation) / 100;

  return (
    <div className="w-full mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-xl font-semibold">Tokenomics</h2>
        
        <div className="space-y-6">
          <h3 className="text-lg font-medium">Initial Distribution</h3>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="50"
                  stroke="#3B82F6"
                  strokeWidth="24"
                  fill="none"
                  strokeDasharray={`${crowdsaleStroke} ${circumference}`}
                  className="transition-all duration-1000 ease-out"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="50"
                  stroke="#F59E0B"
                  strokeWidth="24"
                  fill="none"
                  strokeDasharray={`${foundationStroke} ${circumference}`}
                  strokeDashoffset={-crowdsaleStroke}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-600">
                  Crowdsale investors: {data.crowdsaleInvestors}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-sm text-gray-600">
                  Foundation: {data.foundation}%
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. 
            Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;