// AI Prophet Infinity - Final Visual Preview Build

import React from 'react';

const predictions = [
  { asset: 'Bitcoin', direction: 'UP', confidence: '91%', change: '+4.5%' },
  { asset: 'NASDAQ', direction: 'DOWN', confidence: '78%', change: '-2.1%' },
  { asset: 'NVIDIA', direction: 'UP', confidence: '87%', change: '+3.2%' },
];

const PredictionCard = ({ asset, direction, confidence, change }) => (
  <div className={`bg-black/70 border border-${direction === 'UP' ? 'green' : 'red'}-500 p-4 rounded-2xl shadow-xl backdrop-blur-md w-full`}> 
    <h3 className="text-xl font-bold text-white">{asset}</h3>
    <p className="text-sm text-gray-300">Direction: <span className={`text-${direction === 'UP' ? 'green' : 'red'}-400`}>{direction}</span></p>
    <p className="text-sm text-gray-300">Confidence: {confidence}</p>
    <p className="text-sm text-gray-300">Change: {change}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[url('/carbon.gif')] bg-cover bg-center text-white p-6 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-green-400 drop-shadow-md">AI Prophet Infinity</h1>
        <p className="text-gray-300 text-sm">The Future of Predictive Finance</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {predictions.map((p, i) => <PredictionCard key={i} {...p} />)}
      </section>

      <section className="bg-black/60 p-6 rounded-xl shadow-inner backdrop-blur-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">AI Assistant</h2>
        <div className="bg-black p-4 rounded-lg max-h-60 overflow-y-auto">
          <div className="text-green-400">AI: Welcome back. Ready for your market edge?</div>
        </div>
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Ask about Bitcoin, NASDAQ, NVDA..."
            className="flex-1 p-2 bg-black border border-green-500 rounded-l-xl text-green-400 placeholder-green-600"
          />
          <button className="bg-green-400 text-black px-6 py-2 rounded-r-xl font-bold">Send</button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
