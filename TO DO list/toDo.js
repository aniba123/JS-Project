document.addEventListener('DOMContentLoaded', function () {
    let TaskList = [];
    let textInput = document.getElementById('text');
    let addTask = document.getElementById('addTask');
    let newTask = document.querySelector('.addTask');

    // Add task event
    addTask.addEventListener('click', function () {
        let NewTask = textInput.value.trim();
        if (NewTask === '') return;

        let task = {
            Task: NewTask,
            id: Date.now()
        };

        TaskList.push(task);
        renderTask(task);
        textInput.value = ''; // Clear input field after adding the task
    });

        // render Task
        function renderTask(task){
        let TaskDiv=    document.createElement('div');
        TaskDiv.classList.add('task');
        TaskDiv.innerHTML=`<span>${task.Task}</span>
        <button class='delete'>Delete</button>`;
            newTask.appendChild(TaskDiv)
        

        // delete funtion
        TaskDiv.querySelector('.delete').addEventListener('click',function(){
            newTask.removeChild(TaskDiv)
            TaskList=TaskList.filter(t=> t.id!==task.id)
        })
      

        // completed Task

        TaskDiv.addEventListener('click',function(u){
            if (u.target.classList.contains('delete')) return;
            TaskDiv.classList.toggle=('complete')
        })
        // TaskDiv.addEventListener('click', function (e) {
                //     if (e.target.classList.contains('delete')) return;
        
                //     TaskDiv.classList.toggle('complete');
                // });

    }





    // Render task in the DOM
    // function renderTask(task) {
    //     let TaskDiv = document.createElement('div');
    //     TaskDiv.classList.add('task-item');
    //     TaskDiv.innerHTML = `
    //         <span>${task.Task}</span>
    //         <button class='delete'>Delete</button>
    //     `;
    //     newTask.appendChild(TaskDiv);

    //     // Delete task event
    //     TaskDiv.querySelector('.delete').addEventListener('click', function () {
    //         newTask.removeChild(TaskDiv);
    //         TaskList = TaskList.filter(t => t.id !== task.id);
    //     });

    //     // Mark task as complete when clicked
    //     TaskDiv.addEventListener('click', function (e) {
    //         if (e.target.classList.contains('delete')) return;

    //         TaskDiv.classList.toggle('complete');
    //     });
    // }
});
