import React from "react";
import SingleOption from "./sop";
const Options = props => (
  <div>
    <div className="w">
      <h3 className="w__title">Your options</h3>

      {props.opArray.map(elamants => (
        <SingleOption
          key={elamants}
          textValue={elamants}
          handelDeleteOption={props.handelDeleteOption}
        />
      ))}
      <button onClick={props.handelReset} className="button button--link">
        Reset All
      </button>
    </div>
    <p className="w__m">{props.opArray.length === 0 && "please Add item"}</p>
  </div>
);

export default Options;
