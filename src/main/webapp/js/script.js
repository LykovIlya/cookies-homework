"use strict";

let testAjax = document.querySelector(".test_ajax");

testAjax.innerHTML = "<h2>Ajax: Hello World</h2>";

let button = document.querySelector(".servlet-button");
let responseDiv = document.querySelector(".response");

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

