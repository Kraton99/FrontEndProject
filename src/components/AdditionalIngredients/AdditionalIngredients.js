import "./AdditionalIngredients.css"
function AdditionalIngredients(props) {
    
    const ingredients = props.ingredients;
    const removeIngredient = (aIngredient) => {
        if(props.additionalIngredients.filter(additionalIngredient => additionalIngredient.id === aIngredient.id).length > 0) {
            const id = props.additionalIngredients.findIndex(ing => ing.id === aIngredient.id);
                const copy = [...props.additionalIngredients];
                copy.splice(id, 1);
            props.setAdditionalIngredneints(copy);
            props.setMoney(props.money - aIngredient.price);
        }
    }

    const addIngredient = (aIngredient) => {
        props.setMoney(props.money + aIngredient.price);
                props.setAdditionalIngredneints(prev => [...prev, aIngredient]);
    }

    const removeAllIngredients = () => {
        let lessMoney = 0;
        props.additionalIngredients.forEach(element => {
           lessMoney += element.price;
        });
        props.setMoney(props.money - lessMoney);
        props.setAdditionalIngredneints([]);
    }

    return (
        <>
            <button className="deleteIngredients"onClick={() => removeAllIngredients()}><span className="buttonText">Usuń wszystkie dodatkowe składniki</span></button>
            <ul className="ingredientsList">
        {ingredients.map(ingredient => {
            return (
            <li className="ingredient" key={ingredient.id}>
                <div className="itemName">{ingredient.name}: {ingredient.price} zł</div>
                <div className="itemCounter">
                    <button className="count" onClick={() => addIngredient(ingredient)}>+</button>
                    <p className="countValue">Ilość: {props.additionalIngredients.filter(additionalIngredient => additionalIngredient.id === ingredient.id).length}</p>
                    <button className="count" onClick={() => removeIngredient(ingredient)}>-</button>
                </div>
            </li>
            );
        })}
        </ul>
    </>
)}

export default AdditionalIngredients
