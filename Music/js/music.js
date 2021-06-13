const music = document.querySelector('.menu');
const music_span = document.querySelectorAll('.menu_btn span');
const list = document.querySelector('.menu_list');
const play = document.querySelector('.play_audio');
const play_img = document.querySelector('.play_img img');
const playlist = document.querySelector('.playlist');
const content_name = document.querySelector('.content_name');
const song_run = document.querySelector('.song img');
const volume_audio = document.querySelector('.volume_audio img');
const timeline = document.querySelector('#seek');
const timeline1 = document.querySelector('#timeLine');
const pacent = document.querySelector('#pacent');
const page = document.querySelector('.page');
const song_running = document.querySelector('.running');
const play_btn = document.querySelector('.play_btn');
const page_back  = document.querySelector('.page_back img');
const control_volume  = document.querySelector('.control_volume img');
const page_img  = document.querySelector('.page_img .img_about');
const page_name  = document.querySelector('.page_name');
const loop  = document.querySelector('.loop');
const left  = document.querySelector('.left');
const right  = document.querySelector('.right');
const list_Li  = document.querySelectorAll('.song');

let aSong = new Audio;
let muted = false;
let vol = 1;
let curtime;
aSong.type = 'audio/mpeg';
let count = 1
let number ;

let music_check =false;
let play_check = false;
let check_volume = false;

volume_audio.onclick = () => {
    check_volume = !check_volume;
    volume_audio.nextElementSibling.style.display = check_volume ? `block` : `none`;
}
const runMusic  = () =>{
    play_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none' ;
    page_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none' ;
    let url = play_check ? './img/pause.png' : './img/play_btn.png';
    play.querySelector('img').setAttribute('src',url)
    song_running.querySelector('img').setAttribute('src',url);
    
 }
play.onclick = () => {
    play_check = !play_check;
    runMusic();
    playPause();
}


music.onclick = () =>{
    music_check = !music_check
    if(music_check){
        music_span.forEach(item => {
        item.classList.add('show');
        item.classList.remove('hide')
        })
        list.style.animation = `show_menu 0.8s ease-in-out forwards`;
    }else{
        music_span.forEach(item => {
        item.classList.remove('show');
        item.classList.add('hide');
        })
        list.style.animation = `hide_menu 0.8s ease-in-out forwards`;
    }
}
function run(data){
    const running = document.querySelector(data.run_song);
    const songArr = running.querySelectorAll('.song img');
    const song_name = data.song

    const content = (num) => {
        content_name.textContent = `${num.name}`;
        page_name.textContent = `${num.name}`;
        aSong.src = `${num.url}`
        play_img.setAttribute('src',`${num.img}`);
        page_img.setAttribute('src',`${num.img}`);
    }
    const check_run = (remove_run,add_run) => {
        list_Li[remove_run].classList.remove('run');
        list_Li[add_run].classList.add('run');
        list_Li.forEach(i => {
        let att = i.classList.contains('run') ? './img/song.png' :  './img/play_song.png';
        i.querySelector('img').setAttribute('src',att);
        })
        
    }
    const find_number = () => {
        const songA = song_name.map(item =>{
            return item.name
        })
        const newArr = songA;
        const index = newArr.indexOf(content_name.textContent);
        if(index >-1){
            number = index;
        }
    }
    const hide_left = (left) =>{
        left.animate([
            {transform : 'translate(0)'},
            {transform : 'translate(-100px)',
            opacity : 0.2
        },
        ],{
            duration : 500,
        })
    }
    const show_left = (right) => {
        right.animate([
            {transform : 'translate(100px)',
            opacity: 0
        },
            {transform : 'translate(0)',
            opacity : 1
        },
        ],{
            duration : 500,
        })
    }
    const hide_right = (left) =>{
        left.animate([
            {transform : 'translate(0)'},
            {transform : 'translate(100px)',
            opacity : 0.2
        },
        ],{
            duration : 500,
        })
    }
    const show_right = (right) => {
        right.animate([
            {transform : 'translate(-100px)',
            opacity: 0
        },
            {transform : 'translate(0)',
            opacity : 1
        },
        ],{
            duration : 500,
        })
    }
    const check_song_running = (list) => {
        list.forEach(i => {
            let att = i.classList.contains('run') ? './img/song.png' :  './img/play_song.png';
            i.querySelector('img').setAttribute('src',att);
        })
    }
    //////////////////////////////////////////////////////////////////
        content(song_name[4]);
        list_Li[4].classList.add('run');
        check_song_running(list_Li);
 /////////////////////////// next - prev song //////////////////////////
    left.onclick = () => {
            hide_left(page_img);
        // find song localtion/////////////////////////////////////////////
            find_number();
        if(number > 0){
            content(song_name[number-1]);
            show_left(page_img);
            check_run(number,number-1);
                
        }else if(number == 0) {
            content(song_name[song_name.length-1]);
            show_left(page_img);
            check_run(0,song_name.length-1);
        }
        play_check = true;
            runMusic();
            aSong.play();
    }
    right.onclick = () => {
            hide_right(page_img);
            find_number();
        if(number >= song_name.length-1){
            content(song_name[0]);
            show_right(page_img);
            check_run(song_name.length-1,0);

        }else if(number >= 0) {
            content(song_name[number+1]);
            show_right(page_img);
            check_run(number,number+1)
        }
        play_check = true;
            runMusic();
            aSong.play();
    }
  //////////////////////////      // change time for media 
    aSong.ontimeupdate = () => {
        curtime = parseInt(aSong.currentTime,10);
        timeline.max = aSong.duration;
        timeline.value = curtime;
        timeline1.max = aSong.duration;
        timeline1.value = curtime;

        if(count === 1){
            if(aSong.currentTime >= parseInt(timeline.max)){
                play_check = false;
                runMusic();
                aSong.pause();
            }
        }
        if(count === 2){
            if(aSong.currentTime >= parseInt(timeline.max)){
                aSong.currentTime = 0;
                aSong.play();
            }
        }
        if(count === 3){
            find_number();
            if(aSong.currentTime >= parseInt(timeline.max)){
                if(number < song_name.length -1){
                    content(song_name[number+1]);
                    check_run(number,number+1);
                    play_check =true;
                    runMusic();
                    aSong.play();
                }else if(number >= song_name.length -1) {
                    content(song_name[0]);
                    check_run(song_name.length -1,0)
                    play_check =true;
                    runMusic();
                    aSong.play();
                }
            }
        }
    }
 // change rate for song 
    pacent.animate([
        {transform : 'translateX(-100%)'},
        {transform : `translateX(${song_name[0].rate-101}%)`}
    ],{
        duration : 500,
        fill: 'forwards',
        easing: 'ease-in-out',
        delay : 400
    })
//////////////////////////////////// find click target ?//////////////////////////
    songArr.forEach(item => {
        item.onclick = (e) => {
          const target = e.target.parentNode.parentNode;
          let song_target = target.getAttribute('song_name');
          const target_Li = target.parentNode.querySelectorAll('li');
         
          song_name.forEach(song => {
              if(song_target === song.className){
                play_check = true;
                runMusic();
                content(song);
                aSong.play();

                pacent.animate([
                    {transform : 'translateX(-100%)'},
                    {transform : `translateX(${song.rate-101}%)`}
                ],{
                    duration : 500,
                    fill: 'forwards',
                    easing: 'ease-in-out',
                })
                
                target_Li.forEach(i => {
                    if(i.classList.contains('run')){
                        i.classList.remove('run');
                    }
                })
                target.classList.add('run');
                check_song_running(target_Li);
            }
          })
        }
    })
}
///////////////////////////////////////// update data?/////////////////////////////////////////////////
run({
    run_song : '.play_song',
    song :[
        {
            id :1,
            name : 'The World',
            url : './img/theWourld.mp3',
            rate : 75,
            className : 'theWorld',
            img : './img/ms2.jpeg'
        },
        {
              id :2,
            name : '希望の唄',
            url : './img/shokugeki.mp3',
            rate : 85,
            className : 'kibo',
             img : './img/ms4.jpeg',
        },
        {
              id :3,
            name : 'The Hero',
            url : './img/theHero.mp3',
            rate : 62,
            className : 'theHero',
             img : './img/ms5.jpeg',
        },
        {
              id :4,
            name : 'Voracity',
            url : './img/voracity.mp3',
            rate : 85,
            className : 'Voracity',
             img : './img/ms6.jpeg',
        },
        {
              id :5,
            name : 'Yoru Ni Kakeru',
            url : './img/Yoru Ni Kakeru.mp3',
            rate : 50,
            className : 'yoruNiYokeru',
             img : './img/ms3.jpeg',
        },
        {
              id :6,
            name : 'Gurenge',
            url : './img/Gurenge - LiSA.mp3',
            rate : 65,
            className : 'Gurenge',
             img : './img/ms9.jpeg',
        },
        {
            id :7,
          name : 'Voracity 1',
          url : './img/voracity.mp3',
          rate : 85,
          className : 'Voracity_1',
           img : './img/ms4.jpg',
      },
        {
              id :8,
            name : 'Yoru Ni Kakeru 1',
            url : './img/Yoru Ni Kakeru.mp3',
            rate : 50,
            className : 'yoruNiYokeru_1',
             img : './img/ms8.jpeg',
        },
        {
              id :8,
            name : 'Ikimono Gakari',
            url : './img/ikimono.mp3',
            rate : 50,
            className : 'monogakari',
             img : './img/ms.jpeg',
        },
    ]
})
