import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import Web from "./images/web.jpg";
import "./Course.css";

const courseMap={
  Angular,
  Bootstrap,
  Ccsharp,
  Web,
};

function Course(courseName) {
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default Course;
