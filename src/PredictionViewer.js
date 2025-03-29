import React from 'react';

const predictions = [
  { date: '3/28', asset: 'BTC', direction: 'UP', confidence: '91%', change: '+4.5%' },
  { date: '3/28', asset: 'NASDAQ', direction: 'DOWN', confidence: '78%', change: '-2.1%' },
  { date: '3/28', asset: 'NVDA', direction: 'UP', confidence: '87%', change: '+3.2%' },
];

const PredictionViewer = () => {
  return (
    <div style={{ background: '#111', padding: '20px', borderRadius: '10px' }}>
      <h3 style={{ color: '#00f5a0' }}>Prediction Log (Proof)</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {predictions.map((p, i) => (
          <li key={i} style={{ marginBottom: '10px', color: '#0f0' }}>
            {`${p.date} - ${p.asset}: ${p.direction} by ${p.change} (Confidence: ${p.confidence})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PredictionViewer;
