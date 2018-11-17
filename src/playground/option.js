import React from "react";
import SingleOption from "./sop";
const Options = (props) => 

     (
        <div>
            <p>{props.opArray.length === 0 && 'please Add item'}</p>
            {props.opArray.map(elamants => (
                <SingleOption key={elamants} textValue={elamants}
                    handelDeleteOption={props.handelDeleteOption}
                />
            ))}
            <button onClick={props.handelReset}>Reset All</button>
        </div>
    );


export default Options;