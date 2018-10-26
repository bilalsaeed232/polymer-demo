import {
    html,
    PolymerElement
} from '@polymer/polymer/polymer-element';

class CustomBanner extends PolymerElement {
    constructor() {
        super();

        this.visible = false;
    }

    static get template() {
        return html `
            <style>
                :host {
                    background-color: orange;
                    color: white;
                    border: 2px solid goldenrod;
                    padding: 5px;
                    margin: 0;
                    position: relative;
                    left: 0; top: 0;
                    width: 100%;
                    max-height: 400px;
                    display: none;
                }

                :host([visible]) { display: block;}


                :host #closeBtn {
                    cursor: pointer;
                    transition: color 0.3s ease-in-out;
                }

                :host #closeBtn:hover{
                    color: indigo;
                }
            </style>
            <div id="banner">
                <span id="closeBtn">[x]</span>
                <slot>
                    <span> [[text]]</span>
                </slot>
            </div>
        `;
    }

    static get properties() {
        return {
            text: {
                type: String,
                value: 'Predefined text from custom component...'
            },
            visible: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                notify: true
            }
        }
    }


    ready() {
        super.ready();
        this.visible = true;
        this.$.closeBtn.addEventListener('click', (e) => {
            this.visible = false;
        })
    }
}


window.customElements.define('custom-banner', CustomBanner);