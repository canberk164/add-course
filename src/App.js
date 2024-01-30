import "./App.css";
import Course from "./Course";
import { useState } from "react";

function getRandomCourse() {
  const courseArray = ["Angular, Bootstrap, Ccsharp, Web"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]); //keep last courses
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Add Course</button>
      <div>{courseList}</div>
    </div>
  );
}

export default App;
