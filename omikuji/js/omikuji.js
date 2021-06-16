

window.addEventListener('DOMContentLoaded',function(){
    $("header").textillate({
        loop : false,
        minDisplayTime : 2000,
        initialDelay : 2000,
        autoStart : true,
        in : {
            effect : 'fadeInLeftBig',
            delayScale : 1.5,
            delay : 50,
            sync : false,
            shuffle : true
        }
    });
    $(function(){
        ScrollReveal().reveal('#btn',{duration : 9000})
    })
    let popmsg = 'いらっしゃい！おみくじ引いてって！';
    window.alert(popmsg)
},false);

/////////////////////////////////////////// 
const arr = ["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉!","凶。。"];
const btn = document.getElementById('btn');
const result = document.querySelector('.result');

const type = (fontSise,color,number) => {
            result.style.fontSize = `${fontSise}px`;
            result.style.background = `${color}`;
            result.textContent = arr[number]
}
btn.addEventListener('click',function(e){
    let n = Math.floor(Math.random()*6);
    e.target.style.animation = `result 1.5s linear `;
    const time = setTimeout (function(){
        switch(n){
            case 0 : {
                type(40,'#c0392b',0);
                break;
            }
            case 1 : {
                type(30,'#e67e22',1);
                break;
            }
            case 2 : {
                type(20,'#f1c40f',2);
                break;
            }
            case 3 : {
                type(20,'#16a085',3);
                break;
            }
            case 4 : {
                type(20,'#3498db',4);
                break;
            }
            case 5 : {
                type(20,'#34495e',5);
                break;
            }
        }
        e.target.style.animation = `none `;

    },2000);

    // snowfall stop
    $(document).snowfall('clear');
    // snowfall
    $(document).ready(function(){
        $(document).snowfall({
            maxSpeed : 5,
            minSpeed : 1,
            maxSize : 20,
            minSize : 1,
            image : 'img/sakura_hanabira.png'
        })
        $(document).snowfall({
            maxSpeed : 5,
            minSpeed : 1,
            maxSize : 20,
            minSize : 1,
            image : 'img/snowflakes.png'
        })
        $(document).snowfall({
            maxSpeed : 5,
            minSpeed : 1,
            maxSize : 20,
            minSize : 1,
            image : 'img/star.png'
        })
    })
  
},false)

