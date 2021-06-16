

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
    setTimeout(function(){
        let popmsg = 'いらっしゃい！おみくじ引いてって！';
        window.alert(popmsg)
    },5000)
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
        n === 0 ?  type(40,'#c0392b',0) :n===1 ?  type(34,'#e67e22',1) : n===2 ? type(30,'#f1c40f',2) :n===3 ? type(25,'#16a085',3) :
        n===4 ? type(20,'#3498db',4) : type(16,'#c8d6e5',5)
        e.target.style.animation = `none `;
    },2000);

    // snowfall stop
    $(document).snowfall('clear');
    if(n===0){

    }
    // snowfall
    const rain = (img) => {
        $(document).snowfall({
            maxSpeed : 5,
            minSpeed : 1,
            maxSize : 20,
            minSize : 1,
            image : img
        })
    } 
    $(document).ready(function(){
        setTimeout(()=>{
            if(n === 5){
                rain('img/snowflakes.png');
            }
            if(n === 4){
                rain('img/snowflakes.png');
                rain('img/star.png');
            }
            if(n === 3){
                rain('img/snowflakes.png');
                rain('img/star.png');
                rain('img/sakura_hanabira.png');
            }
            if(n === 2){
                rain('img/snowflakes.png');
                rain('img/star.png');
                rain('img/sakura_hanabira.png');
                rain('img/banana.png');
            }
            if(n === 1){
                rain('img/snowflakes.png');
                rain('img/star.png');
                rain('img/sakura_hanabira.png');
                rain('img/banana.png');
                rain('img/banana.png');
                rain('img/banana.png');
            }
            if(n === 0){
                rain('img/snowflakes.png');
                rain('img/star.png');
                rain('img/sakura_hanabira.png');
                rain('img/banana.png');
                rain('img/banana.png');
                rain('img/banana.png');
                rain('img/stawberry.png');
            }
        },2000)
        
    })
  
},false)

