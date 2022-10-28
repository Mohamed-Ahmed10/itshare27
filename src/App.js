import {useState} from "react";
import { Button } from "react-bootstrap";
import "./App.scss";
import {CompareClass, CompareFunction} from "./components/compare";
import Controlled from "./components/controlled";
import {CounterClass, CounterFunction} from "./components/counter";
import WelcomeDialog from "./components/dialig";
import Reservation from "./components/multiple";
import Rendering from "./components/rendering";
import ShowHidePassword from "./components/showHidePassword";

function App() {
    const [visible, setVisible] = useState(true);
    return (
        <>
            <ShowHidePassword courseName="React in class" />
            <hr />
            <Rendering courseName="React in function" />

            <hr />
            <CounterFunction />
            <hr />
            <CounterClass />
            <hr />
            <Controlled />

            <hr />
            <Reservation />

            <hr />
            <WelcomeDialog />

            <Button variant="primary" onClick={() => setVisible(!visible)}>{visible ? "Hide" : "Show"}</Button>
            {visible && (
                <>
                    <CompareFunction />
                    <hr />
                    <CompareClass />
                </>
            )}
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
