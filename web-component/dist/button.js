"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NourButton = void 0;
class NourButton extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = "<button> ".concat(this.getAttribute('text'), " </button>");
  }
}

// customElements.define("nour-button", NourButton)
exports.NourButton = NourButton;