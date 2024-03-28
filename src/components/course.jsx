import React from "react";
import "./course.css";
// import "/Users/sandrasandoval/Desktop/cs1300/development/src/components/course.css";

const CourseCard = ({ course, onFavoriteToggle }) => {
  const { Title, Department, num, WRIT, Rating, favorite } = course;

  return (
    <div className="course">
      <div className="course-card">
        <h2>{Title}</h2>
        {/* <p>Professor: {professor}</p> */}
        <p>
          <span span style={{ fontWeight: "bold" }}>
            {" "}
            Department:
          </span>{" "}
          {Department}
        </p>
        <p>
          <span span style={{ fontWeight: "bold" }}>
            {" "}
            Course # :
          </span>{" "}
          {num}
        </p>
        <p>
          {" "}
          <span span style={{ fontWeight: "bold" }}>
            {" "}
            WRIT:
          </span>{" "}
          {WRIT}
        </p>
        <p>
          <span span style={{ fontWeight: "bold" }}>
            {" "}
            Rating:
          </span>{" "}
          {Rating}
        </p>
      </div>
      <div className="favorite-button">
        <button onClick={() => onFavoriteToggle(course.id)}>
          {favorite ? "Remove" : "Favorite"}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
