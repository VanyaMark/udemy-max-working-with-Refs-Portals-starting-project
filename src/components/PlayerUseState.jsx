import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value)
  }

  function handleClick() {
    setSubmitted(true)
  }

  return (
    <section id="player">
      <h2>Welcome {!submitted ? 'unknown entity' : enteredPlayerName} </h2>
      <p>
        <input onChange={handleChange} value={enteredPlayerName} type="text" />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
