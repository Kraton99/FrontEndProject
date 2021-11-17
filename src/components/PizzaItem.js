import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
function PizzaItem({pizza}) {
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients);
    return (
        <div> 
            <div>
            {pizza.name}
            </div>
            <div>{ingredients.filter(function(e) {
                return this.indexOf(e.id) > 0;
            }, pizza.ingredients).map(ingredien => {
                  return  <h1 key={ingredien.id}>{ingredien.name}</h1>
            })}</div>
            <Link to={`/pizza/${pizza.id}`}><button>Zamów</button></Link>
        </div>
    )
}

export default PizzaItem