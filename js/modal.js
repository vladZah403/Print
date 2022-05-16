let modal = document.getElementById('myModal');
//let btn = document.querySelector('.myBtn');
let span = document.getElementsByClassName("close")[0];
let id_modal = document.querySelector('#idProd')
let text_modal = document.querySelector('#textProd')

function modal_click(id, name){
 console.log(id);
 console.log(name)
 modal.style.display = "block";
 id_modal.value = `${id}`
 text_modal.value = `${name}`

}

//btn.addEventListener('click',()=>{
  // modal.style.display = "block";
//})
    


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

