let input = document.getElementById('input');
let addtask = document.getElementById('addtask');
let listoftasks = document.querySelector('.listoftasks')
let container = document.querySelector('.container');

addtask.addEventListener('click', addNotes);
listoftasks.addEventListener('click', deleteitem);
showNotes();

let id = 0;
function addNotes() {
    id = localStorage.length++;
    let text = input.value;
    if (input.value != '') {
        localStorage.setItem(id, text);
    }
    input.value = '';
    location.reload();
    // showNotes();
}

function deleteitem(e) {
    if (e.target.classList.contains('Delete')) {
        let ele = e.target.parentElement.parentElement;
        listoftasks.removeChild(ele);
        console.log(ele.id);
        localStorage.removeItem(ele.id);
    }
}

function showNotes() {
    for (let i = 0; i < localStorage.length; i++) {
        let txt = localStorage[i];
        let a = document.createElement('li');
        a.innerHTML = `
                    <div class="task">
                        <p id="para-task" class="ud default">${txt}</p>
                    </div>
                    <div class="button">
                        <button class="Delete">X</button>
                    </div>
                `;
        a.className = 'list-item';
        a.id = i;
        listoftasks.appendChild(a);
        console.log(txt);
    }
}
