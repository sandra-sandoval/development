import React from "react";
const FilterByWrit = ({ writFilter, handleWritFilter }) => {
  return (
    <div className="filter">
      <h2>Filter by Writ</h2>
      <select
        value={writFilter}
        onChange={handleWritFilter}
        aria-label="Filter DropDown"
      >
        <option value={"All"}>All</option>
        <option value={"True"}>True</option>
        <option value={"False"}>False</option>
      </select>
    </div>
  );
};
export default FilterByWrit;
