import styles from "./textHover.module.scss";
import { useRef, useEffect } from "react";

export default function TextHover({ text }) {
  const textRef = useRef();

  useEffect(() => {
    const allowedCharacters = [
      ...Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode("A".charCodeAt(0) + i)
      ),
      ...Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode("a".charCodeAt(0) + i)
      ),
      "$",
      "#",
      "?",
      "*",
      "0",
      "1",
      "+",
    ];

    //Get random character
    function getRandomCharacter() {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
      return allowedCharacters[randomIndex];
    }

    function createEventHandler() {
      let isInProgress = false;

      return function handleHoverEvent() {
        if (isInProgress) {
          return;
        }

        const originalText = textRef.current.innerText;
        const randomizedText = originalText
          .split("")
          .map(getRandomCharacter)
          .join("");

        for (let i = 0; i <= originalText.length; i++) {
          isInProgress = true;

          setTimeout(() => {
            const nextIndex = i;
            textRef.current.innerHTML = `${originalText.substring(
              0,
              nextIndex
            )}${randomizedText.substring(nextIndex)}`;

            if (nextIndex === originalText.length) {
              isInProgress = false;
            }
          }, i * 80);
        }
      };
    }

    const eventHandler = createEventHandler();
    const element = textRef.current;

    if (element) {
      element.addEventListener("mouseover", eventHandler);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseover", eventHandler);
      }
    };
  }, []);

  return (
    <div className={styles.textHover}>
      <h1 ref={textRef}>{text}</h1>
    </div>
  );
}
