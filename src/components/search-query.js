import React from "react";

const TitleSearch = ({ handleSubmit, searchQuery, handleSearch }) => {
  return (
    <div id="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by Title"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default TitleSearch;
