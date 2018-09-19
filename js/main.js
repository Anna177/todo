/**
 * 1. Хранение данных
 */

const state = {
    todos: [
        {
            id: 1,
            title: 'Some title 1',
            description: 'Some description 1'
        },
        {
            id: 2,
            title: 'Some title 2',
            description: 'Some description 2'
        },
        {
            id: 3,
            title: 'Some title 3',
            description: 'Some description 3'
        }
    ]
};

/**
 * UI Elements
 */
const table = document.querySelector('.table tbody');
const form = document.forms['add-new-item-form'];
const title = form['title'];
const description = form['description'];

/**
 * Функция onSubmitForm обрабатывает событие формы и добавления новой задачи
 * @param {Event} e - Объект события.
 * @returns {void}
 */
const onSubmitForm = e => {
    e.preventDefault();
    if (title.value && description.value) {
        addNewTodoItem(title.value, description.value);
    } else {
        // Вывести уведомление об ошибке
    }
};

/**
 * Обработка события ввода с клавиатуры на элементе input[name=title].
 * @param {Event} e - Объект события.
 * @returns {void}
 */
const onTitleKeyUp = e => description.disabled = !title.value; 

/**
 * Функция обработки события клик на таблица. Реализация шаблона делегирования события. Удаление задачи из таблицы.  
 * @param {Event} e - Объект события.
 * @returns {void}
 */
const onTableClick = e => {
    if (e.target.classList.contains('remove-item')) {
        const tr = e.target.closest('tr');
        const id = tr.dataset.id;
        deleteItem(id);
    }
}

/**
 * Функция добавления новой задачи
 * @param {string} title - Заголовок задачи
 * @param {string} description - Описание задачи
 * @returns {void}
 */
const addNewTodoItem = (title, description) => {

}

/**
 * Функция addItem добавляет один элемент в разметку
 * @param {object} item - один объект задачи
 * @returns {void}
 */
const addItem = (item, index) => {
    const template = `
        <tr data-id="${item.id}">
            <td>${index + 1}</td>
            <td>${item.title}</td>
            <td>${item.description}</td>
            <td><button class="btn btn-danger remove-item">Delete</button></td>
        </tr>
    `;

    table.insertAdjacentHTML('beforeend', template);
};

/**
 * Функция deleteItem удаляет элемент из массива и из разметки
 * @param {number} id - id задачи котору нужно удалить
 * @returns {void} 
 */
const deleteItem = id => {
    // Удаляем задачу из массива
    state.todos.forEach((item, index) => {
        if (item.id === Number(id)) {
            state.todos.splice(index, 1);
        }
    });
    // Заново генерируем элементы 
    generateItems(state.todos);
}

/**
 * Перебираем в цикле массив с задачами и передаем по одной задаче в функцию addItem
 */
const generateItems = items => {
    table.innerHTML = '';
    items.forEach((todo, index) => addItem(todo, index));
}

/**
 * Все события
 */

 form.addEventListener('submit', onSubmitForm);
 title.addEventListener('keyup', onTitleKeyUp);
 table.addEventListener('click', onTableClick);

// Первый раз вызываем генерацию задач
generateItems(state.todos);