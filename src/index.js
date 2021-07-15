// ========== TASK 1: ==========
//==============================

const squares = 5;
let counter = 0;
const $container = document.querySelector('.container');

// ===== Creating squares: =====

for (let i = 1; i <= squares; i++) {
    const $square = document.createElement('div');
    $container.append($square);
    $square.textContent = i;
    $square.classList.add('square');
}

// ===== Changing color: =====

function changeColor(el) {
    if (el.target.classList.contains('blue')) {
        el.target.classList.remove('blue');
        el.target.classList.add('green');
    } else if (el.target.classList.contains('green')) {
        el.target.classList.remove('green');
        el.target.classList.add('yellow');
    } else if (el.target.classList.contains('yellow')) {
        el.target.classList.remove('yellow');
        el.target.classList.add('blue');
    } else {
        el.target.classList.add('blue');
    }
}
// ====== Changing an order: =====

function squareMove(el) {
    el.target.style.order = counter;
    el.target.style.transition = 'order 0.3s ease, background-color 0.4s';
}

// ===== Event handler: =====

$container.addEventListener('click', e => {
    if (e.target.closest('.square')) {
        counter++;
        changeColor(e);
        squareMove(e);
    }
});

// ========== TASK 2: ==========
//==============================
const randomRange = 100;
const fromOne = 1;
const tableSize = 4;
function tableCreator(tableDatas, tableRows) {
    const $table = document.createElement('table');
    for (let j = 1; j <= tableRows; j++) {
        const $tr = document.createElement('tr');

        for (let i = 1; i <= tableDatas; i++) {
            const $td = document.createElement('td');
            $td.textContent = Math.floor(Math.random() * randomRange) + fromOne;
            $tr.append($td);
        }
        $table.append($tr);
    }
    return $table;
}
document.querySelector('.task2').append(tableCreator(tableSize, tableSize));

// ===== Creating a 'div' for table result: =====

const $table = document.querySelector('table');
const $tableResult = document.createElement('div');
$tableResult.className = 'tableResult';
document.querySelector('.task2').append($tableResult);

// ===== Event handler: =====

$table.addEventListener('click', e => {
    if (e.target.tagName === 'TD') {
        $tableResult.textContent = e.target.textContent;
    }
});

// ========== TASK 3: ==========
//==============================

function classToggle(element, toggledClass) {
    const $el = document.querySelector(element);
    const classArray = $el.className.split(' ');

    if (classArray.includes(toggledClass)) {
        const itemsToRemove = 1;
        const indexToRemove = classArray.findIndex(item => item === toggledClass);
        classArray.splice(indexToRemove, itemsToRemove);
    } else {
        classArray.push(toggledClass);
    }
    $el.className = classArray.join(' ');
}

// ===== As example: =====

classToggle('.example', 'toggled');
