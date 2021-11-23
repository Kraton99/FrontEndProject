import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './PizzaItem.css';
function PizzaItem({pizza}) {
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients);
    return (
            <li className="pizzaItem"> 
                <div className="pizzaItemName">
                    <div>
                        {pizza.name}
                        <>{ingredients.filter(function(e) {
                            return this.indexOf(e.id) > 0;
                        }, pizza.ingredients).map(ingredien => {
                            return  <span className="pizzaIngredients" key={ingredien.id}> {ingredien.name} </span>
                        })}</>
                    </div>
                </div>
                   <div className="pizzaPrice">{pizza.price}</div>
                  <Link className='orderPizza' to={`/pizza/${pizza.id}`}>Zamów</Link>
            </li>
    )
}

export default PizzaItem