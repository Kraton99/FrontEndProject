function SaucesList({sauces}) {
    return (
        <div>
            {sauces.map(sauce => {
                return (
                    <div key={sauce.id}>
                    <p>{sauce.name}</p>
                    <button>+</button>

                    <button>-</button>
                    </div>
                );
            })}
        </div>
    )
}

export default SaucesList
