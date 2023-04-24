
let ul = document.querySelector('nav ul')

let menubtn = document.querySelector('.menubtn i')

function menuclick(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open')
    }else{
        ul.classList.toggle('open')
    }
}