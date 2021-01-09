import Button from "../Shared/Button";
import { CloudUploadFill } from "react-bootstrap-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as service from "../../services";

const FileCreate = (props) => {
  /*Definiendo los estilos*/
  const style = {
    iconStyle: {
      color: "#61AFEF",
      width: "28px",
      height: "28px",
      marginLeft: "7px",
    },
    imageCustom: {
      width: "200px",
      height: "200px",
      borderRadius: "10px",
      cursor: "pointer",
    },
  };
  /*Uso del estado*/
  const [file, setFile] = useState(null);
  const [photo, setPhoto] = useState(null);
  const dispatch = useDispatch();
  /*Envio del formulario*/
  const submit = (e) => {
    e.preventDefault();
    const formUploadFile = new FormData();
    formUploadFile.append("uploadFile", file);
    service
      .uploadFile(formUploadFile, props.directory)
      .then((response) => {
        const responseMuted = `http://localhost:8000/${props.directory}/${response}`;
        dispatch({
          type: "CREATE_FILE",
          payload: responseMuted,
        });
        setFile(null);
      })
      .catch((error) => console.log(error));
  };
  /*Select file*/
  const photoSelected = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result);
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  /*Open media desktop*/
  const openMedia = () => {
    const file = document.getElementById("media");
    file.click();
  };
  /*Componente*/
  return (
    <form className="mt-5">
      <div className="form-group text-center">
        <img
          style={style.imageCustom}
          src={file ? photo : "/no-image.png"}
          alt=""
          onClick={openMedia}
        />
        <input
          id="media"
          onChange={photoSelected}
          type="file"
          hidden
          className="form-control"
        />
      </div>
      <div className="form-group">
        <Button
          type={file ? "submit" : "button"}
          onClick={file ? submit : openMedia}
        >
          {file ? "Upload file" : "Open media desktop"}
          <CloudUploadFill style={style.iconStyle} />
        </Button>
      </div>
    </form>
  );
};

export default FileCreate;
