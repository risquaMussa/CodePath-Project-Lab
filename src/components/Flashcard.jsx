import { useState } from "react";
import "./FlashcardList.css";
import ReactCardFlip from "react-card-flip";

function Flashcard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div
        className={`flashcard front ${flashcard.category}`}
        onClick={() => setFlipped(!flipped)}
      >
        {flashcard.question}
      </div>
      <div
        className={`flashcard back ${flashcard.category}`}
        onClick={() => setFlipped(!flipped)}
      >
        {flashcard.answer}
      </div>
    </ReactCardFlip>
  );
}

export default Flashcard;
