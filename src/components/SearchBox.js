import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <search className="p2">
      <input
        className="pa3 ma2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robot"
        onChange={searchChange}
      />
    </search>
  );
};
export default SearchBox;
