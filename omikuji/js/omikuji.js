const btn = document.querySelector('.wrapper_btn');

const happy = ['Very Happy','Happy','Un Happy'];
const ranNumber = () =>{
    return Math.round((Math.random())*2);
}

btn.onclick = () => {
    let x = ranNumber();
    btn.querySelector('span').innerHTML = `${happy[x]}`;
    console.log(x);
}