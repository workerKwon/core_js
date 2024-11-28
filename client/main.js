import { Button } from './components/Button/Button.js';
import { TodoList } from './components/TodoList/TodoList.js';
import { TodoItem } from './components/TodoList/TodoItem.js';

const app = document.querySelector('#app');

function defineCustomElements() {
  customElements.define('custom-button', Button);
  customElements.define('custom-todo', TodoList);
  customElements.define('custom-todo-item', TodoItem);
}

defineCustomElements();

const todoListElement = document.createElement('custom-todo');

app.append(todoListElement);
