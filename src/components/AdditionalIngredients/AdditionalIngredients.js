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
        <div>
    {ingredients.map(ingredient => {
        return (
        <div key={ingredient.id}>
            <p>{ingredient.name} {ingredient.price}</p>
            <button onClick={() => addIngredient(ingredient)}>+</button>
            <p>Ilość: {props.additionalIngredients.filter(additionalIngredient => additionalIngredient.id === ingredient.id).length}</p>
            <button onClick={() => removeIngredient(ingredient)}>-</button>
        </div>
        );
    })}
    <button onClick={() => removeAllIngredients()}>Usuń wszystkie dodatkowe składniki</button>
    </div>
)}

export default AdditionalIngredients
