import React, {Component, useEffect, useState} from "react";

class CompareClass extends Component {
    state = {
        courseName: "",
    };
    componentDidMount() {
        console.log("Class Component rendered");
    }
    componentDidUpdate() {
        console.log("Class Component updated");
    }
    componentWillUnmount() {
        console.log("Class Component removed");
    }

    handleCourseName = (e) => {
        this.setState({courseName: e.target.value});
    };
    render() {
        return (
            <div>
                <form>
                    <label>Class component : </label>
                    <input
                        type="text"
                        value={this.state.courseName}
                        onChange={this.handleCourseName}
                    />
                </form>
            </div>
        );
    }
}
const CompareFunction = () => {
    const [course, setCourse] = useState("");

    let changeCourse = (e) => {
        setCourse(e.target.value);
    };
    useEffect(() => {
        console.log("Function component rendered");
    }, []);

    useEffect(() => {
        if (course === "") return;
        console.log("Function component updated");
    }, [course]);

    useEffect(() => {
        return () => {
            console.log("Function component removed");
        };
    }, []);

    return (
        <div>
            <form>
                <label>Function component : </label>
                <input type="text" value={course} onChange={changeCourse} />
            </form>
        </div>
    );
};

export {CompareClass, CompareFunction};
