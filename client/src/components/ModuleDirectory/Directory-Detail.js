import { useEffect, useState } from "react";
import * as service from "../../services/index";
import FileResult from "../ModuleFiles/File-Result";
import { useDispatch, useSelector } from "react-redux";
import FileCreate from "../ModuleFiles/File-Create";
import { FileEarmarkTextFill } from "react-bootstrap-icons";
import Loading from "../Shared/Loading";

const DirectoryDetail = (props) => {
  const files = useSelector((state) => state.files);
  const iconStyle = { color: "#61AFEF", size: 28, className: "ml-2" };
  const dispath = useDispatch();
  const [loading, setLoading] = useState(false);
  /*Inicializando estado*/
  useEffect(() => {
    getFiles();
  }, []);
  /*Pedir ficheros relacionados con el directorio*/
  const getFiles = () => {
    const directory = props.name;
    service.getFiles(directory).then((response) => {
      const responseWithUrlServer = response.map((e) => {
        return (e = `http://localhost:8000/${directory}/${e.name}`);
      });
      dispath({
        type: "LIST_FILES",
        payload: responseWithUrlServer,
      });
    });
  };
  return (
    <div className="container mt-5">
      <h5>
        Directory {props.name}
        <FileEarmarkTextFill {...iconStyle} />
      </h5>
      {loading && <Loading text="Loading" />}
      <div className="row">
        <div className="col-md-8">
          <FileResult files={files} directory={props.name} />
        </div>
        <div className="col-md-4">
          <FileCreate directory={props.name} />
        </div>
      </div>
    </div>
  );
};

export default DirectoryDetail;
