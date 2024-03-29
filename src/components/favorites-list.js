import React from "react";
import CourseCard from "./course.jsx";
const FavoritesList = ({ favorites, toggleFavoriteCourse, clear }) => {
  return (
    <div className="favorites-container">
      <h2 id="Label">Favorited Courses</h2>
      <div className="favorite-list">
        {favorites.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onFavoriteToggle={toggleFavoriteCourse}
          />
        ))}
      </div>
      <button onClick={clear}>Clear Favorites</button>
    </div>
  );
};
export default FavoritesList;
