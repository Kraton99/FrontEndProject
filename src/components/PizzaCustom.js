import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
function PizzaCustom() {
    const {id} = useParams();
    const pizza = useSelector(state => state.pizzasReducer.pizzas.find(pizza => pizza.id === id));
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients)
    return (
        <div>
            <h1>{pizza.name}</h1>
        </div>
    )
}

export default PizzaCustom
