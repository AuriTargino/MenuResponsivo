let ul = document.querySelector('header ul')
let menubtn = document.querySelector('.menubtn i')

function menubutton(){
    if(ul.classList.contains('abrir')){
        ul.classList.remove('abrir')
    }else{
        ul.classList.toggle('abrir')
    }
}