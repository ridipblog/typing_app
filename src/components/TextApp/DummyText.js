// import { useState } from "react";
import PropTypes from "prop-types";
import "./class.css";
import "./DummyText.css";
export default function DummyText(props) {
  return (
    <>
      <div className="flex_div dummyTextDiv">
        <p>{props.dummyTextProps}</p>
      </div>
    </>
  );
}
DummyText.prototype = {
  dummyText: PropTypes.string,
};
DummyText.defaultProps = {
  dummyText: "Default Dummy",
};
