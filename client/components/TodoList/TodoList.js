import { TodoItem } from './TodoItem.js';

const todoTemplate = document.createElement('template');

todoTemplate.innerHTML = `
<link rel="stylesheet" href="./components/TodoList/TodoList.css" type="text/css">   
<div class="container">
    <h1>Todo List<img src="./assets/image.png" alt="체크리스트" /></h1>
    <ul class="todo"></ul>
    <button type="button" class="add-button"> + </button>
</div>

`;

export class TodoList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.render();
    this.container = this.shadowRoot.querySelector('.container');
    this.todo = this.container.querySelector('.todo');
    this.addButton = this.container.querySelector('.add-button');
  }

  connectedCallback() {
    this.addButton.addEventListener('click', this.handleAddClick.bind(this));
  }

  handleAddClick() {
    const todoItem = new TodoItem(Date.now(), '', false);
    this.todo.append(todoItem);
  }

  render() {
    this.shadowRoot.appendChild(todoTemplate.content.cloneNode(true));
  }
}
