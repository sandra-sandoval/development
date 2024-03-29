import React, { useState, useEffect } from "react";
// import CourseCard from "./components/course.jsx";
import courseData from "./assets/courseData.json";
import CourseList from "./components/course-list";
import FavoritesList from "./components/favorites-list";
import TitleSearch from "./components/search-query";
import FilterByWrit from "./components/filter-writ";
import FilterByDept from "./components/filter-dept";
import "./App.css";

const CourseSearchApp = () => {
  const [courses, setCourses] = useState(courseData);
  const [original, setOriginal] = useState(courseData);
  const [favorites, setFavorites] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [writFilter, setWrit] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortValue, setSortValue] = useState([]);
  const [favoriteOpen, setFavoriteOpen] = useState(false);

  // const handleSortClicked = (e) => {
  //   const selectedSortOrder = e.target.value;
  //   setSortValue(selectedSortOrder);
  // };

  // const handleSort = () => {
  //   const sortedCourses = courses.slice().sort((course1, course2) => {
  //     if (sortValue === "asc") {
  //       return course1 - course2;
  //     } else return course2 - course1;
  //   });
  //   setCourses(sortedCourses);
  // };
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
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.length > 0) {
      const searched = courses.filter((course) =>
        course.Title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setCourses(searched);
    } else if (searchQuery === "") {
      setCourses(original);
    }
  };
  const toggleFavoriteCourse = (courseid) => {
    const updatedCourses = courses.map((course) =>
      course.id === courseid
        ? { ...course, favorite: !course.favorite }
        : course
    );
    setCourses(updatedCourses);
    const favoritedCourses = updatedCourses.filter(
      (course) => course.favorite === true
    );
    setFavorites(favoritedCourses);
  };

  const handleDepartmentFilter = (e) => {
    const selectedDept = e.target.value;
    setDepartmentFilter(selectedDept);
    if (selectedDept === "All") {
      setCourses(original);
    } else {
      const filteredByDept = original.filter(
        (course) => course.Department === selectedDept
      );
      setCourses(filteredByDept);
    }
  };
  const handleWritFilter = (e) => {
    const selectedWrit = e.target.value;
    setWrit(selectedWrit);
    if (selectedWrit === "All") {
      setCourses(original);
    } else {
      const filterWrit = original.filter(
        (course) => course.WRIT === selectedWrit
      );
      console.log(filterWrit);
      setCourses(filterWrit);
    }
  };
  const clearFavorites = () => {
    setCourses(original);
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
      {/* <nav>
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
      </nav> */}
      <body>
        <section id="side-bar">
          {/* <div id="filters-container"> */}
          <FilterByDept
            departmentFilter={departmentFilter}
            handleDepartmentFilter={handleDepartmentFilter}
          ></FilterByDept>
          <FilterByWrit
            writFilter={writFilter}
            handleWritFilter={handleWritFilter}
          ></FilterByWrit>
          <button onClick={sortByRating}>Sort By Rating</button>

          <button onClick={resetFilters}>Reset All</button>
          {/* </div> */}
        </section>
        <CourseList
          courses={courses}
          toggleFavoriteCourse={toggleFavoriteCourse}
        ></CourseList>
      </body>
      {favoriteOpen && (
        <FavoritesList
          favorites={favorites}
          toggleFavoriteCourse={toggleFavoriteCourse}
          clear={clearFavorites}
        />
      )}
    </div>
  );
};

export default CourseSearchApp;
