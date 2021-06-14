const item = document.querySelectorAll('.item');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset');
const play = document.querySelectorAll('.player');
const boot_tag = document.querySelectorAll('.boot');
let boot =0;
const winner = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
const player = [];
const boot_player = [];

const boot_play = () => {
    let random = Math.ceil(Math.random()*9);
    return random;
}
const left = (left) => {
    left.style.animation = `player 0.5s ease-in-out forwards`;
}
const right = (right) => {
    right.style.animation = `boot 0.5s ease-in-out forwards`;
}
const show_result = () => {
    result.style.animation = `player 0.5s ease-in-out forwards`;
    }
const check_winner = () =>{
    const win = winner.map(arr =>{
        if(arr.every(b => player.includes(b))){
            return 1
        }else{
            return 0
        }
    })
    if(win.some(c => c === 1 )){
        show_result()
        result.textContent = `You Win`
    }
    const boot_win = winner.map(arr =>{
        if(arr.every(b => boot_player.includes(b))){
            return 2
        }else{
            return 0
        }
    })
    if(boot_win.some(c => c === 2 ) && win.every(d => d === 0 )){
        show_result();
        result.textContent = `You Lose`
    }
    if(player.length>=5){
        if(boot_win.every(d => d === 0 ) && win.every(d => d === 0 )){
            show_result();
            result.textContent = `Tie Score`
        } 
    }
    reset.style.animation = `show_cell_Y_bottom 0.5s ease-in-out  forwards`
}

const data = (data) => {
    const numb = data.item.map(tag =>{
        return tag
    });

    item.forEach(list =>{
        list.onclick =(e) => {
            boot = boot_play();
            const tar = e.target.getAttribute('item');
            if(e.target.classList.contains('item')){
                left(e.target.querySelector('.player'))
            }
            //////////// clicked cell ///////////////
            if(e.target.classList.contains('player') || e.target.classList.contains('boot')){
                doubble_click(e.target.parentNode)
            }
            if( e.target.tagName === 'IMG'){
                doubble_click(e.target.parentNode.parentNode)
            }
           
            numb.forEach(o => {
                if(tar === o.item_number){
                    player.push(o.number);
                    player.sort((a,b)=> a-b);

                    while(player.includes(boot) || boot_player.includes(boot) || boot === 0){
                        boot = boot_play();
                        if(player.length-1 === 4){
                            break;
                        }
                    }
                    if(player.length-1 < 4){
                        boot_player.push(boot);
                        const local = item[boot-1].querySelector('.boot');
                        right(local);
                    }
                    check_winner();
                }
            })
        }
    })
    reset.onclick = () => {
        player.splice(0);
        boot_player.splice(0);
        play.forEach(i =>{
            i.style.animation = `player_reset 0.5s ease-in-out forwards`;
        })
        boot_tag.forEach(i =>{
            i.style.animation = `boot_reset 0.5s ease-in-out forwards`;
        })
        result.style.animation = `player_reset 0.5s ease-in-out forwards`;
        reset.style.animation = `hide_reset 0.5s ease-in-out  forwards`
        show_reset(0.1);
    }
}
///////////////////data ////////////////////
data({
    id: '#main',
    item : [
        {
            item_number : '1',
            number : 1
        },
        {
            item_number : '2',
            number : 2
        },
        {
            item_number : '3',
            number : 3
        },
        {
            item_number : '4',
            number : 4
        },
        {
            item_number : '5',
            number : 5
        },
        {
            item_number : '6',
            number : 6
        },
        {
            item_number : '7',
            number : 7
        },
        {
            item_number : '8',
            number : 8
        },
        {
            item_number : '9',
            number : 9
        },
    ]
}) 