import PizzaItem from "../PizzaItem/PizzaItem";
import {useSelector} from "react-redux";
import './PizzaList.css';
function PizzasList() {
    const pizzas = useSelector(state => state.pizzasReducer.pizzas);
    
    return (
            <ul className='pizzaList'>
                {pizzas.map(pizza => {
                return <PizzaItem key={pizza.id} pizza = {pizza}/>
                })}
            </ul>
    )
}

export default PizzasList