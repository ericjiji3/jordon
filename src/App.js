import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Videos from './pages/Videos';
import Stages from './pages/Stages';

function App() {
  return (
    <div className="container-fluid">
      <div className = "row">
        <div className = "header">
          <Header/>
        </div>
      </div>
      <div className = "afterHeader row">
      <Router>
          <Switch>
            <Route path = '/videos' component = {Videos}/>
            <Route path = '/shop' component = {Shop}/>
            <Route path = '/about' component = {About}/>
            <Route path = '/stages' component = {Stages}/>
            <Route path = '/' exact component = {Home}/>
          </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
