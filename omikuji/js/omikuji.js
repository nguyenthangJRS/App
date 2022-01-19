"use strict";
let n = "";
let nBefore = "";

window.addEventListener("DOMContentLoaded",
    function() {
        $("header").textillate({
            loop: false,
            minDisplayTime: 2000,
            initialDelay: 2000,
            autoStart: true,
            in: {
                effect: "fadeIntellectBig",
                delayScale: 1.5,
                delay: 50,
                sync: false,
                shuffle: true
            }

        });
        $(function() {
            ScrollReveal().reveal("#btn1", { duration: 9000 });
        });
        setTimeout(
            function() {
                let popMessage = "いらっしゃい！おみくじ引いてって！";
                window.alert(popMessage);
            },
            "3000"
        );
    }, false
);

const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
const omikujiTextImage = document.getElementById("omikujiTextImage");

omikujiTextImage.style.opacity = 0;

btn1.addEventListener("click",
    function() {

        let resultText = ["./image/1.jpg", "./image/2.jfif", "./image/3.jpg", "./image/4.png", "./image/5.jpg"];
        while(n === nBefore){
            n = Math.floor(Math.random() * resultText.length);
        }
        nBefore = n;

        let resultMaxSpeed = [10, 10, 8, 5, 5,];
        let resultMaxSize = [30, 30, 30,40,30];
        let resultImage = ["image/33.png", "image/31.png", "image/sakura_hanabira.png", "image/28.png", "image/32.png"];
        let resultSound = ["sound/omikuji_sound1.mp3", "sound/omikuji_sound2.mp3", "sound/omikuji_sound3.mp3", "sound/omikuji_sound1.mp3", "sound/omikuji_sound2.mp3"]

        omikujiTextImage.src = resultText[n];
        omikujiTextImage.classList.add("omikujiPaper");
        omikujiTextImage.addEventListener("animationend",() => {
                omikujiTextImage.classList.remove('omikujiPaper');
                omikujiTextImage.style.opacity = 1;
            },false
        );

        $(document).snowfall("clear");
        $(document).ready(function() {
            $(document).snowfall({
                maxSpeed: resultMaxSpeed[n],
                minSpeed: 1,
                maxSize: resultMaxSize[n],
                minSize: 1,
                image: resultImage[n],
            })
        })
        let music= new Audio(resultSound[n]);
        music.currentTime=0;
        music.play();
    }, false
);