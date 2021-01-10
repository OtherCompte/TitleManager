import Header from "./components/layouts/Header"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/home/Home";
import Titles from "./components/titles/Titles";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/titles" component={Titles} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
