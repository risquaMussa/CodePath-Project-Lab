import { useState } from "react";
import Flashcard from "./Flashcard";
import "./FlashcardList.css";
import data from "./data.js";

function FlashcardList() {
  const [index, setIndex] = useState(0);

  const goNext = () => {
    if (index < data.length - 1) setIndex(index + 1);
  };

  const goPrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="flashcard-list">
      <p>
        Number of Card {index + 1} of {data.length}{" "}
      </p>
      <Flashcard flashcard={data[index]} />

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
    </div>
  );
}

export default FlashcardList;
