import React, { useState, useEffect } from "react";
// import CourseCard from "./components/course.jsx";
import courseData from "./assets/courseData.json";
import CourseList from "./components/course-list";
import FavoritesList from "./components/favorites-list";
import TitleSearch from "./components/search-query";
import FilterByWrit from "./components/filter-writ";
import FilterByDept from "./components/filter-dept";
import "./App.css";

courseData.forEach((course) => {
  course.image = process.env.PUBLIC_URL + "/" + course.image;
});

const CourseSearchApp = () => {
  const [original, setOriginal] = useState(courseData);
  const [courses, setCourses] = useState(original);
  const [favorites, setFavorites] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [writFilter, setWrit] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteOpen, setFavoriteOpen] = useState(true);
  const [viewMode, setViewMode] = useState("list");

  const filterCourses = () => {
    let filteredCourses = original;

    if (departmentFilter !== "All") {
      filteredCourses = filteredCourses.filter(
        (course) => course.Department === departmentFilter
      );
    }
    if (writFilter !== "All") {
      filteredCourses = filteredCourses.filter(
        (course) => course.WRIT === writFilter
      );
    }
    if (searchQuery) {
      filteredCourses = filteredCourses.filter((course) =>
        course.Title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filteredCourses;
  };

  useEffect(() => {
    const filtered = filterCourses();
    setCourses(filtered);
  }, [original, departmentFilter, writFilter, searchQuery]);

  const toggleView = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };
  const toggleFavoriteOpen = () => {
    setFavoriteOpen(!favoriteOpen);
  };

  const sortByRating = () => {
    const sortedCourses = courses
      .slice()
      .sort((course1, course2) => course2.Rating - course1.Rating);
    setCourses(sortedCourses);
    console.log(courses);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const toggleFavoriteCourse = (courseid) => {
    const updatedCourses = original.map((course) =>
      course.id === courseid
        ? { ...course, favorite: !course.favorite }
        : course
    );
    setOriginal(updatedCourses);
    setCourses(updatedCourses);
    const updatedFavorites = updatedCourses.filter(
      (course) => course.favorite === true
    );
    setFavorites(updatedFavorites);
  };
  const handleDepartmentFilter = (e) => {
    const selectedDept = e.target.value;
    setDepartmentFilter(selectedDept);
  };
  const handleWritFilter = (e) => {
    const selectedWrit = e.target.value;
    setWrit(selectedWrit);
  };
  const clearFavorites = () => {
    setOriginal(courseData);
    setCourses(courseData);
    setFavorites([]);
  };
  const resetFilters = () => {
    setCourses(original);
    setDepartmentFilter("All");
    setWrit("All");
    setSearchQuery("");
  };
  return (
    <div>
      <header>
        <h1>Course Manager</h1>
        <section id="navigation">
          <TitleSearch
            handleSubmit={handleSubmit}
            searchQuery={searchQuery}
            handleSearch={handleSearch}
          ></TitleSearch>
          <button id="favorite-button" onClick={toggleFavoriteOpen}>
            {favoriteOpen ? "Hide Favorites" : "View Favorites"}
          </button>
        </section>
      </header>
      <body>
        <section id="side-bar">
          <FilterByDept
            departmentFilter={departmentFilter}
            handleDepartmentFilter={handleDepartmentFilter}
          ></FilterByDept>
          <FilterByWrit
            writFilter={writFilter}
            handleWritFilter={handleWritFilter}
          ></FilterByWrit>
          <button onClick={sortByRating}>Sort By Rating</button>
          <button onClick={toggleView}>
            {viewMode === "grid" ? "grid view" : "list view"}{" "}
          </button>
          <button onClick={resetFilters}>Reset All</button>
        </section>
        <CourseList
          courses={courses}
          toggleFavoriteCourse={toggleFavoriteCourse}
          viewMode={viewMode}
        ></CourseList>
      </body>
      <hr class="splitter" />
      {favoriteOpen && (
        <FavoritesList
          favorites={favorites}
          toggleFavoriteCourse={toggleFavoriteCourse}
          clear={clearFavorites}
          viewMode={viewMode}
        />
      )}
      <footer> Made by Sandra Sandoval</footer>
    </div>
  );
};

export default CourseSearchApp;
