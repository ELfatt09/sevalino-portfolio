import { useState, useEffect } from "react";

function TypingEffectText({ textArray, speed = 50, pause = 3000, lastTextFormat = null }) {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isTextComplete, setIsTextComplete] = useState(false);
    
    const maxTextArryIndex = textArray.length - 1;

    useEffect(() => {
        let currentTextIndex = index;
        let currentTextFinal = textArray[currentTextIndex];

        if (!isDeleting && currentText === currentTextFinal) {
            setIsTextComplete(true);
            console.log(isTextComplete);
            setTimeout(() => {
                setIsDeleting(true);
                setIsTextComplete(false);
            }, pause);
        } else if (!isDeleting && currentText !== currentTextFinal) {
            const updatedText = currentTextFinal.substring(0, currentText.length + 1);
            setTimeout(() => setCurrentText(updatedText), speed);
        } else if (isDeleting && currentText !== "") {
            const updatedText = currentTextFinal.substring(0, currentText.length - 1);
            setTimeout(() => setCurrentText(updatedText), speed);
        } 

        if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex === maxTextArryIndex ? 0 : prevIndex + 1));
        }


    })

  return (
    <span className="typing-effect">
      {currentText}
          <span className="cursor">{isTextComplete ? lastTextFormat : "_"  }</span>
    </span>
  );
}

export default TypingEffectText;
