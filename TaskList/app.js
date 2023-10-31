const btnAgregar = document.getElementById('agregar');
const lista = document.getElementById('lista');
const inputText = document.getElementById('textInp');
const sinTareas = document.getElementById('sinTareas');
const btnBorrarTodo = document.getElementById('eliminarTodo');


/*Debo definir la funcion de borrar para elementos individuales.*/

function borrarElem(element) {
    var parent = element.parentNode;
    parent.removeChild(element);
  }

btnAgregar.addEventListener('click', ()=>{

    

    if(inputText.value.length == 0){
        alert('Coloque algo en la lista');
    }else{

        var vi=[];
    
        //agrega Elementos en lista
 lista.innerHTML +=`
        <li value="" id="btnBorrar" name="listaElementos" onClick="borrarElem(this)"" ><p>${inputText.value}</p><button  class = "waves-effect waves-light btn red icon-trashcan"></button></li>
    `;

    /*Limpiar Input*/
    inputText.value= "";
    sinTareas.remove();
    /*Limpiar Input*/
    return;
}
});



//Funcion para borrar todo 

btnBorrarTodo.addEventListener('click', ()=>{
    const bTodo = document.getElementById("lista");
   while(bTodo.firstChild){
    bTodo.removeChild(bTodo.firstChild);
   }
});


