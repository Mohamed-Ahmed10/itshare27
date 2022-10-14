const View = () => {
    var courses = ["HTML", "CSS", "JS", "SASS", "JSON", "Ajax", "React"];
    return (
        <ul>
            {courses.map((course, index) => (
                <li className="course" key={index}>
                    {course}
                </li>
            ))}
        </ul>
    );
};

export default View;
