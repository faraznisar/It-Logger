import React from "react";

const SearchBar = () => {
  return <div>
      <nav style={{marginBottom:"30px"}} className="blue">
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" type="search" >
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  </div>;
};

export default SearchBar;
