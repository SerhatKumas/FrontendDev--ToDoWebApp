var toDoCounter= 1;

function addToDoElementToList(){
    toDoCounter++;
    let toDoItemString = "todo"+toDoCounter;
    //Li tag creation
    let liTag= document.createElement("li");
    liTag.setAttribute("class","list-group-item");
    liTag.setAttribute("id", toDoItemString+"li");

    //input creation
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("required", "");
    input.setAttribute("minLength","4");
    input.setAttribute("maxLength","30");
    input.setAttribute("size","40rem");
    

    //Button creation
    let button = document.createElement("button");
    button.setAttribute("id", toDoItemString);
    button.textContent = " Sil ";
    button.setAttribute("class","btn btn-danger");
    button.onclick = deleteFromToDoList;
    button.setAttribute("style","margin-left: 1rem")

    liTag.appendChild(input);
    liTag.appendChild(button);

    document.getElementById("todolist").appendChild(liTag);
    
}

var deleteFromToDoList = function(){

    let deleteLiTag = document.getElementById(this.id+"li");
    
    deleteLiTag.parentNode.removeChild(document.getElementById(this.id+"li"));

}

