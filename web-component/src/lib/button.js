export class NourButton extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `<button> ${this.getAttribute('text')} </button>`
    }
}

// customElements.define("nour-button", NourButton)