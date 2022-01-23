
const button = document.querySelector('.add_button');
const li_source = document.querySelector('.task_list');
const pr_list_source = document.querySelector('.periority_list');
/*console.log( task_date.innerTex) */

/* Click event to add task */
button.addEventListener('click', function(e){
    e.preventDefault();
    
    /* to display list, priority list and stat conatiners  */
    const unhide = document.querySelectorAll('.list_container .hide');
    unhide.forEach(function(e){
        e.classList.remove('hide');
    });

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

    del_button.classList.add('del_button');
    done_button.classList.add('done_button');
    div_buttons.classList.add('buttons');
    div_buttons.appendChild(del_button);
    div_buttons.appendChild(done_button);

    li.appendChild(txt);
    li.appendChild(date);
    li.appendChild(div_buttons);
    li.classList.add('grid');
    li_source.appendChild(li);

    /* To show Hign priority tasks separately */
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
    
    /* Click event for delete and completed buttons */
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

    /* Updating current no of live tasks */ 
    const all_task_list = document.querySelectorAll('.task_list li');
    no_task.innerText =all_task_list.length;

    /* Updating current no of high priority tasks */ 
    const hp_task_list = document.querySelectorAll('.task_list .high');
    no_hp_task.innerText = hp_task_list.length;
    console.log(hp_task_list)

});

/* Adding no of live tasks */ 
const no_task = document.createElement('span');
const task_element = document.querySelector('.stats p');
task_element.appendChild(no_task);

/* Adding no of high priority tasks */ 
const no_hp_task = document.createElement('span');
const hp_task_element = document.querySelectorAll('.stats p')[1];
hp_task_element.appendChild(no_hp_task);

/* keyup event for search bar - to display matching list */
const search_bar = document.querySelector('.search input');
search_bar.addEventListener('keyup', function(e){
    const search_str = e.target.value.toLowerCase();
    const all_task_list = document.querySelectorAll('.task_list li');

    /* matching the search string with task name, matched tasks are displayed */
    all_task_list.forEach( function(book){
        const title = book.firstElementChild.textContent.toLowerCase();

        if(title.indexOf(search_str) != -1){
            book.style.display= 'grid';
        }else{
            book.style.display='none';
        }
    });
});

/* Event for check box - to hide all the tasks */
const hide = document.querySelector('.check input');
hide.addEventListener('change', function(e){
    const tasks = document.querySelector('.list_container div ul');
    if(hide.checked){
        tasks.style.display='none';
    }else{
        tasks.style.display='inherit';
    }
});


