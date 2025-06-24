import React, { useState } from "react";
import { useBalance } from "../hooks/useBalance";

export default function WalletCard() {
  const { balance, currency, setCurrency } = useBalance();
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    console.log("Depositing:", amount);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Account Balance</h2>
      <p className="text-2xl font-bold">${balance.toFixed(2)}</p>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="mb-4 mt-4 border p-2 rounded"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <div className="flex space-x-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleDeposit}
          className="bg-green-600 text-white px-4 rounded"
        >
          Deposit
        </button>
      </div>
    </div>
  );
}