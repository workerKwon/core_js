class Todo {
  constructor({ input, button, renderPlace }) {
    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);

    this.attachEvent();
  }

  get currentInputTodoData() {
    return this.input.value;
  }

  set currentInputTodoData(value) {
    this.input.value = value;
  }

  handleClick() {
    console.log(this.currentInputTodoData);
    this.#render();
  }

  createTag() {
    return `<li> ${this.currentInputTodoData}</li>`;
  }

  #render() {
    this.renderPlace.insertAdjacentHTML('beforeend', this.createTag());
    this.input.value = '';
  }

  // 버튼에 클릭 이벤트 등록 input 값이 콘솔창에 나올 수 있도록
  attachEvent() {
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.handleClick();
    });
  }
}

const todo = new Todo({
  input: '.todo',
  button: '.btn',
  renderPlace: '.todoList',
});
