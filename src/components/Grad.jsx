const Grad = () => {

    var age = 2;

    var personalData = {
        name: "Ali",
        gender: "male",
    };
    return (
        <div>
            {age > 18 
            ? 
                <div>
                    <div>Data user name is : {personalData.name}</div>
                    <div>Data user gender is : {personalData.gender}</div>
                </div>
            :
                <div>You are under 18 not allowed to know this</div>
            }


            {age > 18 &&
                <div>
                    <div>Data user name is : {personalData.name}</div>
                    <div>Data user gender is : {personalData.gender}</div>
                </div>
            }
        </div>
    );
};

export default Grad;
