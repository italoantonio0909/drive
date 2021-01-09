import DirectoryCreate from "./Directory-Create";
import DirectoryResults from "./Directory-Results";

const Directory = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <DirectoryResults />
        </div>
        <div className="col-md-4">
          <DirectoryCreate />
        </div>
      </div>
    </div>
  );
};

export default Directory;
