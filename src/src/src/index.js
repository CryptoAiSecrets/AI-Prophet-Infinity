
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

import PredictionViewer from './PredictionViewer';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const root = ReactDOM.createRoot(document.getElementById('root'));

const predictionData = {
  labels: ['3/28', '3/29', '3/30', '3/31', '4/1', '4/2', '4/3'],
  datasets: [
    {
      label: 'Predicted Value',
      data: [12700, 12900, 13250, 13300, 13400, 13600, 13800],
      borderColor: '#00f5a0',
      backgroundColor: 'rgba(0,245,160,0.2)',
      tension: 0.4,
    },
  ],
};

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState(['Hello! I am your AI Assistant.']);
  const [showProof, setShowProof] = useState(false);

  const sendMessage = () => {
    if (message.trim() !== '') {
      setChat([...chat, message]);
      setMessage('');
    }
  };

  return (
    <div style={{ background: '#000', color: '#00f5a0', minHeight: '100vh', padding: '20px' }}>
      <h1>AI Prophet Infinity Dashboard</h1>
      <button
        onClick={() => setShowProof(!showProof)}
        style={{ padding: '10px 20px', marginBottom: '20px', background: '#00f5a0', color: '#000', fontWeight: 'bold' }}
      >
        {showProof ? 'Hide Proof' : 'Show Proof'}
      </button>

      {showProof ? (
        <PredictionViewer />
      ) : (
        <>
          <h2>7-Day Market Prediction</h2>
          <Line data={predictionData} />
          <hr />
          <h2>AI Assistant</h2>
          <div style={{ background: '#111', padding: '10px', borderRadius: '10px', minHeight: '100px' }}>
            {chat.map((c, i) => (
              <div key={i} style={{ marginBottom: '8px', fontWeight: 'bold' }}>
                {"AI Assistant: "} {c}
              </div>
            ))}
            <input
              type="text"
              value={message}
              placeholder="Ask about BTC, NASDAQ, NVDA..."
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: '80%', padding: '10px', marginTop: '10px', background: '#000', color: '#0f0' }}
            />
            <button
              onClick={sendMessage}
              style={{ padding: '10px', marginLeft: '10px', background: '#00f5a0', color: '#000' }}
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}

root.render(<App />);
