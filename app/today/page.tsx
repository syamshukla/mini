"use client";

import React, { useState, useEffect } from "react";

export default function TDay() {
  const [randomFact, setRandomFact] = useState("");

  useEffect(() => {
    const fetchRandomFact = async () => {
      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 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",
            },
            body: JSON.stringify({
              messages: [
                { role: "system", content: "You are a helpful assistant." },
              ],
              model: "gpt-3.5-turbo",
            }),
          }
        );

        const data = await response.json();
        const fact =
          data.choices[0]?.message?.content || "Unable to fetch a fact.";

        setRandomFact(fact);
      } catch (error) {
        console.error("Error fetching random fact:", error);
        setRandomFact("Error fetching a fact. Please try again later.");
      }
    };

    fetchRandomFact();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="h-screen flex flex-auto justify-center items-center">
      {randomFact}
    </div>
  );
}
