import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './PizzaItem.css';
function PizzaItem({pizza}) {
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients);
    return (
            <tr className="pizzaItem"> 
                <td className="pizzaItemName">{pizza.name}
                <>{ingredients.filter(function(e) {
                    return this.indexOf(e.id) > 0;
                }, pizza.ingredients).map(ingredien => {
                    return  <span className="pizzaIngredients" key={ingredien.id}> {ingredien.name} </span>
                })}</>
                </td>
                    <td className="pizzaPrice">{pizza.price}</td>
                    <td className="orderPizza"><Link to={`/pizza/${pizza.id}`}><button>Zamów</button></Link></td>
            </tr>
    )
}

export default PizzaItem