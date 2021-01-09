import { Search } from "react-bootstrap-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";

const DirectorySearch = () => {
  const searchStyle = { width: "50%" };
  const dispatch = useDispatch();
  const filterDirectory = (e) => {
    dispatch({
      type: "FILTER_DIRECTORY",
      payload: e.target.value,
    });
  };
  return (
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto"></ul>
      <form className="form-inline my-2 my-lg-0">
        <div className="form-group">
          <input
            onChange={filterDirectory}
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
        </div>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
          <Search></Search>
        </button>
      </form>
    </div>
  );
};

export default DirectorySearch;
