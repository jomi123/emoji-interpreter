import "./App.css";
import { useState } from "react";

function App() {
  var emojis = {
    "❤️": "love",
    "🥰": "smiling face with hearts",
    "😮": "face with open mouth",
    "🤐": "zipper mouth face",
    "🫥": "dotted line face",
  };

  /*
  USESTATE
  --------
  usestate is used to bring changes that is done into the view of the user.
  for that we need to set the state of the page. by using this the page is run again and now the state is updated.
  inside the usestate bracket we give the initial value. the output of usestate is accepted by 2 values one is the variable and the other is
  setvariable. now if we set the variable using set keyword we can use the variable anywhere inside the program with the updated value
  */

  var [inputText, setInputText] = useState("");
  var [meaning, setMeaning] = useState("");

  var handleOnChange = (event) => {
    setInputText(event.target.value);
    var userInput = event.target.value;
    setMeaning(emojis[userInput]);
  };
  return (
    <div className="App">
      <h1>inside outtt</h1>
      <input
        placeholder="type in an emoji"
        style={{ padding: "0.5rem" }}
        onChange={handleOnChange}
      ></input>{" "}
      <br></br>
      <br></br>
      {inputText}
      <br></br>
      <b>{meaning}</b>
    </div>
  );
}

export default App;
