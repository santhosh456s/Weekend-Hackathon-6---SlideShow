import React, { Component, useState } from "react";
import { act } from "react-test-renderer";
import "../styles/App.css";

const App = (props) => {
  const { slides } = props;

  const [index, setIndex] = useState(0);

  const title = slides[index].title;
  const text = slides[index].text;

  const Handelclickprev = (action) => {
    if (action === "prev") {
      setIndex(index - 1);
    }
  };
  const Handelclicknext = (action) => {
    if (action === "next") {
      setIndex(index + 1);
    }
  };
  const Handelclickreset = (action) => {
    if (action == "reset") {
      setIndex(0);
    }
  };
  return (
    <>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>
      <button
        data-testid="button-prev"
        disabled={index === 0 ? true : false}
        onClick={Handelclickprev("prev")}
      >
        Prev
      </button>
      <button
        data-testid="button-next"
        disabled={index === slides.length - 1 ? true : false}
        onClick={Handelclicknext("next")}
      >
        Next
      </button>
      <button
        data-testid="button-restart"
        disabled={index === 0 ? true : false}
        onClick={Handelclickreset("reset")}
      >
        Reset
      </button>
    </>
  );
};

export default App;
