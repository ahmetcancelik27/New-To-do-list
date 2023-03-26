const generalcontainer = document.querySelector(".generalcontainer")
const forcontainer = document.querySelector(".forcontainer")
const form = document.querySelector(".todo_form");
const input = document.querySelector(".todo_input");
const todo = document.querySelector(".todo")



let second_forms;
let second_inputs;
let second_buttons;






const addHTML = (todo) => {

    

    const container = document.createElement("div")
    container.classList.add("container")

    const todo_container = document.createElement("div")
    todo_container.classList.add("todo_container")

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    const maintodo = document.createElement("div")
    maintodo.classList.add("maintodo")

    const todo_left = document.createElement("div")
    todo_left.classList.add("todo_left")

    const todo_cb = document.createElement("input")
    todo_cb.type= "checkbox"
    todo_cb.checked = todo.isCompleted
    todo_cb.classList.add("todo_cb")

    const todo_text = document.createElement("span")
    todo_text.textContent = todo.text
    todo_text.classList.add("todo_text")

    todo_left.appendChild(todo_cb)
    todo_left.appendChild(todo_text)
    
    const todo_right = document.createElement("div")
    todo_right.classList.add("todo_right")
    
    const second_form = document.createElement("form")
    second_form.classList.add("second_form")
    
    const second_input = document.createElement("input")
    second_input.placeholder = "type here.."
    second_input.classList.add("second_input")
    
    const second_button = document.createElement("button")
    second_button.textContent = "+"
    second_button.classList.add("second_button")
    second_form.appendChild(second_input)
    second_form.appendChild(second_button)

    todo_right.appendChild(second_form)
    
    
    const todo_delete = document.createElement("button")
    todo_delete.classList.add("todo_delete")
    todo_delete.textContent = "Delete"
    
    const todo_edit = document.createElement("button")
    todo_edit.classList.add("todo_edit")
    todo_edit.textContent = "Edit"
    
    const todo_save = document.createElement("button")
    todo_save.classList.add("todo_save")
    todo_save.textContent = "Save"

    todo_right.appendChild(todo_delete)
    todo_right.appendChild(todo_edit)
    todo_right.appendChild(todo_save)

    maintodo.appendChild(todo_left)
    maintodo.appendChild(todo_right)

    todoDiv.appendChild(maintodo)

    todo_container.appendChild(todoDiv)
    container.appendChild(todo_container)
    forcontainer.appendChild(container)

    generalcontainer.appendChild(forcontainer)
}



const startConf = ()=> {

    const todos = JSON.parse(localStorage.getItem("todos"));
    if(!todos) {
        localStorage.setItem("todos", JSON.stringify([]))
    } else {
        todos.forEach(todo => {
            addHTML(todo);
     });
            second_forms = document.querySelectorAll(".second_form")
            second_inputs = document.querySelectorAll(".second_input")
            second_buttons = document.querySelectorAll(".second_button")
            
     }

}


startConf();


const addTodo = (e) => {
    e.preventDefault()
    
    inputVal = input.value;

    const todo = {
        text: inputVal,
        isCompleted: false,
    }

    const todos = JSON.parse(localStorage.getItem("todos"))
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
    
    addHTML(todo);
    form.reset()
}







const secondAddTodo = (e) => {
    e.preventDefault()
    
    const formsvalue = e.target.parentElement.children[0]
    let value = formsvalue.children[0].value // değeri aldık
    

    // const isCompleted = e.target.parentElement.parentElement.children[0]
    // const isCompleted1 = isCompleted.children[0] // checked durumunu aldık
    
   
    const listtodo = {
        text: value,
        isCompleted1 :false,
    }

    const listtodositems = JSON.parse(localStorage.getItem("listtodos"))
    listtodositems.push(listtodo)
    localStorage.setItem("listtodos", JSON.stringify(listtodositems))

    const forms = e.target.parentElement.parentElement.parentElement
   
    

    const listtodos = document.createElement("div")
    listtodos.classList.add("listtodos")
    
    
    const listitem = document.createElement("div")
    listitem.classList.add("listitem")
    
    const listtodo_left = document.createElement("div")
    listtodo_left.classList.add("listtodo_left")
    
    const listtodo_cb = document.createElement("input")
    listtodo_cb.type= "checkbox"
    listtodo_cb.checked = listtodo.isCompleted1
    listtodo_cb.classList.add("listtodo_cb")
    
    const listtodo_text = document.createElement("span")
    listtodo_text.textContent = listtodo.text
    listtodo_text.classList.add("listtodo_text")
    
    listtodo_left.appendChild(listtodo_cb)
    listtodo_left.appendChild(listtodo_text)
    
    
    const listtodo_right = document.createElement("div")
    listtodo_right.classList.add("listtodo_right")
    
    const listtodo_delete = document.createElement("button")
    listtodo_delete.classList.add("listtodo_delete")
    listtodo_delete.textContent = "Delete"
    
    const listtodo_edit = document.createElement("button")
    listtodo_edit.classList.add("listtodo_edit")
    listtodo_edit.textContent = "Edit"
    
    const listtodo_save = document.createElement("button")
    listtodo_save.classList.add("listtodo_save")
    listtodo_save.textContent = "Save"
    
    listtodo_right.appendChild(listtodo_delete)
    listtodo_right.appendChild(listtodo_edit)
    listtodo_right.appendChild(listtodo_save)
    
    listitem.appendChild(listtodo_left)
    listitem.appendChild(listtodo_right)
    
    listtodos.appendChild(listitem)
    forms.appendChild(listtodos)

    const resetForm = e.target.parentElement.children[0]
    let value1 = resetForm.children[0]
    value1.value ="" // formu sıfırlama
}

const startConf2 = ()=> {

    const listtodos = JSON.parse(localStorage.getItem("listtodos"));
    if(!listtodos) {
        localStorage.setItem("listtodos", JSON.stringify([]))
    }
     

}
startConf2();



second_forms.forEach(form => form.addEventListener("submit" , secondAddTodo))
form.addEventListener("submit", addTodo)



























