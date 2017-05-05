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


var x = 0;
var y = 0;
var orangeBox= document.querySelector('.hero');
function moveHero(event) {
    event.preventDefault();
    // console.log(event);
        if(event.key == 'ArrowRight' && x<186 ){
            // console.log(x);
            x +=2;
            orangeBox.style.left = x+'px';
        }
        else if(event.key == 'ArrowLeft' && x>0){
            // console.log(x);
            x -=2;
            orangeBox.style.left = x+'px';
        }
        if(event.key == 'ArrowDown' && y<186){
            y +=2;
            orangeBox.style.top = y+'px';
        }
        else if(event.key == 'ArrowUp' && y>0){
            y -=2;
            orangeBox.style.top = y+'px';
        }
}
document.addEventListener('keydown', moveHero);

