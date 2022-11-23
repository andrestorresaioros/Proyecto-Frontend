class myCard extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});  
    }

    getTemplate(){
        const template= document.createElement('template');
        template.innerHTML = `
        <h1>Template</h1>
        `
        return template;
    }
    connectedCallback(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
}
customElements.define('my-card',myCard);
