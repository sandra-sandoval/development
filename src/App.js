import React, { useState, useEffect } from "react";
import CourseCard from "./components/course"; // Importing CourseCard component
import courseData from "./assets/courseData.json";

const CourseSearchApp = () => {
  const [courses, setCourses] = useState(courseData);
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
    // setCourses(filterDept);
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
  return (
    <div>
      <h1>Course Search</h1>
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
        <div className="filters">
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
      </div>
    </div>
  );
};

export default CourseSearchApp;
