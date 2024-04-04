import React from "react";
import "./course.css";
const CourseCard = ({ course, onFavoriteToggle, viewMode, onSelect }) => {
  const { Title, Department, num, WRIT, Rating, image, favorite } = course;

  return (
    <div className={viewMode === "list" ? "course" : "list-container"}>
      <div className={viewMode === "list" ? "course-card" : "course-list"}>
        <h2>{Title}</h2>
        {viewMode === "list" && (
          <div className="course-details">
            <img src={image} alt="Course icon"></img>
            <p>Department: {Department}</p>
            <p>Course #: {num}</p>
            <p> WRIT : {WRIT}</p>
            <p>Rating: {Rating}</p>
          </div>
        )}
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
