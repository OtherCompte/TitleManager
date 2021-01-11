import Header from "./components/layouts/Header"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/home/Home";
import Titles from "./components/titles/Titles";
import Error from "./components/pages/Error"
import Historic from "./components/historic/Historic"

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
          <Route exact path="/historic" component={Historic} />

          {/* Page d'erreur en cas d'url non trouvé */}
          <Route component={Error}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
