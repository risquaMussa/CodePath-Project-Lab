import React from "react";

const ShuffleButton = ({
  cards,
  setCards,
  setCurrentIndex,
  setShuffledLength,
}) => {
  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setShuffledLength(shuffled.length);

    console.log("Shuffled cards:", shuffled);
  };

  return (
    <button className="shuffle-button" onClick={handleShuffle}>
      Shuffle Cards
    </button>
  );
};

export default ShuffleButton;
