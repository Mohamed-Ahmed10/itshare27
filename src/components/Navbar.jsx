import { Button } from "react-bootstrap";
const Navbar = () => {

    function display() {
        console.log("Works");
    }
    return (
        <div>
            This is navbar components
            <button className="btn btn-primary">OK</button>
            <Button variant="primary">Primary</Button>
            <Button variant="danger" onClick={display}>Click</Button>
            <a href="https://google.com" onClick={(e)=>{e.preventDefault()}}>Go</a>
        </div>
    );
}

export default Navbar;