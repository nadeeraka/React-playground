import React from "react";

const SingleOption = props => 
    (
        <div>

            {props.textValue}<button hidden={! props.textValue} onClick={(e) => {
                props.handelDeleteOption(props.textValue);
            }}>
             Remove</button>

        </div>
    );


export default SingleOption;