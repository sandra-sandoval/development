import React from "react";
import CourseCard from "./course.jsx";
const FavoritesList = ({
  favorites,
  toggleFavoriteCourse,
  clear,
  viewMode,
}) => {
  return (
    <div className="favorites-container">
      <h2 id="Label">Favorited Courses : {favorites.length}</h2>
      <div className="favorite-list">
        {favorites.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onFavoriteToggle={toggleFavoriteCourse}
            viewMode={viewMode}
          />
        ))}
      </div>
      <button onClick={clear}>Clear Favorites</button>
    </div>
  );
};
export default FavoritesList;
