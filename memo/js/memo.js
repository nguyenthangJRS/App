const form_memo = document.querySelector('.memo_write');
const table_content = document.querySelector('.table_content');

form_memo.onsubmit = (e) => {
    e.preventDefault();
    const content = e.target.querySelector('.memo_input').value;
        const createElem = document.createElement('tr');
        createElem.classList.add('count')
        const countClass = document.querySelectorAll('.count');
        let count = countClass.length +1;
      
        createElem.innerHTML = `
                                <td class='id_work'>${count}</td>
                                <td class='td_content' width='250'>${content}</td>
                                <td class = 'delete'> <img src="./img/remove.png" alt=""></td>
                                `
        table_content.append(createElem);
        e.target.querySelector('.memo_input').value = ''
        table_content.querySelectorAll('td').forEach(item => {
            item.onclick = () =>{
                if( item.classList.contains('delete')){
                    item.parentNode.style.animation = `out 0.8s ease-in-out 0.1s forwards`
                    setTimeout(()=>{
                        table_content.removeChild(item.parentNode);
                        const id_work = table_content.querySelectorAll('.id_work');
                        count = table_content.querySelectorAll('.count').length;
                        for(let i = 0;i<count;i++){
                            id_work[i].innerHTML = `${i+1}`;
                        }

                    },1000);
                    // console.log(item.parentNode)
                }
            }
        })
    }

    
