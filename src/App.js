import React, { useState, useEffect } from "react";
import CourseCard from "./components/course"; // Importing CourseCard component
import courseData from "./assets/courseData.json";
import "./App.css";

const CourseSearchApp = () => {
  const [courses, setCourses] = useState(courseData);
  // const [updated, setUpdate] = useState([]);
  const [original, setOriginal] = useState(courseData);
  const [favorites, setFavorites] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [writ, setWrit] = useState([]);

  // const toggleFavoriteCourse = (courseId) => {
  //   const updatedCourses = courses.map((course) =>
  //     course.id === courseId
  //       ? { ...course, favorite: !course.favorite }
  //       : course
  //   );

  //   console.log({ updatedCourses });

  //   const updateFavorites = updatedCourses.filter((course) => course.favorite);
  //   setFavorites(updateFavorites);

  //   console.log({ updateFavorites });
  //   const updateCourses = updatedCourses.filter((course) => !course.favorite);
  //   setCourses(updateCourses);
  // };
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
  // const mergeCourses = () => {
  //   const allCourses = [...courses, ...favorites];
  //   // console.log("courses"   ...courses );
  //   console.log({ ...favorites });

  //   return allCourses;
  // };
  const clearFavorites = () => {
    // const favoriteCourses = courses.filter((course) => course.favorite);
    // setCourses(courses, ...favoriteCourses);
    // setCourses((courses) => [...courses, "hello"]);
    // let updated = [];
    // console.log(courses);
    // const update = courses.filter((course) => course.favorite === true);
    // updated.push(...update);
    // updated.push(...courses);
    // console.log(updated);
    // setCourses(updated);
    setCourses(original);
    setFavorites([]);
  };
  const resetFilters = () => {
    setCourses(original);
    setDepartmentFilter("All");
    setWrit("All");
  };
  // const handleFilter = (e, category) => {
  //   if (category === "dept") {
  //     const selectedDept =
  //       departmentFilter === "All" ? e.target.value : departmentFilter;
  //     setDepartmentFilter(selectedDept);
  //   }
  //   if (category === "writ") {
  //     const selectedWrit = writ === "All" ? e.target.value : writ;
  //     setWrit(selectedWrit);
  //   }

  //   // console.log({ selectedDept });
  //   // console.log({ selectedWrit });

  //   let filteredCourses = original;

  //   if (departmentFilter !== "All") {
  //     filteredCourses = filteredCourses.filter(
  //       (course) => course.Department === departmentFilter
  //     );
  //   }

  //   if (writ !== "All") {
  //     filteredCourses = filteredCourses.filter(
  //       (course) => course.WRIT === (writ === "True")
  //     );
  //   }

  //   setCourses(filteredCourses);
  // };

  // useEffect(() => {
  //   handleFilter();
  // }, [departmentFilter, writ]);

  return (
    <div>
      <h1>Course Manager</h1>
      <div id="filters-container">
        <div className="filter">
          <h2>Filter By Department</h2>
          <select value={departmentFilter} onChange={handleDepartmentFilter}>
            <option value={"All"}>All</option>
            <option value={"CSCI"}>CSCI</option>
            <option value={"BIOL"}>BIOL</option>
            <option value={"CHEM"}>CHEM</option>
            <option value={"HIST"}>HIST</option>
            <option value={"APMA"}>APMA</option>
            <option value={"HISP"}>HISP</option>
          </select>
        </div>
        <div className="filter">
          <h2>Filter by Writ</h2>
          <select value={writ} onChange={handleWritFilter}>
            <option value={"All"}>All</option>
            <option value={"True"}>True</option>
            <option value={"False"}>False</option>
          </select>
        </div>
        <button onClick={resetFilters}>Reset Filters</button>
      </div>
      <div className="course-list">
        {/* filtering out the favorited courses from the course list display */}
        {courses
          .filter((course) => !course.favorite)
          .map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onFavoriteToggle={toggleFavoriteCourse}
            />
          ))}
        {/* {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onFavoriteToggle={toggleFavoriteCourse}
          />
        ))} */}
        {/* <div className="filters">
          <h2>Filter By Department</h2>
          <select value={departmentFilter} onChange={handleDepartmentFilter}>
            <option value={"All"}>All</option>
            <option value={"CSCI"}>CSCI</option>
            <option value={"BIOL"}>BIOL</option>
            <option value={"CHEM"}>CHEM</option>
            <option value={"HIST"}>HIST</option>
            <option value={"APMA"}>APMA</option>
            <option value={"HISP"}>HISP</option>
          </select>
        </div>
        <div className="filters">
          <h2>Filter by Writ</h2>
          <select value={writ} onChange={handleWritFilter}>
            <option value={"All"}>All</option>
            <option value={"True"}>True</option>
            <option value={"False"}>False</option>
          </select>
        </div>
        <button onClick={resetFilters}>Reset Filters</button> */}
      </div>
      <div>
        <h2>Favorited Courses</h2>
        <div className="favorite-list">
          {favorites.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onFavoriteToggle={toggleFavoriteCourse}
            />
          ))}
        </div>
        <button onClick={clearFavorites}>Clear Favorites</button>
      </div>
    </div>
  );
};

export default CourseSearchApp;
