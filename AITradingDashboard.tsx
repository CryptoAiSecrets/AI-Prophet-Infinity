import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const assets = [
  { symbol: "BTC", name: "Bitcoin" },
  { symbol: "NASDAQ", name: "Nasdaq Index" },
  { symbol: "NVDA", name: "NVIDIA" },
];

const fetchPrediction = async (symbol) => {
  // Simulated prediction API response
  return {
    prediction: [0.5, 1.2, 2.4, 1.8, 2.6],
    actual: [0.4, 0.9, 1.7, 1.5, 2.0],
    confidence: Math.floor(Math.random() * 20) + 80,
  };
};

export default function AITradingDashboard() {
  const [predictions, setPredictions] = useState({});

  useEffect(() => {
    assets.forEach(async (asset) => {
      const data = await fetchPrediction(asset.symbol);
      setPredictions((prev) => ({ ...prev, [asset.symbol]: data }));
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6">AI Prophet Trading Dashboard</h1>
      <Tabs defaultValue="1D" className="mb-6">
        <TabsList className="gap-2">
          <TabsTrigger value="1H">1H</TabsTrigger>
          <TabsTrigger value="1D">1D</TabsTrigger>
          <TabsTrigger value="1W">1W</TabsTrigger>
          <TabsTrigger value="1M">1M</TabsTrigger>
          <TabsTrigger value="1Y">1Y</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {assets.map((asset) => {
          const pred = predictions[asset.symbol];
          return (
            <Card key={asset.symbol} className="bg-zinc-900 rounded-2xl shadow-lg">
              <CardContent className="p-4">
                <div className="text-lg font-semibold mb-2">{asset.name} ({asset.symbol})</div>
                {pred ? (
                  <>
                    <Line
                      data={{
                        labels: ["Now", "+1h", "+2h", "+3h", "+4h"],
                        datasets: [
                          {
                            label: "Actual",
                            data: pred.actual,
                            borderColor: "#999",
                            backgroundColor: "rgba(255,255,255,0.1)",
                          },
                          {
                            label: "Prediction",
                            data: pred.prediction,
                            borderColor: "#3b82f6",
                            backgroundColor: "rgba(59,130,246,0.2)",
                          },
                        ],
                      }}
                      options={{ responsive: true, plugins: { legend: { labels: { color: 'white' } } } }}
                    />
                    <div className="text-sm text-zinc-300 mt-2">Confidence: {pred.confidence}%</div>
                  </>
                ) : (
                  <div>Loading...</div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Ask the AI Assistant</h2>
        <div className="flex gap-2">
          <Input placeholder="e.g. What's the forecast for BTC tomorrow?" className="bg-zinc-800 border-zinc-700" />
          <Button className="bg-blue-600 hover:bg-blue-700">Ask</Button>
        </div>
      </div>
    </div>
  );
}
