export enum AttributeButton {
    "boton" = "boton"
}

export default class Button extends HTMLElement {
   boton?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeButton, null> = {
            boton: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeButton,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        const button = this.ownerDocument.createElement('button');
        button.innerText = `${this.boton}`
        button.addEventListener('click',() =>{
            button.innerText = "No like";
        })
        this.shadowRoot?.appendChild(button);
    }
}

customElements.define('app-button',Button);
