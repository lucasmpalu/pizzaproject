const pizzas = {
    muzarella: '$1500',
    calabresa: '$1600',
    fugazzetta: '$1600',
    margarita: '$1600',
    'cuatro quesos': '$1700'
}


const typePizza = (type, message, img) => {
    descriptionContainerJS.innerHTML = `
                <div class="divTittleAndDescriptionJS">
                    <h2 id="tittleJS">Pizza de ${type}</h2>
                    <h4 id="descriptionJS">Esta pizza lleva ${message}</h4>
                </div>
                <img src="images/${img}" alt="Pizza de ${type} " class="img-pizzaJS">`

            }

const pizzaChange = () => {
    let valuePizzasList = pizzasList.value

    switch (valuePizzasList) {
        case 'muzzarella':
            typePizza('Muzzarella', 'salsa de tomate, queso muzzarella, aceite de oliva y oregano', 'muzzarella.jpg')
            break;
        case 'fugazzetta':
            typePizza('Fugazzetta', 'queso Muzzarella, queso Sardo y cebolla', 'fugazzetta.jpg', 'fugazzettaJS')
            break
        case 'calabresa':
            typePizza('Calabresa', 'salsa de tomate, queso Muzzarella, salame tipo Calabresa, aceite de oliva y oregano', 'calabresa.jpg')
            break
        case 'margarita':
            typePizza('Margarita', 'salsa de tomate, queso Muzzarella, tomates cherrys, aceite de oliva, oregano y albahaca fresca', 'margarita.jpg')

            break
        case 'jyq':
            typePizza('Jamon y queso', 'salsa de tomate, jamon cocido, queso Muzzarello, aceite de oliva y oregano', 'jyq.jpg')
            break
        case 'none':
            descriptionContainerJS.innerHTML = ``

        break
        default:
            break;
    }

}



const init = () => {

pizzasList.addEventListener('change', pizzaChange)

} 

init()