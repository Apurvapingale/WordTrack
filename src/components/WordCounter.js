import React from "react";
import { useState } from "react";
import "./WordCounter.css";

const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const handleKeyPress = (e) => {
    const count = e.target.value;

    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi, "");
        count = count.replace(/[ ]{2,}/gi, " ");
        count = count.replace(/\n /, "\n");
        return count.split(" ").length;
      }
    };
    setWordCount(countWords(count));
  };

  return (
    <div className="container">
      <h1 className="title">Responsive Paragraph Word Counter</h1>
      <textarea
        className="main"
        placeholder="Enter the text here..."
        onChange={handleKeyPress}
      ></textarea>
      <h3 className="type-word">
        Word Count: <span className="num"> {wordCount}</span>{" "}
      </h3>
    </div>
  );
};

export default WordCounter;
