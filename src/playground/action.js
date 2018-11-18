import React from "react";

const Action = props => 
    (
        <div>
            <button
            className="bigb"
                disabled={!props.opArray.length > 0}
                onClick={props.handelOptions}
            >
                What shoud i do
      </button>
        </div>
    );


export default Action;