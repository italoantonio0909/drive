const FilesList = ({ file }) => {
  return (
    <div className="card border-secondary m-3">
      <div className="card-header">
        {file.name}
        <h2></h2>
      </div>
    </div>
  );
};
export default FilesList;
