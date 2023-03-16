"use strict";

document.addEventListener("DOMContentLoaded", function () {

    let testAjax = document.querySelector(".test_ajax");

    testAjax.innerHTML = "<h2>Ajax: Hello World</h2>";

    let button = document.querySelector(".servlet-button");
    let responseDiv = document.querySelector(".response");
    let wrapperProducts = document.querySelector(".wrapper-products");


    class Item {
        constructor(idProduct) {
            this.id = idProduct;
            this.classes = ["products__item"];
            this.containerElement = wrapperProducts;
        }
        render() {
            const div = document.createElement("div");
            this.classes.forEach(className => div.classList.add(className));
            div.innerHTML = `<p class="products__item-id">Здесь должен быть ваш ID ${this.id}</p>`;
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
        // if (response.ok) {
        //     responseDiv.classList.add("green");
        // } else {
        //     responseDiv.classList.add("red");
        // }
    });

    getResourse("ajax-products-servlet").
        then(data => {
            // console.log(data.products);
            data.products.forEach(({ id }) => {
                console.log("Hello World" + id);
                new Item(id).render();
            });
        });

    console.log(document.querySelectorAll(".products__item"));
});

