import TODOlist from './todo.js'
const todo = new TODOlist();

todo.addTask('complete all exercises');
todo.addTask('read your book');
todo.addTask('revise all that you have');
todo.addTask('go for a run');

todo.listAllTasks();

todo.markTaskCompete(3);

todo.addTask('design benivolas');

