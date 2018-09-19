# Todos app

### Вспомогательные функции

1) onSubmitForm - функция обрабатывает событие формы и добавления новой задачи;
param {Event} e - принимает объект события;
@returns {void} - ничего не возвращает.

2) onTitleKeyUp - функция обрабатывает события ввода с клавиатуры на элементе input[name=title];
@param {Event} e - принимает объект события;
@returns {void} - ничего не возвращает.

3) onTableClick - функция обрабатывает события клик на таблица. Реализует шаблон делегирования события. Удаляет задачи из таблицы;  
@param {Event} e - принимает объект события;
@returns {void} - ничего не возвращает.

4) addNewTodoItem - функция добавляет новую задачу;
@param {string} title - принимает заголовок задачи;
@param {string} description - принимает описание задачи;
@returns {void} - ничего не возвращает.

5) addItem - функция добавляет один элемент в разметку;
@param {object} item - принимает один объект задачи;
@returns {void} - ничего не возвращает.

6) deleteItem - функция удаляет элемент из массива и из разметки;
 @param {number} id - принимает id задачи котору нужно удалить;
@returns {void} - ничего не возвращает.