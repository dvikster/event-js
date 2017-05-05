var redBox= document.querySelector('.red_box');
function f1(event) {
    // console.log(event);
    x = 15 + event.offsetX;
    y = 15 + event.offsetY;
    redBox.style.top = y +'px';
    redBox.style.left = x +'px';
}
function f2() {
    alert('222222');
}

document.querySelector('.test').addEventListener('mousemove', f1);
// document.querySelector('.test').addEventListener('click', f2);
// document.querySelector('.test').removeEventListener('mousemove', f1);


var x1 = 0;
var y1 = 0;
var orangeBox= document.querySelector('.hero');
function moveHero(event) {
    event.preventDefault();
    // console.log(event);
        if(event.key == 'ArrowRight' && x1<186 ){
            // console.log(x);
            x1 +=2;
            orangeBox.style.left = x1+'px';
        }
        else if(event.key == 'ArrowLeft' && x1>0){
            // console.log(x);
            x1 -=2;
            orangeBox.style.left = x1+'px';
        }
        if(event.key == 'ArrowDown' && y1<186){
            y1 +=2;
            orangeBox.style.top = y1+'px';
        }
        else if(event.key == 'ArrowUp' && y1>0){
            y1 -=2;
            orangeBox.style.top = y1+'px';
        }
}
document.addEventListener('keydown', moveHero);

function escapeBlock(event) {
    // console.log(event);
    if(event.key == 'Escape'){
    document.querySelector('.box').style.display = 'none';
    }
    if(event.key == 'm'){
        document.querySelector('.box').style.display = 'block';
    }
}
document.addEventListener('keydown', escapeBlock);

// Если мышка подходит в область раскрытого меню (300px)
// function menuHideMouse(event) {
//     console.log(event);
//     x = event.offsetX;
//     if( x>=300){
//         document.querySelector('.menu').style.left = '-200px';
//     }
//     else if( x<300){
//         document.querySelector('.menu').style.left = '0';
//     }
//     if(event.key == 'Escape'){
//         document.querySelector('.menu').style.left = '-200px';
//     }
//     else if(event.key == 'm'){
//         document.querySelector('.menu').style.left = '0';
//     }
// }
// document.addEventListener('keydown', menuHideMouse);
// document.addEventListener('mouseover', menuHideMouse);



function hideMenu(){
    document.querySelector('.menu').style.left = '-200px';
}
function showMenu(){
    document.querySelector('.menu').style.left = '0';
}
function menuHideEsc(event){
    if(event.key == 'Escape'){
        hideMenu();
    }
    else if(event.key == 'm'){
        showMenu();
    }
}
document.addEventListener('keydown', menuHideEsc);
document.querySelector('.menu').addEventListener('mouseout', hideMenu);
document.querySelector('.menu').addEventListener('mouseover', showMenu);