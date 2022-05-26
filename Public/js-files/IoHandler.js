var parent = document.getElementById("todolist");
var saveData ="";

function downloadList(){

    for(let i =0;i<parent.childElementCount;i++){

        saveData +=((i+1)+") "+ parent.children[i].children[0].value+"\n") ; 
        console.log(saveData);

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        
    }
    
    var blob = new Blob(["To Do List "+today+"\n"+saveData], { type: "text/plain;charset=utf-8" });
        saveAs(blob, (today+" To do List"+".txt"));
    
}