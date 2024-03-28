import React from "react";
import CourseCard from "./course.jsx";
const CourseList = ({ courses, toggleFavoriteCourse }) => {
  return (
    <div className="course-list">
      {courses
        .filter((course) => !course.favorite)
        .map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onFavoriteToggle={toggleFavoriteCourse}
          />
        ))}
    </div>
  );
};
export default CourseList;
