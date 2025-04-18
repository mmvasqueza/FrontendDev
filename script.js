const modal = document.querySelector('.modal-container');

const tbody = document.querySelector('tbody');

const nombre = document.querySelector('#m-nome');

const Cargo = document.querySelector('#m-funcao');

const Salario = document.querySelector('#m-salario');

const btnSalvar = document.querySelector('#btnSalvar');


let items;
let id;

function openModel(edit = false, index = 0){
    modal.classList.add('active');

    modal.onclick = e => {
        if(e.target.className.indexOf('modal-container') !== -1 ) {
            modal.classList.remove('active');

        }
    }

    if(edit)
    {
        nombre.value = items[index].nombre
        Cargo.value = items[index].Cargo
        Salario.value = items[index].Salario
        id = index
    } else{
        nombre.value = ''
        Cargo.value = ''
        Salario.value = ''
        
    }
}


function editItems(index){
openModel(true, index);
}

function deleteItems(){
    items.splice(index,1)
    setItemsBD()
    loadItems()
}

function insertItems(items, index){
    let tr = document.createElement('tr')
     tr.innerHTML =  `<td>${items.nombre}</td>
     <td>${items.cargo}</td>
     <td>${items.Salario}</td>
     <td class="acao"> 
     <button onclick="editItem(${index})"> 
     </button>
     </td>
     <td class="acao"></td>
     
     `


}