import "./index.css";
import { FolderFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const DirectoryList = ({ directory }) => {
  const iconStyle = { color: "#61AFEF", size: 30 };

  return (
    <div className="card border-secondary m-3">
      <div className="card-header">
        {directory.name}
        <h2>
          <Link to={`/drive/directory/${directory.name}`}>
            <FolderFill {...iconStyle} />
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default DirectoryList;
