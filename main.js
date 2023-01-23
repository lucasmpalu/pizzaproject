const pizzas = [
    { type: 'Muzzarella',
      price: 1500,
      id: 0,
      ingredients: 'salsa de tomate, queso muzzarella, aceite de oliva y oregano',
      img: 'muzzarella.jpg'},

    { type: 'Calabresa',
      price: 1700,
      id: 1,
      ingredients: 'queso Muzzarella, queso Sardo y cebolla',
      img: 'calabresa.jpg'},
      

    { type: 'Fugazzetta',
      price: 1600,
      id: 2,
      ingredients: 'salsa de tomate, queso Muzzarella, salame tipo Calabresa, aceite de oliva y oregano',
      img: 'fugazzetta.jpg'},
    
    { type: 'Margarita',
      price: 1600,
      id: 3,
      ingredients: 'salsa de tomate, queso Muzzarella, tomates cherrys, aceite de oliva, oregano y albahaca',
      img: 'margarita.jpg'}, 
    
    { type: 'Jamon y queso',
      price: 1700,
      id: 4,
      ingredients: 'salsa de tomate, jamon cocido, queso Muzzarello, aceite de oliva y oregano',
      img: 'jyq.jpg'}    
]

let pedido = JSON.parse(localStorage.getItem('Productos')) || []


const renderItems = (item) => {


    return `<img src="images/${item.img}" class="img-cardsTotals">
            </img>
            <h4>Pizza de ${item.type}</h4>
            <p>$${item.price}</p>
    `
}

const renderTotal = () => {

    $cardsItemsJS.innerHTML = pedido.map(item => renderItems(item)).join('')
}

const createElements = () => {

    let totalCarrito = pedido.map(item => item.price)

    $card.innerHTML = `
        <div id="tittle-totalJS">
        Tu pedido es:
        </div>
        <div id="cards-itemsJS">
        
        </div>
        Total a pagar: 
        </div id="total-toPayJS">
        </button id="button-toPayTotalJS">
    `
}

const deleteElements = () => {
    $card.innerHTML = ''
}

const totalToPay = (e) => {
    e.preventDefault()
    if(pedido.length > 0) {
        deleteElements()
        createElements()
        renderTotal()
    }  
}

const saveToLocalStorage = (pedidoX) => {
    
    localStorage.setItem('Productos', JSON.stringify(pedidoX))

}

const saveData = (typeX, price, img) => {

    pedido = [...pedido,
        { tipo: typeX,
        precio: parseInt(price),
        imagen: img} ]

     saveToLocalStorage(pedido)
}

const addCarrito = () => {
    e.preventDefault()

    let valueSelect = $pizzasList.value
    let pizzaActive = pizzas.find(item => item.type.toLowerCase() == valueSelect)

    saveData(pizzaActive.type, pizzaActive.price, pizzaActive.img)
    
}


const renderPizza = (type, ingredients, img) => {
    $descriptionContainerJS.innerHTML = `
                <div class="divTittleAndDescriptionJS">
                    <h2 id="tittleJS">Pizza de ${type}</h2>
                    <h4 id="descriptionJS">Esta pizza lleva ${ingredients}</h4>
                </div>
                <img src="images/${img}" alt="Pizza de ${type} " class="img-pizzaJS">
                
                `
}

const pizzaChange = () => {
    let valueSelect = $pizzasList.value
    let pizzaActive = pizzas.find(item => item.type.toLowerCase() === valueSelect)

    let type = pizzaActive.type
    let ingredients = pizzaActive.ingredients
    let img = pizzaActive.img

    renderPizza(type, ingredients, img)

}



const init = () => {

$card.addEventListener('submit', addCarrito)
$pizzasList.addEventListener('change', pizzaChange)
$buttonAdd.addEventListener('click', addCarrito)
$buttonCart.addEventListener('click', totalToPay)



} 

init()





    // switch (valuePizzasList) {
    //     case 'muzzarella':
    //         renderPizza('Muzzarella', 'salsa de tomate, queso muzzarella, aceite de oliva y oregano', 'muzzarella.jpg')
    //         break;
    //     case 'fugazzetta':
    //         renderPizza('Fugazzetta', 'queso Muzzarella, queso Sardo y cebolla', 'fugazzetta.jpg', 'fugazzettaJS')
    //         break
    //     case 'calabresa':
    //         renderPizza('Calabresa', 'salsa de tomate, queso Muzzarella, salame tipo Calabresa, aceite de oliva y oregano', 'calabresa.jpg')
    //         break
    //     case 'margarita':
    //         renderPizza('Margarita', 'salsa de tomate, queso Muzzarella, tomates cherrys, aceite de oliva, oregano y albahaca', 'margarita.jpg')

    //         break
    //     case 'jyq':
    //         renderPizza('Jamon y queso', 'salsa de tomate, jamon cocido, queso Muzzarello, aceite de oliva y oregano', 'jyq.jpg')
    //         break
    //     case 'none':
    //         descriptionContainerJS.innerHTML = ``

    //     break
    //     default:
    //         break;
    // }