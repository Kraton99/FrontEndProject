import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import { useState} from 'react';
import { actionCreator} from '../../store/actionCreator';
import AdditionalIngredients from '../AdditionalIngredients/AdditionalIngredients';
import "./PizzaCustom.css"
function PizzaCustom() {
    const dispacher = useDispatch();
    const {addToCart} = bindActionCreators(actionCreator, dispacher);


    const {id} = useParams();

    const pizza = useSelector(state => state.pizzasReducer.pizzas.find(pizza => pizza.id === id));
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients);


    const [additionalIngredients, setAdditionalIngredneints] = useState([]);
    const [money, setMoney] = useState(pizza.price);

    const collectToCart = (pizza, additionalIng) => {
        window.alert(pizza.name + " dodana do koszyka.");
        addToCart(pizza, additionalIng);
    }
    
    return (
        <div className="custom">
            <div className="pizza">
                    <div>
                    {pizza.name}
                    {ingredients.filter(function(e) {
                        return this.indexOf(e.id) > 0;
                    }, pizza.ingredients).map(ingredient => {
                        return  <span className="pizzaIngredients" key={ingredient.id}> {ingredient.name} </span>
                    })}
                </div>
                <span className="price">Cena: {money}</span>
                <button className="orderPizza" onClick={() => collectToCart(pizza, additionalIngredients)}>Dodaj do koszyka</button>
            </div>
            <AdditionalIngredients setMoney={setMoney} money={money} setAdditionalIngredneints={setAdditionalIngredneints} additionalIngredients={additionalIngredients} ingredients={ingredients}/>
        </div>
    )
}

export default PizzaCustom
