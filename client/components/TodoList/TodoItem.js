const todoItemTemplate = document.createElement('template');

todoItemTemplate.innerHTML = `
<link rel="stylesheet" href="./components/TodoList/TodoItem.css" type="text/css">
<li class="item">
    <input type="checkbox" class="checkbox" />
    <div class="content">
        <input type="text" class="text" />
    </div>
    <button type="button" class="delete-button">삭제</button>
</li>
`;

export class TodoItem extends HTMLElement {
  constructor(id, value, checked) {
    super();
    this.attachShadow({ mode: 'open' });
    this.render(id, value, checked);
  }

  render(id, value, checked) {
    todoItemTemplate.content.querySelector('li').setAttribute('id', id);
    todoItemTemplate.content.querySelector('.text').value = value;
    todoItemTemplate.content.querySelector('.checkbox').checked = checked;
    this.shadowRoot.appendChild(todoItemTemplate.content.cloneNode(true));
  }
}
