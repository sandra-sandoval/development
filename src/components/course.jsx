import React from "react";

const CourseCard = ({ course, onFavoriteToggle }) => {
  const { Title, Department, num, WRIT, Rating, favorite } = course;

  return (
    <div className="course-card">
      <h2>{Title}</h2>
      {/* <p>Professor: {professor}</p> */}
      <p>Department: {Department}</p>
      <p>Course #: {num}</p>
      <p> WRIT : {WRIT ? "True" : "False"}</p>
      <p>Rating: {Rating}</p>
      <button onClick={() => onFavoriteToggle(course.id)}>
        {favorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default CourseCard;
