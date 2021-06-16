
const back_animation = (local,start,end) => {
    local.animate([
        {transform : `translateX(${start}%)`},
        {transform : `translateX(${end}%)`},
    ],{
        duration : 600,
        fill : 'forwards'
    })
}
play_btn.onclick = () => {
    back_animation(page,100,0);
}
page_back.onclick = () => {
    back_animation(page,0,100);
}
song_running.onclick = () => {
    play_check = !play_check;
    runMusic();
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
// regis form 
register.onclick =() => {
     music_check = !music_check;
    show_menu_board();
    register_flag = !register_flag;
    register_flag ? register_login(register_area,1) : register_login(register_area,2);
    register_flag ? animate_bg(background,1) : animate_bg(background,2);
}
login.onclick =() => {
     music_check = !music_check;
    show_menu_board();
    loggin_flag = !loggin_flag;
    loggin_flag ? register_login(login_area,1) : register_login(login_area,2);
    loggin_flag ? animate_bg(background,1) : animate_bg(background,2);
}
have_acount.onclick = () => {
    register_flag = false;
    loggin_flag = true;
    register_flag ? register_login(register_area,1) : register_login(register_area,2);
    loggin_flag ? register_login(login_area,1) : register_login(login_area,2);
}
go_login.onclick = () => {
    register_flag = true;
    loggin_flag = false;
    register_flag ? register_login(register_area,1) : register_login(register_area,2);
    loggin_flag ? register_login(login_area,1) : register_login(login_area,2);
}