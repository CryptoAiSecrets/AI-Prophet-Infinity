// AI Prophet Infinity Visual UI - Phase 7 Final Layout

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const predictionData = {
  labels: ['3/28', '3/29', '3/30', '3/31', '4/1', '4/2', '4/3'],
  datasets: [
    {
      label: 'AI Prediction',
      data: [12700, 12900, 13250, 13300, 13400, 13600, 13800],
      borderColor: '#00f5a0',
      backgroundColor: 'rgba(0,245,160,0.2)',
      tension: 0.4,
    },
  ],
};

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState(['Welcome to AI Prophet Infinity.']);

  const sendMessage = () => {
    if (message.trim() !== '') {
      setChat([...chat, message]);
      setMessage('');
    }
  };

  return (
    <div style={{ background: '#000', color: '#00f5a0', minHeight: '100vh', fontFamily: 'monospace' }}>
      <div style={{ padding: '20px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>AI Prophet Infinity</h1>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
          <div style={{ flex: 1, minWidth: '300px', background: '#111', borderRadius: '10px', padding: '20px' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Portfolio Predictions</h2>
            <Line data={predictionData} />
            <div style={{ textAlign: 'right', marginTop: '10px', color: '#0f0' }}>Confidence: 87%</div>
          </div>

          <div style={{ flex: 1, minWidth: '300px', background: '#111', borderRadius: '10px', padding: '20px' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>AI Assistant</h2>
            <div style={{ background: '#000', padding: '10px', borderRadius: '10px', minHeight: '80px' }}>
              {chat.map((c, i) => (
                <div key={i} style={{ marginBottom: '8px' }}>
                  <strong>AI:</strong> {c}
                </div>
              ))}
            </div>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about BTC, NASDAQ, etc."
              style={{ marginTop: '10px', width: '100%', padding: '8px', background: '#000', color: '#0f0', border: '1px solid #00f5a0', borderRadius: '5px' }}
            />
            <button
              onClick={sendMessage}
              style={{ marginTop: '10px', padding: '10px 20px', background: '#00f5a0', color: '#000', border: 'none', borderRadius: '5px' }}
            >
              Send
            </button>
          </div>
        </div>

        <div style={{ marginTop: '40px', background: '#111', borderRadius: '10px', padding: '20px' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Top Predictions</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ background: '#003300', padding: '10px', borderRadius: '10px', flex: 1 }}>
              <h3>Bitcoin</h3>
              <p>Predicted: $66,577</p>
              <p>Change: +2.96%</p>
              <p>Confidence: 87%</p>
            </div>
            <div style={{ background: '#330000', padding: '10px', borderRadius: '10px', flex: 1 }}>
              <h3>NASDAQ</h3>
              <p>Predicted: 13,800</p>
              <p>Change: -1.25%</p>
              <p>Confidence: 76%</p>
            </div>
            <div style={{ background: '#001133', padding: '10px', borderRadius: '10px', flex: 1 }}>
              <h3>NVIDIA</h3>
              <p>Predicted: $477.65</p>
              <p>Change: +5.18%</p>
              <p>Confidence: 91%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
