import React from "react";

const TitleSearch = ({ handleSubmit, searchQuery, handleSearch }) => {
  return (
    <div className="search">
      <form onSubmit={handleSubmit} aria-label="Search">
        <input
          type="text"
          placeholder="Search by Title"
          value={searchQuery}
          onChange={handleSearch}
          label="Search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default TitleSearch;
