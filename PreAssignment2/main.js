const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const inputTask = document.querySelector('#task');
const btnAddTask = document.querySelector('.btn');
const taskList = document.querySelector('.tasks');
const btnRemoveAll = document.querySelector('.btnRemove');

btnRemoveAll.addEventListener('click', () => {
    taskList.innerHTML = '';
});

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log('clicked');
    if (inputTask.value === ''){

        msg.classList.add('error');
        msg.innerHTML = 'Please Enter a Task';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        var img_elem = document.createElement("img");
        li.appendChild(document.createTextNode(`${inputTask.value}`));
        li.classList.add('task');
        li.classList.add('tasks');
        img_elem.classList.add('.tick')

        //li.classList.add('tick')
        taskList.appendChild(li);
    }

    inputTask.value = '';
} 

taskList.addEventListener('click', (e) => {
    console.log('clicked');
    e.target.classList.toggle('taskCompleted');
})

