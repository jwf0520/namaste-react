import React from "react";
//import ReactDOM from "react-dom";

function Icon({ id, ...props }) {
  return (
    <svg {...props}>
      <use href={`/kds.svg#${id}`} />
    </svg>
  );
}

export default Icon;
