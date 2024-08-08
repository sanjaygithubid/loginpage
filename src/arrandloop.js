/*const myArray = [10, 20, 30, 40, 50]
console.log(myArray)

console.log(myArray[4]);
myArray[0] = 99;
console.log(typeof myArray);
console.log(myArray);

console.log(Array.isArray([1, 2, 3]))
myArray.splice(0, 1);
console.log(myArray)*/

const todolist = [
  {
    name: 'sanjay barik',
    dueDate: '2024-08-09'
  },

  {
    name: 'ajay barik',
    dueDate: '2024-08-12'
  },

  {
    name: 'bijay barik',
    dueDate: '2024-08-20'
  }
];
//  to add any extra value in array  in addtodo() function by render and display in webpage so we create a function and update it
renderDiplayTodoList();

function renderDiplayTodoList() {



  let todoListHtml = '';

  for (let i = 0; i < todolist.length; i++) {
    const todoIteamObject = todolist[i];
    const name = todoIteamObject.name;
    const dueDate = todoIteamObject.dueDate;

    // here we  genereted html  inside javascript to created delete button inside html of generated html and also create dlelete button to manupulate by onclick method


    // now to display the list by renderdisplaytodolist() function is use in onclick of delete button.
    const htmlShow = `
    
      <div>${name}</div>

      <div> ${dueDate} </div>
      <div>
      <button onclick = " deleteTodo(i)
     " class="delete-todo-button"> delete </button>
      </div>
     `;

    todoListHtml += htmlShow;
  }



  // now this html element value put in web page by DOM to create a container in by div element in html. and inner html control html in side dive container and put todolist of html in side inner html by .....

  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}

function deleteTodo(i) {
  todolist.splice(i, 1);
  renderDisplayTodoList();
}
// to update addtodo  function lets create another function an d call in addtodo function 

function addTodo() {
  // take input from HTML and put it in js by a store veriable by this method of query selector through class method
  const inputElement = document.querySelector('.js-name-input')
  // here name push in input box  by value property
  const name = inputElement.value


  // take input from HTML and put it in js by a store veriable by this method of query selector through class method
  const dateInputElement = document.querySelector('.js-due-date-input');

  // now we can input date in date in box by value property
  const dueDate = dateInputElement.value;



  // add value in Array by .push() method

  if (name && dueDate) {
    // Ensure inputs are not empty
    todolist.push({ name: name, dueDate: dueDate });

    inputElement.value = '';
    dateInputElement.value = '';

    renderDisplayTodoList();

  }

  else {

    alert('Please enter both name and due date');
  }
  // todolist.push({
  // name: name,
  // dueDate: dueDate
  // });



  // value properties  represent text in thetextbox  to clear or reset textbox by value properties should be change by empty string .

  inputElement.value = '';

  dateInputElement.value = '';

  renderDiplayTodoList();

  // to diplay each value  on webpage by paragraph through looping value method its a( accumulator pettern)

  /* const todoNumList = [1, 2, 2, 3];
   let total = 0; //accumulator variable
   for (let i = 0; i < todoNumList.length; i++) {
     const value = todoNumList[i];
     console.log(value)
     total = total + value;
     console.log(total)
   }
   //  create variable to store result for accumulator pattern
   const numDouble = [];
   // loop through the array and update in result by for loop
   for (let i = 0; i < todoNumList.length; i++) {
     const value = todoNumList[i];
 
     // now add to array for double through add method
 
     numDouble.push(value * 2);
     console.log(numDouble) 
 }*/

}
