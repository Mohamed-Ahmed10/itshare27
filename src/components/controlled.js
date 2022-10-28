import React, {Component} from "react";

export default class Controlled extends Component {
    state = {
        username: "",
        message: "",
        course: "",
        date: "",
        accept: false,
        education: "",
    };

    handleUsername = (event) => {
        this.setState({username: event.target.value});
    };
    handleMessage = (e) => {
        this.setState({message: e.target.value});
    };
    handleCourse = (e) => {
        this.setState({course: e.target.value});
    };

    handleDate = (e) => {
        this.setState({date: e.target.value});
    };
    handleAccept = (e) => {
        this.setState({accept: e.target.checked});
    };
    handleEducation = (e) => {
        this.setState({education: e.target.value});
    };
    handleSubmit = (event) => {
        event.preventDefault();
    };
    render() {
        return (
            <div className="controlled">
                <h2>Controlled components</h2>
                <form action="" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleUsername}
                    />
                    <h2>Username is : {this.state.username}</h2>
                    <textarea
                        name=""
                        id="message"
                        cols="30"
                        rows="10"
                        value={this.state.message}
                        onChange={this.handleMessage}
                    ></textarea>
                    <select
                        name=""
                        id="course"
                        value={this.state.course}
                        onChange={this.handleCourse}
                    >
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                    </select>

                    <input
                        type="date"
                        name=""
                        id="date"
                        onChange={this.handleDate}
                    />
                    <input
                        type="checkbox"
                        id="accept"
                        checked={this.state.accept}
                        onChange={this.handleAccept}
                    />
                    <label htmlFor="accept">Accept conditions</label>
                    <hr />

                    <input
                        type="radio"
                        name="education"
                        id="graduate"
                        value="1"
                        onChange={this.handleEducation}
                        checked={this.state.education === "1"}
                    />
                    <label htmlFor="graduate">Graduate</label>
                    <input
                        type="radio"
                        name="education"
                        id="under_graduate"
                        value="2"
                        onChange={this.handleEducation}
                        checked={this.state.education === "2"}
                    />
                    <label htmlFor="under_graduate">Under graduate</label>

                    <input type="submit" value="OK" />
                </form>
            </div>
        );
    }
}
