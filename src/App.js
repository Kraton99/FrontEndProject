import Header from './components/Header'
import Nav from './components/Nav';
import PizzaCustom from './components/PizzaCustom';
import PizzasList from './components/PizzasList';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header />
        <Nav />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/store' />
        </Route>
        <Route exact path ='/store'>
          {<PizzasList/>}
        </Route>
        <Route exact path = '/pizza/:id'>
          {<PizzaCustom />}
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
