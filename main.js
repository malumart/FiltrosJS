const productos = [
	{
		nombre: "Zapato negro",
		tipo: "zapato",
		color: "negro",
		img: "./img/taco-negro.jpg"
	},
	{
		nombre: "Zapato azul",
		tipo: "zapato",
		color: "azul",
		img: "./img/taco-azul.jpg"
	},
	{
		nombre: "Bota negra",
		tipo: "bota",
		color: "negro",
		img: "./img/bota-negra.jpg"
	},
	{
		nombre: "Bota azul",
		tipo: "bota",
		color: "azul",
		img: "./img/bota-azul.jpg"
	},
	{
		nombre: "Zapato rojo",
		tipo: "zapato",
		color: "rojo",
		img: "./img/zapato-rojo.jpg"
	}
];

const cardsproductos = document.getElementById("cardsproductos");
const formulario = document.forms[0];
const input = document.querySelector('input[type="text"]');

const getProduct = product => {
	return `<div class="card">
    <img src=${product.img}>
  <div class="desc">${product.nombre}</div>
  </div>`;
};

const viewProducts = () => {
	const products = productos.map(product => {
		return getProduct(product);
	});
	cardsproductos.innerHTML = products.join(" ");
};

window.onload = () => viewProducts();


formulario.onsubmit = e => {
	e.preventDefault();

	const listaProductos = productos.reduce((acc, product) => {
		if (product.nombre.toLowerCase().includes(input.value)) {
			acc += getProduct(product);
		}
		return acc;
	}, "");

	cardsproductos.innerHTML = listaProductos;
};

