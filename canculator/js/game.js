window.addEventListener('DOMContentLoaded',function(){
    const ques = document.querySelector('.ques');
    const ans_zone = document.querySelector('.ans_zone');
    const array_key =document.querySelectorAll('.key');

    array_key.forEach(item => {
        item.onclick = (e) => {
            let key = e.target.innerHTML;
            let result;
            let rel = '';
            
            if(key != 'Del' && key != 'AC' && key != 'Enter'){
                ques.textContent += key;
            }
            // fix string start 0
            let string = ques.textContent.startsWith('0') ? ques.textContent.substr(1,ques.textContent.length) : ques.textContent;

            console.log(string);
            // show result
            const ans = () => {
                rel  = string.replaceAll('x','*').replaceAll(':','/').replaceAll(',','');
               return result = rel;
            }
            // delete character
            const del = () => {
                let newString =  string.substr(0,string.length -1);
                return newString;
            }
            ans();

            
            // check pressed key
            switch(key){
                case 'Del' : {
                    ques.textContent = del();
                    break;
                }
                case '.':{
                    if(string.length === 1){
                        string = '0'
                    }
                    break;
                } 
                case '+': 
                case '-': 
                case 'x': 
                case ':': { break; }
                case 'AC' : {
                    ques.textContent = '';
                    ans_zone.textContent = '';
                    break;
                }
                case 'Enter':{  
                    ques.textContent = ques.textContent.length === 0 ? 0 : (Math.round(eval(result)*1000)/1000).toLocaleString('en');
                    ans_zone.textContent = '';
                    break;
                }
                default : {
                    ans_zone.textContent = string === '' ? 0 : (Math.round(eval(result)*1000)/1000).toLocaleString('en');
                }
            }
        }
    })
},false)