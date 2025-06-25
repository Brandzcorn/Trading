import React from "react";
import TradingChart from "../components/TradingChart";
import WalletCard from "../components/WalletCard";
import BlogPosts from "../components/BlogPosts";

export default function Dashboard({ user }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WalletCard />
        <BlogPosts />
      </div>

      <div className="mt-8">
        <TradingChart symbol="FX:EURUSD" />
      </div>
    </div>
  );
}