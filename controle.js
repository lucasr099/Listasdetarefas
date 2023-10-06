let contador = 0;
let input = document.getElementById('inputTarefa');
let  bntAdd = document.getElementById('bntAdd');
let main = document.getElementById('areaLista');

function addTarefa(){
    //PEGAR O VALOR DIGITAR NO INPUT
    let valorInput = input.value;
    //se nao for vazio, nem nulo, nem indefinido
    if (valorInput !=="" && valorInput!==null && valorInput !== undefined )
    { 
       ++contador;

        let novoItem =  `<div id="${contador}" class="item">
    <div onclick="marcarTarefa(${contador})" class="itemIcone">
       <i id="icone_${contador}"  class="mdi mdi-circle-outline"></i>
    </div>
    <div class="itemNome">
    ${valorInput}
    </div>
    <div onclick="marcarTarefa(${contador})" class="itemBotao">
<button onclick="deletar(${contador})" class="delete">
    <i class=" mdi mdi-delete">
</i>
Deletar
</button>
    </div>
    </div>`;
    //ADICIONAR NOVO ITEM 
    
    main.innerHTML += novoItem;
    //ZERAR OS CAMPINHOS
    input.value = "";
    input.focus();
}

}
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe)
    
    if(classe == "item"){
        item.classList.add('clicado');
        console.log(item)
        item.parentNode.appendChild(item);
       
        var icone = document.getElementById('icone_'+ id)
   icone.classList.remove('mdi-circle-outline');
   icone.classList.add('mdi-check-circle');
} else{
    item.classList.remove('clicado');
       
    var icone = document.getElementById('icone_'+ id)
icone.classList.remove('mdi-check-circle');
icone.classList.add('mdi-circle-outline');
}
}
input.addEventListener("keyup", function(event){
   //se teclar enter(13)
    if(event.keyCode ===13){
        event.preventDefault();
bntAdd.click();
    }
})