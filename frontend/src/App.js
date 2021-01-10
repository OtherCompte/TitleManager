import Header from "./components/layouts/Header"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/home/Home";
import Titles from "./components/titles/Titles";
import Error from "./components/pages/Error"
import Historic from "./components/historic/Historic"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/titles" component={Titles} />
          <Route exact path="/historic" component={Historic} />
          <Route component={Error}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
