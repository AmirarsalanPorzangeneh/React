import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const x = (
  <>
    <h4 id="about-me">About Me</h4>
    <p className="description paragraph">
      Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit.
      Sit <i>erat praesent sociis </i>suspendisse neque risus.
      <br />
      Sed sit
      <small>
        arcu, nascetur <em>libero nulla</em>
      </small>
      . Massa interdum nec ultricies condimentum malesuada.
    </p>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(x);
