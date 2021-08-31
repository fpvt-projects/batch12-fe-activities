'use strict'

console.log('Execute-Program'); //Shows that the HTML can read JS Script

//Query-Selectors

const toDoAddValue = document.querySelector('#todo-add-button');
const timePlaceholder = document.querySelector('#timeHeader');
const nameLabel = document.querySelector('#name-label');
const nameInput = document.querySelector('#name-input');
const nameDisplay = document.querySelector('#name-display');
const todoItems = document.querySelector('#toDo-items');
const theList = document.querySelector('#toDo-List');


//Time-Header - Shows Current time
function timeUpdate() {
    const today = new Date();
    const currentTime = `${today.getHours()} : ${today.getMinutes()}`;
    timePlaceholder.innerHTML = currentTime;
    setTimeout(timeUpdate, 1000);
}

timeUpdate();

//Display-Name
nameInput.addEventListener('keypress', e=> {
    if(e.keyCode === 13) { 
        if(nameDisplay.textContent != '') {
            document.querySelector('#focus-wrapper').style.display = 'flex';
        } else {
        // console.log(nameInput.value); //Check if Value is retrieved
        const nameValue = nameInput.value;
        if (nameValue == '') {
            alert('please enter your name');
        } else {
        nameDisplay.innerHTML = `Bonjour <span contenteditable>${nameValue}</span>, Better rock your world!`;
        nameLabel.style.display = 'none';
        nameInput.style.display = 'none';
        document.querySelector('#focus-wrapper').style.display = 'flex';
        }
    }
    }
})

//Toggle for ToDo List
function show() {
    document.getElementById('toDo-wrapper').classList.toggle('active');
    document.querySelector('#toDo-wrapper').style.zIndex = '999';
}

function musicShow() {
    document.getElementById('spotify-wrapper').classList.toggle('active');
    document.querySelector('#spotify-wrapper').style.zIndex = '998';
}

function notesShow() {
    document.getElementById('notes-wrapper').classList.toggle('active');
    document.querySelector('#notes-wrapper').style.zIndex = '997';
}

let toDoArray = [];
//Adding to To Do list

toDoAddValue.addEventListener('click', ()=> {
    const theList = document.querySelector('#toDo-List');
    const toDoInputValue = document.querySelector('#todo-add').value;
    if(toDoInputValue === ''){
        alert('Please Enter Task')
    } else {
        toDoArray.push(toDoInputValue);
        const newToDo = document.createElement('li');
        newToDo.setAttribute('id', 'toDo-items');
        newToDo.innerHTML = toDoInputValue + '<i class="fas fa-star"></i>' + '<i class="fas fa-trash"></i>';
        theList.append(newToDo);
        console.log(toDoArray);
    }
    
    // pendingTask.textContent = `You have ${toDoArray.length} pending task`;;
})

//Task Check
// const pendingTask = document.querySelector('#pending-bar');
// pendingTask.textContent = toDoArray.length;


//DELETING TASK
document.body.addEventListener('click', deleteTask);
function deleteTask(e) {
   const item = e.target;
   if (item.classList.contains('fa-trash')) {
        const toDelete = item.parentElement;
        toDelete.remove();
      } else if (item.classList.contains('fa-star')) {
          console.log(item.parentElement.textContent); //checking if code works
          document.querySelector('#focus-display').textContent = item.parentElement.textContent;
      }
//      else if (item.classList.contains('fa-star')) {
//        const addToFocus = item.parentElement.textContent;
//        const changeValue = document.querySelector('#toDo-items').value;
//        if (changeValue.value == '') {
//         changeValue.value = addToFocus;
//        console.log(addToFocus);
//        }
//    }
}

//RANDOM-QOUTE-GENERATOR
let qouteArray = [
    'I love you the more in that I believe you had liked me for my own sake and for nothing else.',
    'But man is not made for defeat. A man can be destroyed but not defeated.',
    'When you reach the end of your rope, tie a knot in it and hang on.',
    'There is nothing permanent except change.',
    'You cannot shake hands with a clenched fist.'
]

// console.log(qouteArray);

function randomizeQoute() {
    const randomNumber = Math.floor(Math.random() * qouteArray.length);
    document.querySelector('#qoute-display').style.display = 'flex';
    document.querySelector('#own-qoute').style.display = 'none';
    document.querySelector('#qoute-display').innerHTML = qouteArray[randomNumber];
    console.log(randomNumber);
}

randomizeQoute(); //Initial Generation of qoutes once page is loaded

//Generates New Qoute
const qouteGenerate = document.querySelector('#generate-random');
qouteGenerate.addEventListener('click', randomizeQoute);

//Adding new Qoute
const  newQoute = document.querySelector('#create-qoute');
newQoute.addEventListener('click', () => {
    document.querySelector('#qoute-display').style.display = 'none';
    document.querySelector('#own-qoute').style.display = 'block';
})

//Displaying and Appending New Qoute

const newQouteWrapper = document.querySelector('#own-qoute');

newQouteWrapper.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        const newQouteValue = document.querySelector('#own-qoute').value;
        qouteArray.push(newQouteValue);
        document.querySelector('#own-qoute').style.display = 'none';
        document.querySelector('#qoute-display').style.display = 'block';
        document.querySelector('#qoute-display').innerHTML= newQouteValue;
        console.log(qouteArray);
        localStorage.setItem('localdata', JSON.stringify(qouteArray));
    }
})

//Focus Display
const displayFocus = document.querySelector('#focus-display');
const focusInput = document.querySelector('#focus-input');
const currentValue = focusInput.value;

focusInput.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        const focusValue = focusInput.value;
        if (focusValue == ''){
            alert('Please let us know you focus');
        } else {
        document.querySelector('#focus-label').style.display = 'none';
        document.querySelector('#focus-input').style.display = 'none';
        document.querySelector('#display-label').style.display = 'block';
        displayFocus.innerHTML = focusValue;
    }
    }
})

//testing with local storage
const saveDisplayName = () => {
    localStorage.setItem('EnteredName', nameDisplay.innerHTML);
    console.log('Done');
}

const storedList = localStorage.getItem('EnteredName');

if(storedList) {
    nameDisplay.innerHTML = storedList;
    nameLabel.style.display = 'none';
    nameInput.style.display = 'none';
    document.querySelector('#focus-wrapper').style.display = 'flex';
}

function saveFocus() {
    localStorage.setItem('EnteredFocus', document.querySelector('#focus-display').innerHTML);
    console.log('Focus Done')   
}

const storedFocus = localStorage.getItem('EnteredFocus');

if(storedFocus != null) {
    document.querySelector('#focus-display').innerHTML = storedFocus;
    document.querySelector('#focus-label').style.display = 'none';
    document.querySelector('#focus-input').style.display = 'none';
    document.querySelector('#display-label').style.display = 'flex';
}

function resetPage() {
    localStorage.clear();
    location.reload();
}