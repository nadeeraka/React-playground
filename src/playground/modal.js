import React from 'react'
import Modal from 'react-modal';

const OptionModal = (props)=>
(
       <Modal 
       isOpen={props.isOpen}
            onRequestClose={props.isSelected}
       contentLabel={"selected option"}
       >
       <h1>Selected options  </h1>
       <h2>{props.value}</h2>
 
            <button onClick={props.isSelected}>OK</button>
       </Modal>
)
export default OptionModal;