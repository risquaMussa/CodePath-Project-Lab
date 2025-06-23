import { useState } from "react";
import Flashcard from "./Flashcard";
import "./FlashcardList.css";
import data from "./data.js";
import ShuffleButton from "./ShuffleButton.jsx";

function FlashcardList() {
  const [index, setIndex] = useState(0);
  const [cards, setCards] = useState(data);
  const [shuffledLength, setShuffledLength] = useState(null);

  const goNext = () => {
    if (index < data.length - 1) setIndex(index + 1);
  };

  const goPrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  // Start -----------project- 3
  const [guess, setGuess] = useState("");
  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === data[index].answer.toLowerCase()) {
      alert("Correct!");
    } else {
      alert("Incorrect! Try again.");
    }
    setGuess("");
  };

  return (
    <div className="flashcard-list">
      <p>
        Number of Card {index + 1} of {cards.length}{" "}
      </p>
      <Flashcard flashcard={cards[index]} />

      {/* Start -----------project- 3  */}
      <div>
        <input
          onChange={handleGuessChange}
          className="input-box"
          type="text"
          placeholder="Enter your guess here"
        />

        <button className="submit-button" onClick={handleGuessSubmit}>
          Submit Guess
        </button>
      </div>
      <div>
        <button className="button" onClick={goPrev} disabled={index === 0}>
          ⬅
        </button>

        <button
          className="button"
          onClick={goNext}
          disabled={index === data.length - 1}
        >
          ➡
        </button>
      </div>

      <ShuffleButton
        cards={cards}
        setCards={setCards}
        setCurrentIndex={setIndex}
        setShuffledLength={setShuffledLength}
      />

      {shuffledLength > 0 && <p>Shuffled {shuffledLength} cards.</p>}
    </div>
  );
}

export default FlashcardList;
