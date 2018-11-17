import React, { Component } from "react";
import SingleOption from "./sop";

class AddOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
        this.handelAddOption = this.handelAddOption.bind(this);
    }
    handelAddOption(e) {
        e.preventDefault();
        let value = e.target.elements.data.value.trim();
        let error = this.props.handelAddOption(value);
        if (error) {
            this.setState(() => ({ error }));
        }
        if (!error) {
            e.target.elements.data.value = '';
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.handelAddOption}>
                    <input type="text" name="data" />
                    <button>Add option</button>
                </form>
                <SingleOption />
            </div>
        );
    }
}

export default AddOption;