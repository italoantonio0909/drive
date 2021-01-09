import "./index.css";
import { useEffect, useState } from "react";
import * as service from "../../services";
import { File, FileEarmarkTextFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import Button from "../Shared/Button";

const DirectoryCreate = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const iconStyle = { color: "#61AFEF", size: 28, className: "ml-2" };
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const data = { name: name };
    service
      .createDirectory(data)
      .then((directory) =>
        dispatch({
          type: "CREATE_DIRECTORY",
          payload: directory,
        })
      )
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <form action="" className="mt-3" onSubmit={submit}>
      <div className="form-group">
        {error && <div className="alert alert-danger">{error}</div>}
        <input
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
          value={name}
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <Button onClick={submit}>
          {"Create directory"}
          <FileEarmarkTextFill {...iconStyle} />
        </Button>
      </div>
    </form>
  );
};

export default DirectoryCreate;
