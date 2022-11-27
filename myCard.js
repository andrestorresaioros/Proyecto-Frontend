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
            ${
                this.imagen ? 
                `<div class="card-image">
                    <img src="${this.imagen}">
                </div>`:''
            }
            ${
                (this.icono && this.autor) ?
                `<div class="card-user">
                    <img src="${this.icono}">
                    <p>
                        ${this.autor}
                    </p>
                </div>`:''
            }
        </div>
        `
        return template;
    }

    getStyles() {
        const styles = `
        <style>
            .card {
                border-top: 5px solid var(--Red);
                width: 100%;
                height: 300px;
                border-radius: 10px;
                box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, .3);
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: stretch;
            }
            .card-image {
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
            .card-image img {
                width: 100%;
                object-fit: cover;
                height: 100%;
            }
            .card-user {
                display: flex;
                gap: 10px;
                align-items: center;
                padding: 15px;
            }
            .card-user img {
                border-radius: 50%;
                width: 30px;
                height: 30px;
            }
            .card-user p {
                font-size: 15px;
                font-family: 'Poppins';
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
