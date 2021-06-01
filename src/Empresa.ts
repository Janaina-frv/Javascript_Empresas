const username = document.querySelector('.username') as HTMLInputElement
let botao = document.getElementById("button") as HTMLButtonElement
const list = document.getElementById("list") as HTMLUListElement

let nomes:String[] = [""]

botao.addEventListener("click",function(){
    event.preventDefault();
    nomes.push(username.value)

    let posicao:number = nomes.length
    let li = document.createElement("li") as HTMLLIElement
    list?.appendChild(li)
    li.innerText = nomes[posicao-1]
   
})

