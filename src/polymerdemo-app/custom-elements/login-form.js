import {
    html,
    PolymerElement
} from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';


class LoginForm extends PolymerElement {

    constructor() {
        super();
    }

    static get template() {
        return html `
            <style>
                :host {
                    width: 30%;
                    display: block;
                    padding: 15px;
                    margin: 30px auto 0;
                    background-color: var(--login-form-background,#eee);
                    border: 1px solid var(--login-form-border,#ccc);
                    border-radius: 5px;
                    font-family: 'Roboto', sans-serif;
                    font-size: 16px;
                }

                :host h1{
                    text-align: center;
                }

                :host #loginForm paper-button {
                    background-color: var(--login-form-border);
                    color: var(--login-form-background);
                }

                :host #formToast {
                    --paper-toast-color: goldenrod;
                }
            </style>
            <div id="form-wrapper">
                <input type="color" id="color"></input>
                <h1>Login</h1>
                <form name="loginForm" id="loginForm">
                    <paper-input label="Username" required ></paper-input>
                    <paper-input label="Password" type="password" required></paper-input>
                    <paper-button id="loginBtn" raised>Login</paper-button>
                </form>
                <paper-toast id="formToast"></paper-toast>
            <div>
        `
    }

    static attributes() {
        return {

        }
    }



    ready() {
        super.ready();
        console.dir(this.$);

        this.$.loginBtn.addEventListener('click', (e) => {
            this.$.formToast.text = "Login form submitted!";
            this.$.formToast.open();
        })


        this.$.color.addEventListener('change', (e) => {
            this.style.setProperty('--login-form-border', e.target.value);
        })

    }



}

window.customElements.define('login-form', LoginForm);