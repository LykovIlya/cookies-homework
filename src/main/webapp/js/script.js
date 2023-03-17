"use strict";

document.addEventListener("DOMContentLoaded", function () {

    let testAjax = document.querySelector(".test_ajax");

    testAjax.innerHTML = "<h2>Ajax: Hello World</h2>";

    let button = document.querySelector(".servlet-button");
    let responseDiv = document.querySelector(".response");
    let wrapperProducts = document.querySelector(".wrapper_cards");
    let shoppingCartWrapper = document.querySelector(".shoppingCartCards_wrapper");

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
    class ItemCartProducts {
        constructor(id) {
            this.id = id;
            this.count = 1;
            this.classes = ["products__item"];
            this.containerElement = shoppingCartWrapper;
        }
        render() {
            const div = document.createElement("div");
            this.classes.forEach(className => div.classList.add(className));
            div.innerHTML = `<div class="shoppingCartCard card">
						<div class="card card_descr">Изделие с ID ${this.id}</div>
						<input value="1" class="card card_count"></input>
						<div class="card card_button add">
							<button>+</button>
						</div>
						<div class="card card_button remove">
							<button>-</button>
						</div>
					</div>`;
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
        // if (response.ok) {
        //     responseDiv.classList.add("green");
        // } else {
        //     responseDiv.classList.add("red");
        // }
    });

    let productsArray = [];
    let addToCartButtons = [];
    getResourse("ajax-products-servlet").
        then(data => {
            // console.log(data.products);
            productsArray = data.products;
            data.products.forEach(({ id }) => {
                new ItemProducts(id).render();
            });
        }).then(() => {
            addToCartButtons = document.querySelectorAll('.add-to-cart-button');
            console.log(addToCartButtons);

            addToCartButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    console.log(button.dataset.id);
                });

            });
        });

});