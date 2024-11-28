export class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.render();
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('button')
      .addEventListener('click', this.handleClick.bind(this));
  }

  // 클릭 이벤트 바인
  handleClick() {
    console.log(this);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <button 
        type="button",
        aria-pressed="true",
        aria-label="활성화"
      >
        🐯
      </button>
    `;
  }
}
