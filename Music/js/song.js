play_btn.onclick = () => {
    page.animate([
        {transform : 'translateX(100%)'},
        {transform : 'translateX(0)'},
    ],{
        duration : 600,
        fill : 'forwards'
    })
}
page_back.onclick = () => {
    page.animate([
        {transform : 'translateX(0)'},
        {transform : 'translateX(100%)'},
    ],{
        duration : 600,
        fill : 'forwards'
    })
}
song_running.onclick = () => {
    play_check = !play_check;
    play_check ? song_running.querySelector('img').setAttribute('src','./img/pause.png') :  song_running.querySelector('img').setAttribute('src','./img/play_btn.png');
    play_check ? play.querySelector('img').setAttribute('src','./img/pause.png') :  play.querySelector('img').setAttribute('src','./img/play_btn.png');
    play_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none';
    page_img.style.animation = play_check ? 'animate 30s linear infinite' : 'none';
    playPause();
}
////////////////////////////////////////////////////////
function playPause() {
    play_check ?  aSong.pause() :aSong.play();
    !aSong.paused ? aSong.pause() : aSong.play();
}
function setPos(pos){
    aSong.currentTime = pos;
}
const mute = () => {
    muted = aSong.volume > 0 ? true : false
    if(muted){
        aSong.volume = vol;
        volume_audio.setAttribute('src','./img/register.png');
        control_volume.setAttribute('src','./img/register.png');
    }else{
        aSong.volume = 0;
        volume_audio.setAttribute('src','./img/muted.png');
        control_volume.setAttribute('src','./img/muted.png');
    }
}
const setVolume = (volume) =>{
    aSong.volume = volume;
    vol = volume;
    control_volume.nextElementSibling.value = aSong.volume;
    volume_audio.nextElementSibling.value = aSong.volume;
}
function skip(spot){
    if(spot == 'back'){
        aSong.currentTime = (aSong.currentTime - 5);
        console.log(1)
    }
     if(spot == 'next'){
        aSong.currentTime = (aSong.currentTime +5);
    }
}
////////////////////////////////////////////////////////////
loop.onclick = () => {
    count++;
    count = count === 4 ? 1 : count++;
    if(count === 1){
      loop.querySelector('img').setAttribute('src','./img/setting.png');
    }else if(count ===2){
        loop.querySelector('img').setAttribute('src','./img/loop1.png');
    }else if(count ===3){
        loop.querySelector('img').setAttribute('src','./img/loop.png');
    }
}
/////////////////////////////
