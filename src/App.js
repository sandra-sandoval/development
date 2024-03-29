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
  const [original, setOriginal] = useState(courseData);
  const [courses, setCourses] = useState(original);
  const [favorites, setFavorites] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [writFilter, setWrit] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteOpen, setFavoriteOpen] = useState(true);
  const [viewMode, setViewMode] = useState("list");

  const filterCourses = () => {
    let filteredCourses = original.slice();

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
    // e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (searchQuery.length > 0) {
    //   const searched = courses.filter((course) =>
    //     course.Title.toLowerCase().includes(searchQuery.toLowerCase())
    //   );
    //   setCourses(searched);
    // } else if (searchQuery === "") {
    //   setCourses(original);
    // }
  };
  const toggleFavoriteCourse = (courseid) => {
    const updatedCourses = courses.map((course) =>
      course.id === courseid
        ? { ...course, favorite: !course.favorite }
        : course
    );

    const updatedFavorites = updatedCourses.filter(
      (course) => course.favorite === true
    );

    const updatedOriginal = original.map((course) =>
      course.id === courseid
        ? { ...course, favorite: !course.favorite }
        : course
    );
    setCourses(updatedCourses);

    const allFavorites = [...favorites, ...updatedFavorites];

    // Filters out duplicate courses from favorites
    const uniqueFavorites = allFavorites.filter(
      (course, index, self) =>
        index === self.findIndex((card) => card.id === course.id)
    );
    setFavorites(uniqueFavorites);
  };

  const handleDepartmentFilter = (e) => {
    const selectedDept = e.target.value;
    setDepartmentFilter(selectedDept);
    // if (selectedDept === "All") {
    //   setCourses(original);
    // } else {
    //   const filteredByDept = original.filter(
    //     (course) => course.Department === selectedDept
    //   );
    //   setCourses(filteredByDept);
    // }
  };
  const handleWritFilter = (e) => {
    const selectedWrit = e.target.value;
    setWrit(selectedWrit);
    // if (selectedWrit === "All") {
    //   setCourses(original);
    // } else {
    //   const filterWrit = original.filter(
    //     (course) => course.WRIT === selectedWrit
    //   );
    //   console.log(filterWrit);
    //   setCourses(filterWrit);
    // }
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
      {favoriteOpen && (
        <FavoritesList
          favorites={favorites}
          toggleFavoriteCourse={toggleFavoriteCourse}
          clear={clearFavorites}
          viewMode={viewMode}
        />
      )}
    </div>
  );
};

export default CourseSearchApp;
