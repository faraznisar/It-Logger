import React, {Fragment} from "react";

const SearchBar = () => {
  return (
      <Fragment>
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
  </nav></Fragment>)
};

export default SearchBar;
