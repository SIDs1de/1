if(document.documentElement.clientWidth > 1200){
    var randomX = Math.floor(Math.random()*690);
    var randomY = Math.floor(Math.random()*390);
} else if(document.documentElement.clientWidth > 994){
    var randomX = Math.floor(Math.random()*960);
    var randomY = Math.floor(Math.random()*540);
} else if(document.documentElement.clientWidth > 770){
    var randomX = Math.floor(Math.random()*720);
    var randomY = Math.floor(Math.random()*400);
} else if(document.documentElement.clientWidth > 580){
    var randomX = Math.floor(Math.random()*540);
    var randomY = Math.floor(Math.random()*300);
} else{
    var randomX = Math.floor(Math.random()*280);
    var randomY = Math.floor(Math.random()*162);
}

const img = document.querySelector('img');
const p = document.querySelector('.cord');
const helpX = document.querySelector('.helpX');
const helpY = document.querySelector('.helpY');
img.addEventListener('click', event => {
    let cathetX = event.offsetX - randomX;
    let cathetY = event.offsetY - randomY;
    let hypotenuse = Math.sqrt(cathetX * cathetX + cathetY * cathetY)
    p.innerHTML = `До цели осталось ${Math.round(hypotenuse)}`;
    if (cathetX > 25){
        helpX.innerHTML = "левее";
    }
    if (cathetY > 25){
        helpY.innerHTML = "выше";
    }
    if (cathetX < -25){
        helpX.innerHTML = "правее";
    }
    if (cathetY < -25){
        helpY.innerHTML = "ниже";
    }
    if (hypotenuse < 25){
        helpX.innerHTML = '';
        helpY.innerHTML = '';
        p.innerHTML = '';
        document.querySelector('.victory').innerHTML = 'Победа!';
    }
})