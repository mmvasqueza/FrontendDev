const modal = document.querySelector('.modal-container');

const tbody = document.querySelector('tbody');

const nombre = document.querySelector('#m-nome');

const Cargo = document.querySelector('#m-funcao');

const Salario = document.querySelector('#m-salario');

const btnSalvar = document.querySelector('#btnSalvar');


let items;
let id;

function openModal(edit = false, index = 0){
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
    openModal(true, index);
}

function deleteItems(index){
    items.splice(index,1)
    setItemsBD()
    CargarDatos()
}

function insertItems(items, index){
    let tr = document.createElement('tr')
     tr.innerHTML =  `<td>${items.nombre}</td>
     <td>${items.Cargo}</td>
     <td>${items.Salario}</td>
     <td class="acao"> 
     <button onclick="editItems(${index})">
     <i class="bx bx-edit"></i> 
     </button>
     </td>
     <td class="acao">
      <button onclick="deleteItems(${index})">
     <i class="bx bx-trash"></i> 
     </button></td>     
     `
     tbody.appendChild(tr);
}

btnSalvar.onclick = e => {
    if(nombre.value == '' || Cargo.value == '' || Salario.value == ''){
        return
    }
    e.preventDefault();

    if(id !== undefined){
        items[id].nombre = nombre.value
        items[id].Cargo = Cargo.value
        items[id].Salario = Salario.value
    }
    else{
        items.push({'nombre': nombre.value, 'Cargo': Cargo.value, 'Salario': Salario.value})
    }
    setItemsBD()

    modal.classList.remove('active');
    CargarDatos();
    id = undefined;
}

function CargarDatos(){
    items = getItemsBD();
    tbody.innerHTML = ''
    items.forEach((item, index) => {
        insertItems(item, index)        
    });
}

const getItemsBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItemsBD = () => localStorage.setItem('dbfunc', JSON.stringify(items));

CargarDatos();