
import React, { useEffect, useState } from 'react';
import { getPredictionLog } from './ProofLogger';

function PredictionViewer() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const logs = getPredictionLog();
    setLogs(logs);
  }, []);

  return (
    <div style={{ padding: '20px', color: '#00f5a0' }}>
      <h2>📜 Prediction Log</h2>
      <ul>
        {logs.map((log, idx) => (
          <li key={idx}>
            {log.timestamp} - {log.asset}: {log.direction} by {log.percentChange}% (Confidence: {log.confidence}%)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PredictionViewer;
