let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main= document.getElementById("areaLista");
let contador=0;

function adicionar() {
    let valorInput = input.value;
    if ((valorInput !== " ") && (valorInput !== null) && (valorInput !== undefined)) {
        ++contador;
        let novoItem = 
        `<div class="item" id="${contador}">
            <div  class="item-icone">
                
            </div>
            <div class="item-nome">
                ${valorInput}  
            </div>
            <div class="item-botao">
                <button class="delete" onclick="deletar(${contador})"><svg class="img2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-circle</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" /></svg></button>
            </div>
        </div>`;
        //adicionar novo item:
        main.innerHTML+=novoItem;
        //zerar campo
        input.value="";
        input.focus();
    } 
}

function deletar(id){
    var tarefa=document.getElementById(id);
    tarefa.remove();
}
input.addEventListener("keyup", function(event){
    //se apertou enter
    if(event.keyCode===13){
        event.preventDefault();
        btnAdd.click();
    }
})

