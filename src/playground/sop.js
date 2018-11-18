import React from "react";

const SingleOption = props => (
  <div>
    {props.textValue}
    <button
      className="button button--link"
      hidden={!props.textValue}
      onClick={e => {
        props.handelDeleteOption(props.textValue);
      }}
    >
      Remove
    </button>
  </div>
);


export default SingleOption;