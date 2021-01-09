import { useEffect } from "react";
import * as service from "../../services/index";
import FileResult from "../ModuleFiles/File-Result";
import { useDispatch, useSelector } from "react-redux";
import FileCreate from "../ModuleFiles/File-Create";

const DirectoryDetail = (props) => {
  const files = useSelector((state) => state.files);
  const dispath = useDispatch();
  useEffect(() => {
    getFiles();
  }, []);
  /*Pedir ficheros relacionados con el directorio*/
  const getFiles = () => {
    const directory = props.name;
    service.getFiles(directory).then((response) => {
      dispath({
        type: "LIST_FILES",
        payload: response,
      });
    });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <FileResult files={files} />
        </div>
        <div className="col-md-4">
          <FileCreate />
        </div>
      </div>
    </div>
  );
};

export default DirectoryDetail;
