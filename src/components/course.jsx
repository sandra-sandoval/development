import React from "react";
import "./course.css";
// import "/Users/sandrasandoval/Desktop/cs1300/development/src/components/course.css";

const CourseCard = ({ course, onFavoriteToggle, viewMode }) => {
  const { Title, Department, num, WRIT, Rating, favorite } = course;

  return (
    <div className={viewMode === "list" ? "course" : "list-container"}>
      <div className={viewMode === "list" ? "course-card" : "course-list"}>
        <h2>{Title}</h2>
        {viewMode === "list" && (
          <div className="course-details">
            <p>Department: {Department}</p>
            <p>Course #: {num}</p>
            <p> WRIT : {WRIT}</p>
            <p>Rating: {Rating}</p>
          </div>
        )}
        {/* <p>
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
        </p> */}
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
