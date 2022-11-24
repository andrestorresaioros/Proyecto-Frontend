class myCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.autor = this.getAttribute('autor');
        this.imagen = this.getAttribute('img');
        this.icono= this.getAttribute('icono');
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        
        ${this.getStyles()}
        <div class="card">
            <img src=${this.imagen} alt="">
            <img class="pequeña" src=${this.icono} alt="">
            <p>${this.autor}</p>
        </div>
        `
        return template;
    }
    getStyles() {
        const styles = `
        <style>
        h1 {
            color: red;
        }
        #icono {
            max-width: 300px;
            margin: auto;
            display: block;
        }
        .card {
            border-top: 5px solid var(--Red);
            max-width: 300px;
            margin: 5px auto;
            border-radius: 5px;
            padding: 10px;
            box-shadow: 5px 5px 5px 5px grey;
            font-size: 15px;
        }
        p{
            padding: 10px;
            text-align: justify;
            margin-top:30px;
            margin-left:45px;
        }
        img {
            border-radius: 10px;
            max-width: 206px;
            margin: auto;
            display: block;
        }
        img.pequeña{
            border-radius: 100px;
            width: 50px;
            height: 50px;
            float: left;
            display: block;
            margin-top: 20px;
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
