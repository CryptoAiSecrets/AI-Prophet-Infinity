// ProofLogger.js
let predictions = [];

export function logPrediction(pred) {
  predictions.push(pred);
  console.log("Logged:", pred);
}

export function getPredictionLog() {
  return predictions;
}
