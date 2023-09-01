function Cart() {
    const prixMonstera = 8;
    const prixLierre = 10;
    const prixFleur = 15;
    return (<div>
        <h2>Panier</h2>
        <ul>
            <li>Monstera: {prixMonstera}€</li>    
            <li>Lierre: {prixLierre}€</li>    
            <li>Fleurs: {prixFleur}€</li>    
        </ul>
        <p>Prix total: {prixMonstera + prixLierre + prixFleur}€</p>
    </div>)
}

export default Cart