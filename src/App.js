import siteLogo from "./logo.svg";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Course from "./components/Course";
import View from "./components/viewCourses";
import Grad from "./components/Grad";
import "./App.scss";
import StateReview from "./components/StateReview";


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
            <div
                className="App"
                style={{backgroundColor: "#EEE", color: "#00F"}}
            >
                <h1>Hello React</h1>
                <div className="appChild">{myName.toUpperCase()}</div>
            </div>
            


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

            <hr />

            <Header />
            <Navbar />
            <hr />
            <Grad />

            <StateReview />

        </>
    );
}
export default App;


/*
1- Practice JS
2- Flex & responsive 
3- Global functions & scoped function ( let & var & const )
4- API


*/
