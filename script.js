const task = document.getElementById("input");
const taskcontainer =document.getElementById("task-container");


var input = document.getElementById("input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn").click();
    }
  });



function add(){
    if(task.value === ""){
        alert("Add something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =task.value;
        taskcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    task.value="";
}
taskcontainer.addEventListener("click",function(x){
    if (x.target.tagName ==="LI"){
        x.target.classList.toggle("checked");
    }
    else if(x.target.tagName === "SPAN"){
        x.target.parentElement.remove();
    }
}, false);