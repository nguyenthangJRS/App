let show = [];
const show_random = () =>{
    return Math.ceil(Math.random()*4);
}
const show_random_reset = () =>{
    return Math.ceil(Math.random()*4);
}
const cell = (limit) => {
    for(let i = 0;i<item.length;i++){
        show[i] = show_random();
        item[i].style.animation = show[i] === 1 ? `show_cell_X 0.5s ease-in-out ${limit +i*0.15}s forwards` : show[i] ===2?
                                                  `show_cell_Y 0.5s ease-in-out ${limit +i*0.15}s forwards` : show[i] === 3 ?
                                                  `show_cell_X_right 0.5s ease-in-out ${limit +i*0.15}s forwards` :
                                                  `show_cell_Y_bottom 0.5s ease-in-out ${limit +i*0.15}s forwards`;
    }
}
const doubble_click = (tag) => {
    tag.style.background = `rgba(255, 118, 117,0.7)`;
                const time = setTimeout(()=>{
                    tag.style.background = `rgba(85, 239, 196,0.8)`
                },1000)
}
const show_reset = (limit) =>{
    for(let i = 0;i<item.length;i++){
        show[i] = show[i] + 1;
        if(show[i] === 5){
            show[i] = 1;
        }
        item[i].style.animation = show[i] === 1 ? `show_cell_X 0.5s ease-in-out ${limit +i*0.07}s forwards` : show[i] ===2?
                                                  `show_cell_Y 0.5s ease-in-out ${limit +i*0.07}s forwards` : show[i] === 3 ?
                                                  `show_cell_X_right 0.5s ease-in-out ${limit +i*0.07}s forwards` :
                                                  `show_cell_Y_bottom 0.5s ease-in-out ${limit +i*0.07}s forwards` ;
   
  }
}
cell(1.2);