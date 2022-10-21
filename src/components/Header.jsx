import React, {Component} from "react";

function display() {
    console.log("Works");
}
class Header extends Component {
    state = {
        name: "Mohamed",
    };

    myCourse = "React";
    render() {
        return (
            <div>
                <div>{this.myCourse}</div>
                <div>{this.state.name}</div>
                <button onClick={display}>Click me</button>
            </div>
        );
    }
}

export default Header;
