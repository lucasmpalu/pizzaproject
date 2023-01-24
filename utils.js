
let pedido = JSON.parse(localStorage.getItem('Productos')) || []



// CARTA GENERAL PARA AGREGAR EN CARRITO
const $card = document.getElementById('form-card')

// CARTA GENERAL PARA AGREGAR EN CARRITO
//CON SUS 3 SECCIONES
const $pizzasList = document.getElementById('pizzas-list')
const $descriptionContainerJS = document.getElementById('container-imgJS')
const $containerButtons = document.getElementById('container-buttons')

//TITTLE AND SELECT
const $tittlePizzas = document.getElementById('tittle-pizzas')
const $handEmoji = document.getElementsByClassName('hand')

//BOTONES PARA AGREGAR O IR AL CARRITO
const $buttonAdd = document.getElementById('button-add')
const $buttonCart = document.getElementById('button-cart')


//RENDERIZADO DEL TOTAL DEL CARRITO
const $formCart = document.getElementById('form-cart')
const $headerRenderJS = document.getElementById('header-renderJS')
const $cardsRenderJS = document.getElementById('cards-renderJS')
const $priceRenderJS = document.getElementById('price-renderJS')
const $containerPayAndBackJS = document.getElementById('container-payAndBack')
const $buttonToPayJS = document.getElementById('button-toPayJS')
const $buttonBackJs = document.getElementById('button-backJS')
const $totalPriceJS = document.getElementById('total-priceJS')
const $cleanCartJS = document.getElementById('clean-cartJS')