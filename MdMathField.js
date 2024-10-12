class MdMathField {
  constructor(message) {
    this.message = message;
    this.element = document.createElement("div");
    this.render();
  }

  render() {
    this.element.textContent = this.message;
  }

  attachTo(parent) {
    parent.appendChild(this.element);
  }

  updateMessage(newMessage) {
    this.message = newMessage;
    this.render();
  }
}

export default MyComponent;
