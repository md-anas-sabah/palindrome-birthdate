import { useState } from "react";

import checkPalindrome from "./checkPalindrome";
import checkPrevNext from "./CheckPrevNext";
import { differenceInDates } from "./DifferenceInDates";
import "./App.css";

function App() {
  const [date, setDate] = useState("yyyy-mm-dd");
  const [result, setResult] = useState("");

  const run = () => {
    const res = checkPalindrome(date);
    if (res[0]) {
      setResult(
        `Yaaaay 🤩🤩!!! your birthdate is a palindrome 👉 ${
          result[2][result[3]]
        } 👈`
      );
    } else {
      let otherwise = checkPrevNext(date);
      let prevDate = differenceInDates(otherwise[0], date);
      let nextDate = differenceInDates(date, otherwise[1]);

      if (prevDate < nextDate) {
        setResult(
          `Wooops! Your birthdate is not a palindrome, the nearest palindrome date is ${otherwise[0]} and you missed it by just ${prevDate}`
        );
      } else {
        setResult(
          `Wooops! Your birthdate is not a palindrome, the nearest palindrome date is ${otherwise[1]} and you missed it by just ${nextDate} days`
        );
      }
    }
    document.querySelector(".loader-div").style.display = "none";
  };

  const handleClick = () => {
    if (date === "yyyy-mm-dd") {
      setResult("Please provide a valid date");
    } else {
      setResult("");
      document.querySelector(".loader-div").style.display = "block";
      setTimeout(run, 2000);
    }
  };

  return (
    <div className="app">
      <div className="main_container">
        <header>
          <h1 className="heading">Palindrome Birthdate?</h1>
        </header>
        <div className="input_container">
          <span>Enter your birthdate</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <span className="note">
            We will check them in the formats: yyyy-mm-dd, yy-mm-dd, mm-dd-yy,
            dd-mm-yyyy
          </span>
          <button onClick={handleClick}>check</button>
        </div>

        <div className="result">
          <div class="loader-div">
            <div class="loader1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <p>{result}</p>
        </div>
      </div>
      <div className="side_container"></div>
    </div>
  );
}

export default App;
