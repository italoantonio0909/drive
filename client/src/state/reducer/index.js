var initial = {
  directories: [],
  directoriesFilter: [],
  files: [],
};
const reducer = (state = initial, action) => {
  switch (action.type) {
    case "LIST_DIRECTORY": {
      return {
        ...state,
        directories: action.payload,
      };
    }
    case "CREATE_DIRECTORY": {
      return {
        ...state,
        directories: state.directories.concat({ name: action.payload }),
      };
    }
    case "FILTER_DIRECTORY": {
      const directoriesFilter = state.directories.filter((directory) =>
        directory.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        directoriesFilter,
      };
    }
    case "LIST_FILES": {
      console.log(action.payload);
      return { ...state, files: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
