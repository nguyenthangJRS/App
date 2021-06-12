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
play.onclick = () => {
    play_check = !play_check;
    let url = play_check ? './img/pause.png' : './img/play_btn.png';
    play_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none' ;
    page_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none' ;
    play.querySelector('img').setAttribute('src',url)
    song_running.querySelector('img').setAttribute('src',url);
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
// console.log( playListSong)
function run(data){
    const running = document.querySelector(data.run_song);
    const songArr = running.querySelectorAll('.song img');
    const song_name = data.song

    content_name.textContent = `${song_name[0].name}`;
    page_name.textContent = `${song_name[0].name}`;
    aSong.src = `${song_name[0].url}`
    play_img.setAttribute('src',`${song_name[0].img}`);
    page_img.setAttribute('src',`${song_name[0].img}`);

    list_Li[0].classList.add('run');
    list_Li.forEach(i => {
        let att = i.classList.contains('run') ? './img/song.png' :  './img/play_song.png';
        i.querySelector('img').setAttribute('src',att);
    })
 /////////////////////////// next - prev song //////////////////////////
    left.onclick = () => {
        page_img.animate([
            {transform : 'translate(0)'},
            {transform : 'translate(-100px)',
            opacity : 0.2
        },
        ],{
            duration : 500,
        })
        // find song localtion/////////////////////////////////////////////
        const songA = song_name.map(item =>{
            return item.name
        })
        const newArr = songA;
        const index = newArr.indexOf(content_name.textContent);
        if(index >-1){
            number = index;
        }
       

        if(number > 0){
            content_name.textContent = `${song_name[number-1].name}`;
            page_name.textContent = `${song_name[number-1].name}`;
            aSong.src = `${song_name[number-1].url}`
            play_img.setAttribute('src',`${song_name[number-1].img}`);

           
            page_img.setAttribute('src',`${song_name[number-1].img}`)
                page_img.animate([
                    {transform : 'translate(100px)',
                    opacity: 0
                },
                    {transform : 'translate(0)',
                    opacity : 1
                },
                ],{
                    duration : 500,
                })
          
           

            list_Li[number].classList.remove('run');
            list_Li[number-1].classList.add('run');

            list_Li.forEach(i => {
                let att = i.classList.contains('run') ? './img/song.png' :  './img/play_song.png';
                i.querySelector('img').setAttribute('src',att);
            })
            
            
        }else if(number == 0) {
            content_name.textContent = `${song_name[song_name.length-1].name}`;
            page_name.textContent = `${song_name[song_name.length-1].name}`;
            aSong.src = `${song_name[song_name.length-1].url}`
            play_img.setAttribute('src',`${song_name[song_name.length-1].img}`);
            // show img animate 
            page_img.setAttribute('src',`${song_name[song_name.length-1].img}`);
            page_img.animate([
                {transform : 'translate(100px)',
                opacity: 0
            },
                {transform : 'translate(0)',
                opacity : 1
            },
            ],{
                duration : 500,
            })
            list_Li[0].classList.remove('run');
            list_Li[song_name.length-1].classList.add('run');
            list_Li.forEach(i => {
                let att = i.classList.contains('run') ? './img/song.png' :  './img/play_song.png';
                i.querySelector('img').setAttribute('src',att);
            })
            
        }
        play_check = false;
        play.querySelector('img').setAttribute('src','./img/play_btn.png');
        song_running.querySelector('img').setAttribute('src','./img/play_btn.png');
        play_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none';
        page_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none';
    }
    right.onclick = () => {
         // show img animate 
        page_img.animate([
            {transform : 'translate(0)'},
            {transform : 'translate(100px)',
            opacity : 0.2
        },
        ],{
            duration : 500,
        })
         // show img animate 
        const songA = song_name.map(item =>{
            return item.name
        })
        const newArr = songA;
        const index = newArr.indexOf(content_name.textContent);
        if(index >-1){
            number = index;
        }
        if(number >= song_name.length-1){
            content_name.textContent = `${song_name[0].name}`;
            page_name.textContent = `${song_name[0].name}`;
            aSong.src = `${song_name[0].url}`
            play_img.setAttribute('src',`${song_name[0].img}`);

            // show img animate 
            page_img.setAttribute('src',`${song_name[0].img}`);
            page_img.animate([
                {transform : 'translate(-100px)',
                opacity: 0
            },
                {transform : 'translate(0)',
                opacity : 1
            },
            ],{
                duration : 500,
            })

            list_Li[song_name.length-1].classList.remove('run');
            list_Li[0].classList.add('run');

            list_Li.forEach(i => {
                let att = i.classList.contains('run') ? './img/song.png' :  './img/play_song.png';
                i.querySelector('img').setAttribute('src',att);
            })
            
            
        }else if(number >= 0) {
            content_name.textContent = `${song_name[number+1].name}`;
            page_name.textContent = `${song_name[number+1].name}`;
            aSong.src = `${song_name[number+1].url}`
            play_img.setAttribute('src',`${song_name[number+1].img}`);
            page_img.setAttribute('src',`${song_name[number+1].img}`);
            page_img.animate([
                {transform : 'translate(-100px)',
                opacity: 0
            },
                {transform : 'translate(0)',
                opacity : 1
            },
            ],{
                duration : 500,
            })
            list_Li[number].classList.remove('run');
            list_Li[number+1].classList.add('run');
            list_Li.forEach(i => {
                let att = i.classList.contains('run') ? './img/song.png' :  './img/play_song.png';
                i.querySelector('img').setAttribute('src',att);
            })
            
        }
        play_check = false;
        play.querySelector('img').setAttribute('src','./img/play_btn.png');
        song_running.querySelector('img').setAttribute('src','./img/play_btn.png');
        play_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none';
        page_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none';
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
                play.querySelector('img').setAttribute('src','./img/play_btn.png');
                song_running.querySelector('img').setAttribute('src','./img/play_btn.png');
                play_check = false;
                play_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none' ;
                page_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none' ;
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
            const songA = song_name.map(item =>{
                return item.name
            })
            const newArr = songA;
            const index = newArr.indexOf(content_name.textContent);
            if(index >-1){
                number = index;
            }
            if(aSong.currentTime >= parseInt(timeline.max)){
                if(number < song_name.length -1){
                    content_name.textContent = `${song_name[number+1].name}`;
                    page_name.textContent = `${song_name[number+1].name}`;
                    aSong.src = `${song_name[number+1].url}`
                    play_img.setAttribute('src',`${song_name[number+1].img}`);
                    page_img.setAttribute('src',`${song_name[number+1].img}`);

                    list_Li[number].classList.remove('run');
                    list_Li[number+1].classList.add('run');

                    list_Li.forEach(i => {
                        let att = i.classList.contains('run') ? './img/song.png' :  './img/play_song.png';
                        i.querySelector('img').setAttribute('src',att);
                    })
                    aSong.play();
                    
                }else if(number >= song_name.length -1) {
                    content_name.textContent = `${song_name[0].name}`;
                    page_name.textContent = `${song_name[0].name}`;
                    aSong.src = `${song_name[0].url}`
                    play_img.setAttribute('src',`${song_name[0].img}`);
                    page_img.setAttribute('src',`${song_name[0].img}`);
                    list_Li[song_name.length -1].classList.remove('run');
                    list_Li[0].classList.add('run');
                    list_Li.forEach(i => {
                        let att = i.classList.contains('run') ? './img/song.png' :  './img/play_song.png';
                        i.querySelector('img').setAttribute('src',att);
                    })
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
                play_check = false
                play_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none';
                page_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none';
                content_name.textContent = `${song.name}`;
                page_name.textContent = `${song.name}`;
                aSong.src = `${song.url}`
                play_img.setAttribute('src',`${song.img}`)
                page_img.setAttribute('src',`${song.img}`)
                play.querySelector('img').setAttribute('src','./img/play_btn.png');
                song_running.querySelector('img').setAttribute('src','./img/play_btn.png');

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
                target_Li.forEach(i => {
                    let att = i.classList.contains('run') ? './img/song.png' :  './img/play_song.png';
                    i.querySelector('img').setAttribute('src',att);
                })
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
             img : './img/bg_2.jpg',
        },
        {
              id :3,
            name : 'The Hero',
            url : './img/theHero.mp3',
            rate : 62,
            className : 'theHero',
             img : './img/bg_3.jpg',
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
            url : './img/Yoru Ni Kakeru.mp3',
            rate : 50,
            className : 'monogakari',
             img : './img/ms.jpeg',
        },
    ]
})
