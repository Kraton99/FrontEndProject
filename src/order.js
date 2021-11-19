class Order {
    pizza = [];
    sauce = [];
    total = 0;

    constructor(aCartPizzas, aCartSauces, aCost) {
        this.createOrder(aCartPizzas, aCartSauces, aCost);
    }

    createOrder(aCartPizzas, aCartSauces, aCost) {
        this.mapPizzas(aCartPizzas);
        this.mapSauces(aCartSauces);
        this.total = aCost;
    }

    mapPizzas(aCartPizzas) {
        aCartPizzas.forEach(item => {
            const ingredients = item.ingredients.map(ingredient => {
                return ingredient.id;
            })
            this.pizza.push({id: item.pizza.id, ingredients: ingredients});
        });
    }

    mapSauces(aCartSauces) {
        aCartSauces.forEach(sauce => {
            const count = aCartSauces.filter(item => item.id === sauce.id).length;
            this.sauce.push({id: sauce.id, count: count});
        })
    }
}
export default Order;