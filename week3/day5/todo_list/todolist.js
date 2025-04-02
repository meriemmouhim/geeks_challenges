document.addEventListener('DOMContentLoaded', function(){
    const inputBox = document.getElementById("input_box");
    const listContainer = document.getElementById("list_container");
    document.querySelector('button').addEventListener('click', addTask);
    inputBox.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            addTask();
        };
    });
    function addTask(){
        if(inputBox.value === ''){
            alert("You must write something!");
        }else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            let span = document.createElement("span")
            span.innerHTML = "\u00d7"
            li.appendChild(span)
            listContainer.appendChild(li);
            inputBox.value = "";
            saveData();
        }
    }
    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
    }, false);
    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showTask();
});
