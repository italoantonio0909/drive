import { useEffect } from "react";
import * as service from "../../services";
import DirectoryList from "./Directory-List";
import { useDispatch, useSelector } from "react-redux";

const DirectoryResults = () => {
  const directoriesFilter = useSelector((state) => state.directoriesFilter);
  const directories = useSelector((state) => {
    if (directoriesFilter.length > 0) {
      return directoriesFilter;
    } else {
      return state.directories;
    }
  });

  const dispatch = useDispatch();
  useEffect(() => {
    getDirectories();
  }, []);
  /*Obtengo los directorios y despacho la acción.*/
  const getDirectories = () => {
    service.getDirectories().then((directories) =>
      dispatch({
        type: "LIST_DIRECTORY",
        payload: directories,
      })
    );
  };
  return (
    <div className="row">
      {directories &&
        directories.map((directory) => (
          <DirectoryList key={directory.name} directory={directory} />
        ))}
    </div>
  );
};
export default DirectoryResults;
