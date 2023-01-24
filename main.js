

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


const goToPay = (e) => {
    e.preventDefault()

}

const backToProducts = (e) => {
    e.preventDefault()
}

const renderItems = (item) => {

    return `<img src="images/${item.imagen}" class="img-cardsTotals">
            </img>
            <h4>Pizza de ${item.tipo}</h4>
            <p>$${item.precio}</p>
    `
}

const renderTotal = () => {
   
    $cardsRenderJS.innerHTML = pedido.map(item => renderItems(item)).join('')
}

const totalToPay = (e) => {
    e.preventDefault()

    if(pedido.length > 0) {
        renderTotal()
        console.log(pedido)
    }  else {
        Swal.fire('Any fool can use a computer')
    }
}

const saveToLocalStorage = (pedidoX) => {
    
    localStorage.setItem('Productos', JSON.stringify(pedidoX))

}

const saveData = (type, price, img) => {

    pedido = [...pedido,
        { tipo: type,
        precio: parseInt(price),
        imagen: img
    }]
        saveToLocalStorage(pedido)
}

const addCarrito = (e) => {
    e.preventDefault()

    let valueSelect = $pizzasList.value
    let pizzaActive = pizzas.find(item => item.type.toLowerCase() == valueSelect)

    let type = pizzaActive.type
    let price = pizzaActive.price
    let img = pizzaActive.img

    saveData(type, price, img)
    
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
  
$pizzasList.addEventListener('change', pizzaChange)
$buttonAdd.addEventListener('click', addCarrito)
$buttonCart.addEventListener('click', totalToPay)

} 

init()
