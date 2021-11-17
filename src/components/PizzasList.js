import PizzaItem from "./PizzaItem";
import {useSelector} from "react-redux";

function PizzasList() {
    const pizzas = useSelector(state => state.pizzasReducer.pizzas);
    
    return (
        <div> 
            <div className='pw'>
                {pizzas.map(pizza => {
                return <PizzaItem key={pizza.id} pizza = {pizza}/>
                })}
            </div>
        </div>
    )
}

export default PizzasList