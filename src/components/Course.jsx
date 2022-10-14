const Course = ({courseName, courseDescription}) => {
    return (
        <div>
            <h2>{courseName}</h2>
            <p>{courseDescription}</p>
            <hr />
        </div>
    );
};

export default Course;
