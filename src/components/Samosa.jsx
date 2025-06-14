import { useState } from "react";
import "../App.css"; // Assuming you have a CSS file for styles
// This component allows users to click on a samosa image to increase their count, and purchase upgrades.

const Samosa = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setCount(count - 10);
      setMultiplier(multiplier * 2);
    }
  };
  const buyPartyPack = () => {
    if (count >= 100) {
      setCount(count - 100);
      setMultiplier(multiplier * 5);
    }
  };
  const buyFullFeast = () => {
    if (count >= 1000) {
      setCount(count - 1000);
      setMultiplier(multiplier * 10);
    }
  };

  return (
    <>
      <header className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img
          className="samosa"
          src="https://cdn.pixabay.com/photo/2024/01/29/21/50/ai-generated-8540839_640.jpg"
          alt="Samosa"
          onClick={updateCount}
        />
      </header>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button
            className="button"
            onClick={buyDoubleStuffed}
            disabled={count < 10}
          >
            10 samosas
          </button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button
            className="button"
            onClick={buyPartyPack}
            disabled={count < 100}
          >
            100 samosas
          </button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button
            className="button"
            onClick={buyFullFeast}
            disabled={count < 1000}
          >
            1000 samosas
          </button>
        </div>
      </div>
    </>
  );
};

export default Samosa;
