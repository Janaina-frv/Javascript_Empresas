"use strict";
var username = document.querySelector('.username');
var botao = document.getElementById("button");
var list = document.getElementById("list");
var nomes = [""];
botao.addEventListener("click", function () {
    event.preventDefault();
    nomes.push(username.value);
    var posicao = nomes.length;
    var li = document.createElement("li");
    list === null || list === void 0 ? void 0 : list.appendChild(li);
    li.innerText = nomes[posicao - 1];
});
