import React from "react";
import CourseCard from "./course.jsx";
const CourseList = ({ courses, toggleFavoriteCourse, viewMode }) => {
  return (
    <div className={viewMode === "list" ? "course-list" : "list-view"}>
      {courses
        .filter((course) => !course.favorite)
        .map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onFavoriteToggle={toggleFavoriteCourse}
            viewMode={viewMode}
          />
        ))}
    </div>
  );
};
export default CourseList;
