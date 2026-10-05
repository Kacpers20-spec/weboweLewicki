const addButton: HTMLButtonElement|null = document.querySelector("#todoAddButton");
const inputTextField: HTMLButtonElement|null = document.querySelector("#todoInputField");
const todosContainer: HTMLDivElement = document.querySelector("#todoContainer")!;

type Todo = {
    id: number,
    title: string,
    description?: string,
    isDone?: boolean,
}

let arrayOfTodos: Todo[] = [];

if (addButton && inputTextField && todosContainer) {
    
    addButton?.addEventListener('click',(e) =>{
        let textValue: string = inputTextField.value;

        arrayOfTodos.push({id: arrayOfTodos.length, title:textValue});
        inputTextField.value='';
        buildList();
    })
}

function buildList() {
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("card-body","card","shadow");

        let id = document.createElement('p');
        id.classList.add("small");
        let title = document.createElement('h3');
        title.classList.add("h3");
        let button = document.createElement('button');
        button.classList.add("button","bg-danger","rounded","text-white");

        id.textContent= "id: " + element.id;
        title.textContent = "tytul: " + element.title;
        button.innerText= "delete";

        container.appendChild(id);
        container.appendChild(title);
        container.appendChild(button);

        todosContainer?.appendChild(container);
    })
}