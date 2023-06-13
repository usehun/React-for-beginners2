import Button from "./Button";
import PropTypes from "prop-types";
import styled from "./App.module.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1 className={styled.title}>Welcome</h1>
      <button onClick={onClick}>Click me</button>
      <p>{count}</p>
    </div>
  );

  Button.prototype = {
    text: PropTypes.string.isRequired,
  };
}

export default App;
