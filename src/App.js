import Header from './components/Header'
import Nav from './components/Nav';
import PizzaCustom from './components/PizzaCustom';
import PizzasList from './components/PizzasList';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import { actionCreator } from "./store/actionCreator";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { bindActionCreators } from "redux";
import LoadingPage from './components/LoadingPage';

function App() {

  const dispacher = useDispatch();
    const {getPizzas, getIngredients, setLoadingPizzas, setLoadingIngredients} = bindActionCreators(actionCreator, dispacher);
    const loadingPizzas = useSelector(state => state.loadingPizzasReducer);
    const loadingIngredients = useSelector(state => state.loadingIngredientsReducer);

    useEffect(() => {
        setLoadingPizzas(true);
        setLoadingIngredients(true);
        getPizzas();
        getIngredients();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  console.log(loadingIngredients + " " + loadingPizzas);
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
          {loadingPizzas || loadingIngredients ?  <LoadingPage /> : <PizzasList />}
        </Route>
        <Route exact path = '/pizza/:id'>
          {loadingPizzas || loadingIngredients ? <LoadingPage /> : <PizzaCustom />}
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
