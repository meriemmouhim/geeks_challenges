document.addEventListener('DOMContentLoaded', function() {
    const parentForm = document.querySelector('form');
    console.log(parentForm);
    const firstname = document.getElementById('fname');
    const lastname = document.getElementById("lname");
    const submit = document.getElementById("submit");
    console.log(firstname);
    console.log(lastname);
    console.log(submit);
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstNameInput = document.querySelector('input[name="firstname"]');
        const lastNameInput = document.querySelector('input[name="lastname"]');
        console.log(inputbn);
        console.log(inputbn2);
        const form  = document.querySelector('form');
        form.addEventListener("submit", function(event){
            event.preventDefault(); // Stops the form from submitting/reloading the page
            const firstName = firstNameInput.value.trim();
            const lastName = lastNameInput.value.trim();
            console.log(firstName);
            console.log(lastName);
            if(!firstName){
                alert("Please enter a value");
                return;
            };
            if(!lastName){
                alert("Please enter a value");
                return;
            };
        })
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        li1.textContent = "user's first name";
        li2.textContent = "user's last name";
        const ul = document.querySelector(".usersAnswer");
        ul.appendChild(li1), li2;
    });
});