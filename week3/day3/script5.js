const div = document.getElementById('container');
console.log(div);
const lists = document.getElementsByClassName('ul.list');
lists[0][1].textContent = 'Richard'
lists.removeChild(lists.children[2])
lists.forEach(list => {
    list.children[0].textContent = 'Meriem';
});
const twolists = document.querySelectorAll('ul');
twolists.forEach(ul => {
    ul.classList.add('student_list')
})
twolists[0].classList.add('university', 'attendance');
div.backgroundColor = 'lightblue';
div.style.padding = '10px';
ul[0].li[1].style.display = 'hidden'
ul[0].li[1].style.border = '1px solid black'
const body = document.querySelector('body');
body.style.fontSize = '24px';
