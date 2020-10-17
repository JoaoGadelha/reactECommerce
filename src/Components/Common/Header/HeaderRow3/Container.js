import React from "react";

const Container = (props) => {
  return (
    <li>
      <a href="" style={{ textDecoration: "none" }}>
        {props.text}
      </a>
    </li>
  );
};

export default Container;
