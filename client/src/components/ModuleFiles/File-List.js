const FilesList = (props) => {
  const style = {
    avatar: {
      width: "200px",
      height: "200px",
      borderRadius: "7px",
    },
  };
  return (
    <div className="card border-secondary m-3">
      <img style={style.avatar} src={props.file} alt="" />
    </div>
  );
};
export default FilesList;
