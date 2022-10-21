import React, {Component} from "react";

export class StateReview extends Component {
    state = {
        courseName: "React",
        finish: false,
    };

    update = () => {
        // this.state.finish
        // ? this.setState({finish: false})
        // : this.setState({finish: true})

        
        this.setState({finish: !this.state.finish});
    };
    changeCourse = (e) => {
        this.setState({courseName: e.target.value});
    };

    render() {
        return (
            <div>
                <div>{this.state.courseName}</div>
                {this.state.finish ? (
                    <div>Your course is finished</div>
                ) : (
                    <div>Not finished</div>
                )}
                <button onClick={this.update}>Change</button>

                <hr />
                <input
                    type="text"
                    value={this.state.courseName}
                    onChange={this.changeCourse}
                />
                <br />
                <label htmlFor="">CSS</label>
            </div>
        );
    }
}

export default StateReview;
