import React, {Component} from "react";

export default class ShowHidePassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputType: "password",
        };

        this.changeType = this.changeType.bind(this);
    }

    changeType() {
        this.setState({
            inputType:
                this.state.inputType === "password" ? "text" : "password",
        });
    }
    render() {
        return (
            <div>
                <input type={this.state.inputType} placeholder={this.props.courseName}/>
                <button onClick={this.changeType}>
                    {this.state.inputType === "password" ? "Show" : "Hide"}
                </button>
            </div>
        );
    }
}
