import Header from "./components/layouts/Header"
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import Home from "./components/home/Home";
import Titles from "./components/titles/Titles";
import Historics from "./components/historic/Historics"
import HistoricId from "./components/historic/HistoricId"


function App() {
  return (
    //Le Router permet d'ajouter nos routes
    <Router>
      <div className="App">
        {/* Affichage du Header sur toutes les pages */}
        <Header />
        {/* Permet de switcher entre les pages */}
        <Switch>

          {/* La page d'accueil */}
          <Route exact path="/" component={Home} />

          {/* Affichage de la page Titles, page de l'outil de recherche*/}
          <Route exact path="/titles" component={Titles} />

          {/* Affichage de la page historique, page de dashboard, avec l'élément Historic */}
          <Route exact path="/historics" component={Historics} />

          <Route exact path="/historic/:id" component={HistoricId} />

          {/* Page d'erreur en cas d'url non trouvé */}
          <Redirect to={"/"}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
