import FileList from "./File-List";

const ListResults = (props) => {
  return (
    <div className="row">
      {props.files &&
        props.files.map((file) => (
          <FileList directory={props.directory} file={file} />
        ))}
    </div>
  );
};

export default ListResults;
