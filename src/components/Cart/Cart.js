import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from 'redux';
import {useState, useEffect} from 'react';
import { actionCreator} from '../../store/actionCreator';
import SaucesList from '../SaucesList/SaucesList';
import LoadingPage from "../LoadingPage/LoadingPage";
import axios from "axios"
import Order from "../../order";
import {CART_COOKIE, POST_ORDER} from "../../constraints/constraints";
import Cookies from "universal-cookie/es6";
function Cart() {
    
        const dispatcher = useDispatch();
        const {removeFromCart, getSauces, setLoadingSauces, initCart} = bindActionCreators(actionCreator, dispatcher);
        const cookies = new Cookies();

        const sauces = useSelector(state => state.saucesReducer.sauces);
        const loadingSauces = useSelector(state => state.loadingSaucesReducer);
        const cartItems = useSelector(state => state.cartReducer);
    

        const initPrice = () => {
            let cost = 0;
            console.log(cartItems);
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

        const [money, setMoney] = useState(0);

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
        
        const order = () => {
            console.log(cartItems.pizzas, cartItems.sauces, money);
            const order = new Order(cartItems.pizzas, cartItems.sauces, money);
            console.log(order);
            axios.request({
                method: 'POST',
                url: POST_ORDER,
                data: order
            }).then(response => {
                initCart({pizzas: [], sauces: []})
                cookies.remove(CART_COOKIE);
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
            cookies.remove(CART_COOKIE);
        }


        useEffect(() => {
            setLoadingSauces(true);
            getSauces();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        useEffect(() => {
            setMoney(initPrice());
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [cartItems])


        
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
            <button onClick={() => order()}>Zamów</button>
        </>
    )
}

export default Cart
