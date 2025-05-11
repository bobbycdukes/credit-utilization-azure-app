import React, { useState } from "react";

export default function CreditEntryForm() {
  const [form, setForm] = useState({
    cardName: "",
    creditLine: "",
    balance: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked. Sending data...");

    const proxyUrl = "https://corsproxy.io/?";
    const googleScriptURL =
      "https://script.google.com/macros/s/AKfycbz-WyfMqH__eKQWoS86UkSr-MPH-sOxcSnmofmihVG14nb9s3ctZybSw92sxjm3z_hzEg/exec";

    try {
      const response = await fetch(proxyUrl + googleScriptURL, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Submitted successfully!");
        setForm({ cardName: "", creditLine: "", balance: "" });
      } else {
        alert("Submission failed.");
      }
    } catch (error) {
      console.error("Error submitting:", error);
      alert("An error occurred while submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Add New Credit Card</h2>

      <input
        type="text"
        name="cardName"
        placeholder="Card Name"
        value={form.cardName}
        onChange={handleChange}
        className="w-full mb-2 p-2 rounded border"
        required
      />
      <input
        type="number"
        name="creditLine"
        placeholder="Credit Line"
        value={form.creditLine}
        onChange={handleChange}
        className="w-full mb-2 p-2 rounded border"
        required
      />
      <input
        type="number"
        name="balance"
        placeholder="Balance"
        value={form.balance}
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded border"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
