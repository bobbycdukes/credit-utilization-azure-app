import React from "react";

const creditCards = [
  {
    name: "Quick Silver 4929",
    creditLine: 5150,
    balance: 2557.31,
    utilization: 0.4966,
  },
  {
    name: "Quick Silver 7164",
    creditLine: 3550,
    balance: 1762.31,
    utilization: 0.4964,
  },
  {
    name: "Citi Diamond 5428",
    creditLine: 7600,
    balance: 3634.63,
    utilization: 0.4782,
  },
  {
    name: "American X Blue Cash 92004",
    creditLine: 6000,
    balance: 2992.65,
    utilization: 0.4988,
  },
  {
    name: "Amex Business Prime 1104",
    creditLine: 700,
    balance: 0.0,
    utilization: 0.0,
  },
];

export default function CreditUtilizationTable() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Credit Utilization Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200 rounded-xl">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Credit Card</th>
              <th className="px-4 py-2 text-left">Credit Line</th>
              <th className="px-4 py-2 text-left">Balance</th>
              <th className="px-4 py-2 text-left">Utilization %</th>
            </tr>
          </thead>
          <tbody>
            {creditCards.map((card, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-blue-50 transition-all"
              >
                <td className="px-4 py-2 font-medium">{card.name}</td>
                <td className="px-4 py-2">${card.creditLine.toLocaleString()}</td>
                <td className="px-4 py-2">${card.balance.toLocaleString()}</td>
                <td className="px-4 py-2">{(card.utilization * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
