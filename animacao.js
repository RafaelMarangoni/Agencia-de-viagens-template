let menu = document.querySelector ('.toggle'); 
let menu2 = document.querySelector ('.drop');


menu.addEventListener ('click', function () {
    menu2.classList.toggle('drop');  
})

//menu.addEventListener('click', function (){
    //menu2.style.display='block';
//})

// var counter = 0
// menu.addEventListener ('click', function () {
//    if(counter % 2 == 0) {
//        menu2.classList.add('drop')
//     } else {
//         menu2.classList.remove('drop')
//    }
//    counter++
// })
