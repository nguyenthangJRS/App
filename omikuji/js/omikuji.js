

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


const btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    let n = Math.floor(Math.random()*3);
    switch(n){
        case 0:{
            btn.textContent = "Very Happy!!";
            btn.style.color = "#ff0000";
            btn.style.fontSize = "40px";
            btn.style.lineHeight = "50px";
            break;
        }
        case 1:{
            btn.textContent = "Happy!!";
            btn.style.color = "#ff0001";
            btn.style.fontSize = "30px";
             break;
        }
        case 2:{
            btn.textContent = "UnHappy!!";
            btn.style.color = "#261e1c";
            btn.style.fontSize = "20px";
             break;
        }
    }
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
    })
},false)

