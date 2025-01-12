import React from 'react';
import { Info, TrendingUp, Newspaper } from 'lucide-react';

interface KeyEvent {
  icon: React.ReactNode;
  title: string;
  description: string;
  type: 'news' | 'trend';
}

interface AnalystEstimate {
  type: 'Buy' | 'Hold' | 'Sell';
  percentage: number;
  color: string;
}

const SentimentDashboard = () => {
  const keyEvents: KeyEvent[] = [
    {
      icon: <Newspaper className="w-6 h-6 text-white" />,
      title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
      type: 'news'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipiscing metus quis del",
      type: 'trend'
    }
  ];

  const analystEstimates: AnalystEstimate[] = [
    { type: 'Buy', percentage: 76, color: 'bg-emerald-500' },
    { type: 'Hold', percentage: 8, color: 'bg-gray-300' },
    { type: 'Sell', percentage: 16, color: 'bg-red-500' }
  ];

  return (
    <div className="w-full  mx-auto p-6 space-y-8">
      <section>
        <h1 className=' text-xl my-4 font-bold text-black'>Sentiment</h1>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Key Events</h2>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {keyEvents.map((event, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg ${event.type === 'news' ? 'bg-blue-50' : 'bg-green-50'}`}
            >
              <div className="flex gap-4">
                <div className={`p-3 justify-center items-center flex h-10 w-10 rounded-full ${event.type === 'news' ? 'bg-blue-500' : 'bg-emerald-500'}`}>
                  {event.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Analyst Estimates</h2>
          <Info className="w-4 h-4 text-gray-400" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-emerald-50 flex items-center justify-center">
            <span className="text-4xl font-bold text-emerald-500">76<span className="text-2xl">%</span></span>
          </div>

          <div className="flex-1 space-y-3 w-full">
            {analystEstimates.map((estimate, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-12 text-sm text-gray-600">{estimate.type}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded">
                  <div 
                    className={`h-full rounded ${estimate.color}`}
                    style={{ width: `${estimate.percentage}%` }}
                  />
                </div>
                <span className="w-12 text-sm text-gray-600">{estimate.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SentimentDashboard;