
const button = document.querySelector('.add_button');
const li_source = document.querySelector('.task_list');
const pr_list_source = document.querySelector('.periority_list');
/*console.log( task_date.innerTex) */

button.addEventListener('click', function(e){
    e.preventDefault();
    
    let task = document.querySelector("input[type='textarea']").value;
    let task_date = document.querySelector("input[type='date']").value;
    let priority = document.querySelector('input[name="choice"]:checked').labels[0].textContent;

    const li = document.createElement('li');
    const date = document.createElement('span');
    const txt = document.createElement('p');
    const del_button = document.createElement('button');
    const done_button = document.createElement('button');
    const div_buttons = document.createElement('div');
    
    date.textContent = task_date;
    del_button.textContent = 'X';
    done_button.textContent = '✓';
    txt.textContent=task;

    del_button.classList.add('del_button')
    done_button.classList.add('done_button')
    div_buttons.classList.add('buttons')
    div_buttons.appendChild(del_button);
    div_buttons.appendChild(done_button);

    li.appendChild(txt);
    li.appendChild(date);
    li.appendChild(div_buttons);
    li.classList.add('grid');
    li_source.appendChild(li);

    if(priority=='High'){
        li.classList.add('high');
        const pr_li = document.createElement('li');
        const date = document.createElement('span');
        const txt = document.createElement('p');
        date.textContent = task_date;
        txt.textContent = task;
        pr_li.appendChild(txt);
        pr_li.appendChild(date);
        pr_li.classList.add('grid')
        pr_list_source.appendChild(pr_li);
    };
    
    const all_tasks = document.querySelector('.task_list')

    all_tasks.addEventListener('click', function(e){
        e.preventDefault();
        if(e.target.className=='del_button'){
            const del_li = e.target.parentElement.parentElement;
            all_tasks.removeChild(del_li);

        }else if(e.target.className=='done_button'){
            const done_li = e.target.parentElement.parentElement;
            done_li.firstElementChild.classList.add('line_through');
            done_li.firstElementChild.nextSibling.classList.add('line_through');
            pr_list_source.parentElement.removeChild(done_li);
        }
    });

});

