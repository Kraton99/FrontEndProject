import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from 'redux';
import { actionCreator} from '../../store/actionCreator';
import "./Sauces.css"
import "../AdditionalIngredients/AdditionalIngredients.css"
function SaucesList(props) {
    const dispatcher = useDispatch();
    const cartSauces = useSelector(state => state.cartReducer.sauces);
    const [saucesList, setSauces] = useState([...cartSauces]);
    const {addSauce, removeSauce, removeAllSauces} = bindActionCreators(actionCreator, dispatcher);

    const cRemoveSauce = (sauce) => {
        if(saucesList.filter(element => element.id === sauce.id).length > 0) {
            const id = saucesList.findIndex(element => element.id === sauce.id);
                const copy = [...saucesList];
                copy.splice(id, 1);
            setSauces(copy);
            props.setMoney(props.money - sauce.price);
            removeSauce(sauce);
        }
    }

    const cAddSauce = (sauce) => {
        props.setMoney(props.money + sauce.price);
                setSauces(prev => [...prev, sauce]);
        addSauce(sauce);
    }

    const cRemoveAllSauces = () => {
        let lessMoney = 0;
        saucesList.forEach(element => {
           lessMoney += element.price;
        });
        props.setMoney(props.money - lessMoney);
        setSauces([]);
        removeAllSauces();
    }

    useEffect(() => {
        setSauces([...cartSauces]);
    }, [cartSauces])
  
    return (
        <>
            <button className="deleteSauces"onClick={() => cRemoveAllSauces()}>Usuń wszystkie sosy</button>
        <ul className="saucesList">
            {props.sauces.map(sauce => {
                return (
                    <li className="sauce" key={sauce.id}>
                        <div className="itemName">{sauce.name}: {sauce.price} zł</div>
                            <div className="itemCounter">
                                <button className="count"onClick={() => cAddSauce(sauce)}>+</button>
                                <p className="countValue">{saucesList.filter(element => element.id === sauce.id).length}</p>
                                <button className="count"onClick={() => cRemoveSauce(sauce)}>-</button>
                            </div>
                    </li>
                );
            })}
        </ul>
        </>
    )
}

export default SaucesList
