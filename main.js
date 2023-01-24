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
 
const goToPay = (e) => {
    e.preventDefault()
    

}

const backToProducts = (e) => {
    e.preventDefault()
    location.href = 'index.html'
}

const clearCart = () => {
    if(window.confirm('Seguro quiere vaciar el carrito?')) {
        pedido = []  //SI PONÍA SOLO LIMPIAR EL LOCAL STORAGE 👇 NO PODÍA LIMPIAR LA CARD DE PRODUCTOS PEDIDOSG
        localStorage.clear();
        renderTotal()
    }
}

const renderItems = (item) => {

    return `<div style="display: flex; border-radius= 5px; padding: 5px; gap: 1rem;">
                <img src="images/${item.imagen}" class="img-cardsTotals" style="border-radius: 5px; height: 55px;">
                <div id="pizzaAndPriceJS">
                    <h4>Pizza de ${item.tipo}</h4>
                    <p>$${item.precio}</p>
                </div>
            </div>
    `
}


const renderTotal = () => {

    pedido.length > 0
    let valueAdditionPrices = 0 //ESTE VA A SER EL VALOR INICIAL, CUANDO LO PONGO ADENTRO DEL REDUCE.
    let additionPrices = pedido.reduce((acc, curr) => Number(acc) + Number(curr.precio), valueAdditionPrices) //--> ACÁ ACC Y CURR, PUEDE SER CUALQUIER NOMBRE, ACC VA A TOMAR EL VALOR INICIAL Y EN ESTE CASO ES valueAdditionPrices

    $cardsRenderJS.innerHTML = pedido.map(item => renderItems(item)).join('')
    $totalPriceJS.innerHTML = `TOTAL: $${additionPrices}`


}

const totalToPay = (e) => {
    e.preventDefault()

    if(pedido.length > 0) {
        location.href = 'cart.html'
        renderTotal()

    }  else {
        Swal.fire('Su carrito está vacío')
    }
}

const saveToLocalStorage = (pedido) => {
    
    localStorage.setItem('Productos', JSON.stringify(pedido))

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
    Swal.fire('Su producto fue agregado')
    

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
  
$pizzasList?.addEventListener('change', pizzaChange)
$buttonAdd?.addEventListener('click', addCarrito)
$buttonCart?.addEventListener('click', totalToPay)
document?.addEventListener('DOMContentLoaded', renderTotal)
$buttonBackJs?.addEventListener('click', backToProducts)
$buttonToPayJS?.addEventListener('click', goToPay)
$cleanCartJS?.addEventListener('click', clearCart)
} 

init()

// const renderCart = () => {
//     console.log(pedido)
//     pedido.map(p => $cardsRenderJS.innerHTML += `
//     <div class="divTittleAndDescriptionJS">
//         <h2 id="tittleJS">Pizza de ${p.tipo}</h2>
//         <h2>Precio: ${p.precio}</h2>
//     </div>
    
//     `)
    
// }