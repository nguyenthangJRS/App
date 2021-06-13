const app = document.querySelectorAll('.app');
const btn = document.querySelector('.app_wrap a');



app.forEach(app =>{
   app.classList.add('app_animation');
   const animation = document.querySelectorAll('.app_animation');
  
   for(let i=1;i<=animation.length;i++){
      if(app.classList.contains(`app_${i}`)){
         app.style.animation = ` fade 1s ease-in-out ${i*0.12}s forwards`;
      }

   }
})

btn.onclick = () => {
    window.alert('Wellcome to おみくじ');
}
