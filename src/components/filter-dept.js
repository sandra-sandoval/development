import React from "react";

const FilterByDept = ({ departmentFilter, handleDepartmentFilter }) => {
  return (
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
  );
};
export default FilterByDept;
