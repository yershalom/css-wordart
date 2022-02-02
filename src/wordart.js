const template = document.createElement("template");
template.innerHTML = `
<style></style>

<div class="wordart">
  <span class="text">
      <slot></slot>
  </span>
</div>`;

class WordArt extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["theme"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.shadowRoot.querySelector(".wordart").className = "wordart " + newValue;
  }
}
window.customElements.define("word-art", WordArt);
