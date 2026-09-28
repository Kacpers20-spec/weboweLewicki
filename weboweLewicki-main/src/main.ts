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
        container.classList.add("card","card-body");

        let title = document.createElement('h3');
        let id = document.createElement('p');

        title.textContent = "tytul: " + element.title;
        id.textContent= "id: " + element.id;

        container.appendChild(title);
        container.appendChild(id);

        todosContainer?.appendChild(container);
    })
}