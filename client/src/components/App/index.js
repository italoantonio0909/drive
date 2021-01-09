import DirectoryDetail from "../ModuleDirectory/Directory-Detail";
import Directory from "../ModuleDirectory/Directory";
import Navbar from "../Navbar";
import store from "../../state/store";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import "./index.css";

const App = () => {
  function DirectoryDetailParam() {
    let { name } = useParams();
    return <DirectoryDetail name={name} />;
  }
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/drive/directory/:name"
            children={<DirectoryDetailParam />}
          />
          <Route exact path="/" component={Directory} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
