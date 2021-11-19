import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from 'redux';
import {useState, useEffect} from 'react';
import { actionCreator} from '../store/actionCreator';
import SaucesList from './SaucesList';
import LoadingPage from "./LoadingPage";
function Cart() {
    
        const dispatcher = useDispatch();
        const {removeFromCart, getSauces, setLoadingSauces} = bindActionCreators(actionCreator, dispatcher);

        const sauces = useSelector(state => state.saucesReducer.sauces);
        const loadingSauces = useSelector(state => state.loadingSaucesReducer);
        const cartItems = useSelector(state => state.cartReducer);
    

        const initPrice = () => {
            let cost = 0;
            cartItems.pizzas.forEach(item => {
                cost += item.pizza.price;
                item.ingredients.forEach(ingredient => {
                    cost += ingredient.price;
                })
            });
            cartItems.sauces.forEach(sauce => {
                cost += sauce.price;
            })
            return cost;
        }

        const [money, setMoney] = useState(initPrice());

        const removePizza = (aIndex, aCost) => {
            setMoney(money - aCost);
            removeFromCart(aIndex);
        }

        const calculateCost = (aItem) => { 
            let cost = aItem.pizza.price;
            aItem.ingredients.forEach(ingredient => {
                cost += ingredient.price;
            })
            return cost;
        }


        useEffect(() => {
            setLoadingSauces(true);
            getSauces();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);


        
    return (
        <>
            <h1>Koszyk Cena: {money}</h1>
            { 
            cartItems.pizzas.length > 0 ? cartItems.pizzas.map((item, index) => {
                return (
                    <div key={index}>
                        <div >{item.pizza.name}</div>
                        <button onClick={() => removePizza(index, calculateCost(item))}>delete</button>
                    </div>
                )
            }) : <h1>Twój koszyk jest pusty</h1>}
            {loadingSauces ? <LoadingPage /> : <SaucesList sauces = {sauces} setMoney={setMoney} money={money} />}
        </>
    )
}

export default Cart
