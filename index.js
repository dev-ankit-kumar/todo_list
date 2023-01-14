let textfield = document.querySelector(".todo-field");
let button = document.querySelector(".addtodo-btn");
let tasksElement = document.querySelector(".tasks");


let currentTask = "";

let handleInput = (event) => {
  currentTask = event.target.value;
  event.target.value='';
};


let handleClick = (event) => {
  if (currentTask) {
    console.log('heleof');
    let li = document.createElement("li");  //<li></li>
    li.classList.add('litag');              //<li class="litag></li>"
    let deletebtn = document.createElement("button"); //<button></
    deletebtn.append("delete");
    deletebtn.classList.add("del");
    li.append(currentTask);
    li.append(deletebtn);
    tasksElement.append(li);
    currentTask='';
    
    li.addEventListener("click",
    ()=>{
        li.classList.toggle("done")
    })

    let a=li.querySelector(".del");
    a.addEventListener(
      "click",
      function(){
          li.remove()
      }
  )
  } else {
    alert("please enter a task");
  }


};

textfield.addEventListener("change", handleInput);
textfield.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        console.log('sfds');
        handleClick()
    }
});



button.addEventListener("click", handleClick);
