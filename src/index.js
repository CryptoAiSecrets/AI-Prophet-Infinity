return (
  <div style={{ background: '#000', color: '#00f5a0', minHeight: '100vh', padding: '20px' }}>
    <h1>AI Prophet Infinity Dashboard</h1>
    <h2>7-Day Market Prediction</h2>
    <Line data={predictionData} />
    <hr />
    <h2>AI Assistant</h2>
    <div style={{ background: '#111', padding: '10px', borderRadius: '10px', minHeight: '100px' }}>
      {chat.map((c, i) => {
        return (
          <div key={i} style={{ marginBottom: '8px', fontWeight: 'bold' }}>
            {"AI Assistant: "} {c}
          </div>
        );
      })}
      <input
        type="text"
        value={message}
        placeholder="Ask about BTC, NASDAQ, NVDA..."
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '80%', padding: '10px', marginTop: '10px', background: '#000', color: '#0f0' }}
      />
      <button onClick={sendMessage} style={{ padding: '10px', marginLeft: '10px', background: '#00f5a0', color: '#000' }}>
        Send
      </button>
    </div>
  </div>
);
