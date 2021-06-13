const time = document.querySelector('.time_zone');
const score = document.querySelector('.score_zone');
const ques = document.querySelector('.question .ques');
const key = document.querySelectorAll('.key');
const ans = document.querySelector('.ans .ans_zone');


// show_ans
key.forEach(key => {
    key.onclick = (e) =>{
        const result = e.target.innerHTML
       
        ans.textContent = parseInt(result) || parseInt(result) === 0 ?  `${result}` : '';
        if(result === "Enter"){
            console.log('Enter')
        }
    }
})
// show_ans
// question
let random_number_1 = Math.round(Math.random()*5)
let random_number_2 = Math.round(Math.random()*4)
const cancul = ['+','-'];
const ranC = Math.round(Math.random()*2);

const mondai = ()=>{
    if(random_number_2 > random_number_1){
       while(random_number_2 > random_number_1){
        random_number_2 = Math.round(Math.random()*4)
       }
    }
    const show_ques = ranC-1 < 0 ? `${random_number_1} ${cancul[0]} ${random_number_2}` : `${random_number_1} ${cancul[ranC-1]} ${random_number_2}`;
    ques.innerHTML = show_ques;
   
}

// question
//countdown time
let num = 5;
const countdown = () => {
   setInterval(() => {
        if(num<= 0 ){
            clearInterval(num = 0)
        }
        time.textContent = num;
        num--;
   },1000)
}
countdown();
mondai();
//countdown time