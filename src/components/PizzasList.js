import PizzaItem from "./PizzaItem";
import { actionCreator } from "../store/actionCreator";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { bindActionCreators } from "redux";

function PizzasList() {
    const dispacher = useDispatch();
    const {getPizzas, getIngredients} = bindActionCreators(actionCreator, dispacher);

    useEffect(() => {
        getPizzas();
        getIngredients();
      
    }, []);
    const pizzas = useSelector(state => state.pizzasReducer.pizzas);
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients);
    
    return (
        <div> 
            <div className='pw'>
                {pizzas && pizzas.map(pizza => {
                return <PizzaItem key={pizza.id} pizza = {pizza}/>
                })}
            </div>
        </div>
    )
}

export default PizzasList