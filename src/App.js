import siteLogo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Course from "./components/Course";
import View from "./components/viewCourses";


var counter = 0;
function check() {
    counter++;
    console.log(counter);
}
function App() {
    var myName = "Mohamed";
    const graduate = false;

    return (
        <>
            <Navbar />
            <Header />
            <div
                className="App"
                style={{backgroundColor: "#EEE", color: "#00F"}}
            >
                <h1>Hello React</h1>
                <div className="appChild">{myName.toUpperCase()}</div>
            </div>
            

            {/* {console.log("OK")} */}

            {counter}

            <button onClick={check}>Click me</button>

            <hr />
            {graduate ? <div>Hello Graduate</div> : <div>Hello student</div>}
            <hr />

            <img src={siteLogo} alt="Test logo" width="200" height="200" />

            <hr /><br />
            <Course courseName="CSS" courseDescription="Style"/>
            <Course courseName="javaScript" courseDescription="Programming language"/>
            <Course courseName="React" courseDescription="JS Library"/>
            <hr />
            <View />
        </>
    );
}
export default App;
