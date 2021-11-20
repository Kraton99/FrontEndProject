import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import PizzaCustom from './components/PizzaCustom/PizzaCustom';
import PizzasList from './components/PizzasList/PizzasList';
import Cart from "./components/Cart/Cart";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import { actionCreator } from "./store/actionCreator";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { bindActionCreators } from "redux";
import LoadingPage from './components/LoadingPage/LoadingPage';
import { CART_COOKIE } from './constraints/constraints';
import Cookies from 'universal-cookie/es6';
import './App.css';

function App() {
  const cookies = new Cookies();
  const dispacher = useDispatch();
    const {getPizzas, getIngredients, setLoadingPizzas, setLoadingIngredients, initCart} = bindActionCreators(actionCreator, dispacher);
    const loadingPizzas = useSelector(state => state.loadingPizzasReducer);
    const loadingIngredients = useSelector(state => state.loadingIngredientsReducer);

    useEffect(() => {
        const cart = cookies.get(CART_COOKIE);
        if(cart) {
          initCart(cart);
        }
        setLoadingPizzas(true);
        setLoadingIngredients(true);
        getPizzas();
        getIngredients();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  
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
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route  exact path='/about'>
          
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
