"use strict";

document.addEventListener("DOMContentLoaded", function () {

    let testAjax = document.querySelector(".test_ajax");

    testAjax.innerHTML = "<h2>Ajax: Hello World</h2>";

    let button = document.querySelector(".servlet-button");
    let responseDiv = document.querySelector(".response");
    let wrapperProducts = document.querySelector(".wrapper_cards");
    let shoppingCartWrapper = document.querySelector(".shoppingCartCards_wrapper");

    // =================================================================

    //ProductsCart
    let productsCartArray = [];

    function addProduct(product) {
        if (!isProductInCart(product)) {
            productsCartArray.push(product);
        } else {
            product.count += 1;
        }
    }
    function isProductInCart(product) {
        productsCartArray.forEach(productIter => {
            if (productIter.equals(product)) {
                return true;
            }
            return false;
        });
    }




    class ItemCartProduct {
        constructor(id) {
            this.id = id;
            this.count = 1;
            this.classes = ["products__item"];
            this.containerElement = shoppingCartWrapper;
        }
        getId() {
            return this.id;
        }
        equals(product) {
            if (this.getId() == product.getId()) {
                return true;
            }
            return false;
        }
        render() {
            const div = document.createElement("div");
            this.classes.forEach(className => div.classList.add(className));
            div.innerHTML = `<div data-id="${this.id}" class="shoppingCartCard card">
						<div class="card card_descr">Изделие с ID ${this.id}</div>
						<input value="1" class="card card_count"></input>
						<div class="card card_button add">
							<button>+</button>
						</div>
						<div class="card card_button remove">
							<button>-</button>
						</div>
					</div>`;
            shoppingCartWrapper.appendChild(div);
        }

    }
    function getInputCountById(id) {
        let input = shoppingCartWrapper.querySelector(`[data-id="${id}"]`);
        return input.innerText;
    }



    // =================================================================

    //ProductsList
    class ItemProducts {
        constructor(idProduct) {
            this.id = idProduct;
            this.classes = ["products__item"];
            this.containerElement = wrapperProducts;
        }
        render() {
            const div = document.createElement("div");
            this.classes.forEach(className => div.classList.add(className));
            div.innerHTML = `<div class="card">
						<div class="card card_descr">Изделие с ID ${this.id}</div>
						<div class="card add-to-cart-button" data-id="${this.id}">
							<button>Добавить в корзину</button>
						</div>
					</div>`;
            this.containerElement.append(div);
            // console.log(div.innerText);
        }
    }
    const getResourse = async function (url) {

        let res = await fetch(url);
        return res.json();
    };


    button.addEventListener("click", event => {
        console.log("click");

        fetch("shopping-cart").
            then(response => response.text()).
            then(result => {
                responseDiv.innerHTML = "";
                responseDiv.innerHTML = result;
            });
    });

    let productsArray = []; // Array of products

    getResourse("ajax-products-servlet").
        then(data => {
            // console.log(data.products);
            productsArray = data.products;
            data.products.forEach(({ id }) => {
                new ItemProducts(id).render();
            });
        }).then(() => {
            let addToCartButtons = []; //buttons for eventListeners to add to cart
            //add the products to the productsCart array
            addToCartButtons = document.querySelectorAll('.add-to-cart-button');

            addToCartButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    let itemCartProduct = new ItemCartProduct(productsArray[button.dataset.id - 1].id);
                    console.log(itemCartProduct);
                    addProduct(itemCartProduct);
                    itemCartProduct.render();

                });

            });
        });



});