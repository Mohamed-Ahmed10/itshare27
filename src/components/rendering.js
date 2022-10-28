import {useState} from "react";

const Rendering = ({courseName}) => {
    let [name, setName] = useState("Mohamed");

    const changeName = () => {
        // name = "Ali";
        setName("Ali");
        console.log(name);
    };

    return (
        <div>
            <div>Your name is {name}</div>
            <button onClick={changeName}>Change name</button>
            {courseName}
        </div>
    );
};

export default Rendering;
