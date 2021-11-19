import {useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from 'redux';
import { actionCreator} from '../store/actionCreator';

function SaucesList(props) {
    const dispatcher = useDispatch();
    const cartSauces = useSelector(state => state.cartReducer.sauces);
    const [saucesList, setSauces] = useState([...cartSauces]);
    const {addSauce, removeSauce} = bindActionCreators(actionCreator, dispatcher);

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

    const removeAllSauces = () => {
        let lessMoney = 0;
        saucesList.forEach(element => {
           lessMoney += element.price;
        });
        props.setMoney(props.money - lessMoney);
        setSauces([]);
        //clearSaucesInCart()
    }
  
    return (
        <div>
            {props.sauces.map(sauce => {
                return (
                    <div key={sauce.id}>
                        <p>{sauce.name} {sauce.price}</p>
                        <button onClick={() => cAddSauce(sauce)}>+</button>
                        <p>{saucesList.filter(element => element.id === sauce.id).length}</p>
                        <button onClick={() => cRemoveSauce(sauce)}>-</button>
                    </div>
                );
            })}
            <button onClick={() => removeAllSauces()}>Usuń wszystkie sosy</button>
        </div>
    )
}

export default SaucesList
