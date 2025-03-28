// PredictionEngine.js
export function runPrediction(asset) {
  const directions = ['UP', 'DOWN'];
  const randomDir = directions[Math.floor(Math.random() * directions.length)];
  const change = (Math.random() * 5).toFixed(2);
  const confidence = (70 + Math.random() * 20).toFixed(2);

  return {
    asset,
    direction: randomDir,
    percentChange: change,
    confidence,
    timestamp: new Date().toISOString()
  };
}
