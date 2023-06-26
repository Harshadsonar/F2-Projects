const createIssueButton = document.getElementById("create-issue");
const box = document.getElementsByClassName("box")[0];

/*
    TODO, IN_PROGRESS, COMPLETED

    Data Management :-
    {
        taskName: "task_name",
        status: "TODO",
        description: "sdahdfh",
        assignee: "Aravind"
    }

*/
/*
<div class="item">
            <textarea name="" id="" cols="30" rows="3" style="resize: none;"></textarea>
            <select name="" id="">
                <option value="">ABC</option>
                <option value="">XYZ</option>
            </select>
        </div>
*/
const newModal = document.createElement("div");
newModal.id = "modal";
newModal.className = "modal";
newModal.innerHTML = `<div class="modal-body">
    <form>
        <span class="material-icons close" onclick="closeModal()">close</span>
        <p style="color: #182a4d; font-size: 20px;">Add Task</p>
        <input required type="text" name="taskName" placeholder="Task Name">
        <textarea required type="text" rows="3" style="resize: none;" name="description" placeholder="description"></textarea>
        <input required type="text" name="assignee"
        placeholder="asignee">
        <select name="status">
            <option value="TODO">TODO</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
        </select>
        <button type="submit">Create</button>
    </form>
</div>`

function closeModal() {
    newModal.remove();
}

function addNewTask(task) {
    // <div class="card">
    //             <p class="task-name">Task Name</p>
    //             <p class="description">Some random description</p>
    //             <div class="status-container">
    //                 <p data-short-name="${nickName}" data-bg-color="yellow" class="assignee">Aravind</p>
    //                 <p class="status">In Progress</p>
    //             </div>
    //          </div>

    const card = document.createElement("div");
    card.className = "card";
    const words = task.assignee.split(" ");
    let nickName = words[0][0].toUpperCase();
    if (words.length > 1) {
        nickName += words[words.length - 1][0].toUpperCase();
    }

    card.innerHTML = `
    <p class="task-name">Task Name</p>
    <p class="description">Some random description</p>
    <div class="status-container">
        <p data-short-name="SA" data-bg-color="yellow" class="assignee">Aravind</p>
        <p class="status">In Progress</p>
    </div>`;


    const box = document.getElementById(task.status);

    box.appendChild(card);
}

function onSubmitForm(event) {
    (event) => {
        event.preventDefault();
        const formElement = event.target;
        const userData = {
            taskName: formElement["taskName"].value.trim(),
            name: formElement["assignee"].value.trim(),
            status: formElement["status"].value,
            description: formElement["description"].value.trim()
        }
        closeModal();
        addNewTask(userData);
    }
}

createIssueButton.addEventListener("click", () => {
    document.body.appendChild(newModal);
    const form = document.querySelector(".modal form");
    form.removeEventListener("submit", onSubmitForm);
    form.addEventListener("submit", onSubmitForm);


    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formElement = event.target;
        const userData = {
            taskName: formElement["taskName"].value.trim(),
            name: formElement["assignee"].value.trim(),
            status: formElement["status"].value,
            description: formElement["description"].value.trim()
        }
        closeModal();
        addNewTask(userData);
    })

    // createIssueButton.remove();
    // const itemContainer = document.createElement("div");
    // itemContainer.className = "item";
    // itemContainer.innerHTML = `<textarea name="" id="" cols="30" rows="3" style="resize: none;"></textarea>
    // <select name="" id="">
    //     <option value="">ABC</option>
    //     <option value="">XYZ</option>
    // </select>`;

    // box.appendChild(itemContainer);
    // itemContainer.children[0].focus();

})