import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector(".app"));
root.render(
  <>
    <Heading title="One" description="This is a some Text" />
    <Heading title="Hello" description="This is a some Text" />
    <Heading title="Bye" description="This is a some Text" />
  </>
);

function Heading(props) {
  console.log(props);

  const style = {
    color: "red",
    fontWeight: "normal",
  };
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
      <h2 style={{ color: "green" }}>{props.description}</h2>

      <p>Today's date is {new Date().toLocaleDateString()}</p>
    </div>
  );
}
