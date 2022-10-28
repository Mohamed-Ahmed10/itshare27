import {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import React, {Component} from "react";

const CounterFunction = () => {
    var [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    };
    const decreaseCounter = () => {
        setCounter(counter - 1);
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Button variant="danger" onClick={decreaseCounter}>
                            Decrease
                        </Button>
                    </Col>
                    <Col>
                        <div
                            className={`${
                                counter > 0 ? "overZero" : "underZero"
                            } text-center fw-bold`}
                        >
                            {counter}
                        </div>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={increaseCounter}>
                            Increase
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

class CounterClass extends Component {
    state = {
        counter: 0,
    };

    increaseCounter = () => {
        this.setState(this.state.counter + 1)
    };
    decreaseCounter = () => {
        this.setState(this.state.counter - 1)
    };
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Button variant="danger" onClick={this.decreaseCounter}>
                                Decrease
                            </Button>
                        </Col>
                        <Col>
                            <div
                                className={`${
                                    this.state.counter > 0
                                        ? "overZero"
                                        : "underZero"
                                } text-center fw-bold`}
                            >
                                {this.state.counter}
                            </div>
                        </Col>
                        <Col>
                            <Button variant="primary" onClick={this.increaseCounter}>
                                Increase
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export {CounterClass, CounterFunction};
