import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./class.css";
import "./TextApp.css";
import DummyText from "./DummyText";
var temp_word = "";
var index = 0;
export default function TextApp(props) {
  const [text, setText] = useState("");
  const [char, setChar] = useState(0);
  const [word, setWord] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const dummy_text_arr = props.dummyTextProps.split(" ");
  const [currect, setCurrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [startDisabled, setStartDisabled] = useState(false);
  const changeText = (event) => {
    var letter = event.target.value;
    if (letter[letter.length - 1] === "\n") {
      console.log("Enter");
    }
    if (letter.length <= props.dummyTextProps.length) {
      if (letter[letter.length - 1] === " ") {
        if (temp_word === dummy_text_arr[index]) {
          setCurrect((currect) => currect + 1);
          console.log(currect);
          console.log("Currect", currect);
        } else {
          setWrong(wrong + 1);
          console.log("Wrong", wrong);
        }
        index++;
        temp_word = "";
      } else {
        temp_word = temp_word + letter[letter.length - 1];
      }
    }
    setText(letter);
    setChar(letter.length);
    var allText = letter;
    const word_len = allText.split(" ");
    setWord(word_len.length);
  };

  //   const convertText = () => {
  //     setText(text.toUpperCase());
  //   };

  const startTimer = () => {
    setIsStart(true);
    setDisabled(false);
    setStartDisabled(true);
  };
  const stopTimer = () => {
    setIsStart(false);
    setSeconds(0);
    index = 0;
    temp_word = "";
    setStartDisabled(false);
    setDisabled(true);
  };

  //    Timer Functions
  useEffect(() => {
    let timer;
    const handleBackspace = (e) => {
      if (e.key === "Backspace") {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleBackspace);
    if (isStart) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      if (seconds > 10) {
        stopTimer();
      }
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isStart, seconds]);
  return (
    <>
      <DummyText dummyTextProps={props.dummyTextProps} />
      <div className="flex_div main_div">
        <div className="flex_div result_div">
          <h1 className="heading">{props.TextAppProps.title}</h1>
          <p>Your Total Characters : {char}</p>
          <p>Your Total Words : {word / 1}</p>
          <p>Timer : {seconds}seconds</p>
        </div>
        <div className="flex_div tool_div">
          <textarea
            value={text}
            onChange={changeText}
            placeholder={props.TextAppProps.place}
            disabled={disabled}
          ></textarea>
          {/* <button onClick={convertText}>Convert</button> */}
          <div className="flex_div performance_div">
            <div className="flex_div btn_div">
              <button onClick={startTimer} disabled={startDisabled}>
                Start Timer
              </button>
              <button onClick={stopTimer}>Stop Timer</button>
            </div>
            <div className="flex_div performance_div_1">
              {isStart ? (
                <p>No Result Yet</p>
              ) : (
                <>
                  <p>Your Word Per Minute: {word}</p>
                  <p>Your Accuracy: {((currect / word) * 100).toFixed(2)}</p>
                  <p>Total Currect Words: {currect}</p>
                  <p>Total Wrong Word: {wrong}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
TextApp.propTypes = {
  TextAppProps: PropTypes.object,
  name: PropTypes.string,
};
TextApp.defaultProps = {
  dummyTextProps: "Default",
};
