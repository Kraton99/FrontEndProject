import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import {useEffect} from 'react';
import { actionCreator } from '../store/actionCreator';
import SaucesList from './SaucesList';
import LoadingPage from './LoadingPage';
function PizzaCustom() {
    const dispacher = useDispatch();
    const {getSauces, setLoadingSauces} = bindActionCreators(actionCreator, dispacher);


    const {id} = useParams();
    const pizza = useSelector(state => state.pizzasReducer.pizzas.find(pizza => pizza.id === id));
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients);
    const sauces = useSelector(state => state.saucesReducer.sauces);
    const loadingSauces = useSelector(state => state.loadingSaucesReducer);

    useEffect(() => {
        setLoadingSauces(true);
        getSauces();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>{pizza.name}</h1>
            <div>
                <p>Składniki</p>
                {ingredients.filter(function(e) {
                return this.indexOf(e.id) > 0;
            }, pizza.ingredients).map(ingredien => {
                  return  <h1 key={ingredien.id}>{ingredien.name}</h1>
            })}</div>
            <div><h1>Dodatkowe dodatki</h1>
                {ingredients.map(ingredien => {
                    return (
                    <div key={ingredien.id}>
                        <p>{ingredien.name}</p>
                        <button>+</button>

                        <button>-</button>
                    </div>
                    );
                })}
            </div>
            <h2>Sosy</h2>
            {loadingSauces ? <LoadingPage /> : <SaucesList sauces = {sauces} />}
            <button disabled={loadingSauces}>Dodaj do koszyka</button>
        </div>
    )
}

export default PizzaCustom
