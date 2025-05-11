import React from "react";

const creditCards = [{'Credit Card': 'Quick Silver 4929', 'Credit Line': 5150, 'Balance': 2557.31, 'Utilization': 0.4965650485436893}, {'Credit Card': 'Quick Silver 7164', 'Credit Line': 3550, 'Balance': 1762.31, 'Utilization': 0.496425352112676}, {'Credit Card': 'Citi Diamond 5428', 'Credit Line': 7600, 'Balance': 3634.63, 'Utilization': 0.4782407894736842}, {'Credit Card': 'American X Blue Cash 92004 ', 'Credit Line': 6000, 'Balance': 2992.65, 'Utilization': 0.498775}, {'Credit Card': 'Amex Business Prime 1104', 'Credit Line': 700, 'Balance': 0.0, 'Utilization': 0.0}, {'Credit Card': 'Delta Skies Platnum 61004', 'Credit Line': 2400, 'Balance': 281.36, 'Utilization': 0.11723333333333334}, {'Credit Card': 'Discover IT 6746', 'Credit Line': 2500, 'Balance': 1216.0, 'Utilization': 0.4864}, {'Credit Card': 'Discover G 3211', 'Credit Line': 3500, 'Balance': 1534.54, 'Utilization': 0.43844}, {'Credit Card': 'Best Buy 7460', 'Credit Line': 6000, 'Balance': 2300.0, 'Utilization': 0.38333333333333336}, {'Credit Card': 'Home Depot 9587', 'Credit Line': 7800, 'Balance': 1243.74, 'Utilization': 0.15945384615384617}, {'Credit Card': 'Mercury 0371', 'Credit Line': 9500, 'Balance': 2934.32, 'Utilization': 0.3088757894736842}, {'Credit Card': 'Pay Pal Credit', 'Credit Line': 4400, 'Balance': 2747.99, 'Utilization': 0.6245431818181818}];

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
              <tr key={index} className="border-t border-gray-200 hover:bg-blue-50 transition-all">
                <td className="px-4 py-2 font-medium">{card["Credit Card"]}</td>
                <td className="px-4 py-2">${card["Credit Line"].toLocaleString()}</td>
                <td className="px-4 py-2">${card["Balance"].toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                <td className="px-4 py-2">{(card["Utilization"] * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
