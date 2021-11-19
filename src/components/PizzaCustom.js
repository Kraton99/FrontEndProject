import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import { useState} from 'react';
import { actionCreator} from '../store/actionCreator';
import AdditionalIngredients from './AdditionalIngredients';
import { Link } from "react-router-dom";
function PizzaCustom() {
    const dispacher = useDispatch();
    const {addToCart} = bindActionCreators(actionCreator, dispacher);


    const {id} = useParams();

    const pizza = useSelector(state => state.pizzasReducer.pizzas.find(pizza => pizza.id === id));
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients);


    const [additionalIngredients, setAdditionalIngredneints] = useState([]);
    const [money, setMoney] = useState(pizza.price);

    const collectToCart = (pizza, additionalIng) => {
        addToCart(pizza, additionalIng);
    }
    
    return (
        <div>
            <h1>{pizza.name}</h1>
            <h2>Money: {money}</h2>
            <div>
                <p>Składniki</p>
                {ingredients.filter(function(e) {
                return this.indexOf(e.id) > 0;
            }, pizza.ingredients).map(ingredient => {
                  return  <h1 key={ingredient.id}>{ingredient.name}</h1>
            })}</div>
            <AdditionalIngredients setMoney={setMoney} money={money} setAdditionalIngredneints={setAdditionalIngredneints} additionalIngredients={additionalIngredients} ingredients={ingredients}/>
            <button onClick={() => collectToCart(pizza, additionalIngredients)}>Dodaj do koszyka</button>
            <Link to={`/cart`}><button>KOSZYK</button></Link>
        </div>
    )
}

export default PizzaCustom
