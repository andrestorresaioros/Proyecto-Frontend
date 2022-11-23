class myCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        
        ${this.getStyles()}
       
        <h1>Template</h1>
        `
        return template;
    }
    getStyles() {
        const styles = `
        <style>
        h1 {
            color: red;
        }
        </style>
        `

        return styles;
    }
    connectedCallback() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
}
customElements.define('my-card', myCard);
