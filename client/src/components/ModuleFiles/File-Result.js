import FileList from "./File-List";

const ListResults = ({ files }) => {
  return (
    <div className="row">
      {files && files.map((file) => <FileList file={file} />)}
    </div>
  );
};

export default ListResults;
