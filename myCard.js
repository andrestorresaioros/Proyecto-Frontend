class myCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.autor = this.getAttribute('autor');
        this.imagen = this.getAttribute('img');
        this.icono = this.getAttribute('icono');
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        
        ${this.getStyles()}
        <div class="card">
                ${this.imagen && `<div><img src="${this.imagen}"</div>`}
                ${(this.icono && this.autor) && `<div><img class="pequeña" src="${this.icono}"><p>${this.autor}</p></div>`}
        `
        return template;
    }
    getStyles() {
        const styles = `
        <style>
        .card {
            border-top: 5px solid var(--Red);
            max-width: 300px;
            margin: 5px auto;
            border-radius: 5px;
            padding: 5px;
            box-shadow: 5px 5px 5px 5px grey;
            font-size: 15px;
        }
        p{
            margin-left: 45px;
            padding: 10px;
            align-content: justify;
        }
        img {
            border-radius: 10px;
            max-width: 206px;
            margin: auto;
            display: block;
        }
        img.pequeña{
            position: relative;
            top: -5px; 
            left: 6 px;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            float: left;
            display: block;
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
