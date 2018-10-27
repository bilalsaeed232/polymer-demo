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

                :host #passText { display: none; }
            </style>
            <div id="form-wrapper">
                <input type="color" id="color"></input>
                <h1>Login</h1>
                <form name="loginForm" id="loginForm">
                    <paper-input label="Username" required ></paper-input>
                    <paper-input label="Password" type="password" value={{password}} required></paper-input>
                    <span id="passText">[[password]]</span>
                    <label><input type="checkbox" name="show" id="showPass"> Show Password</label>
                    <br/>
                    <paper-button id="loginBtn" raised>Login</paper-button>
                </form>
                <paper-toast id="formToast"></paper-toast>
            <div>
        `
    }

    static attributes() {
        return {
            password: String
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


        this.$.showPass.addEventListener('click', (e) => {

            if (this.$.showPass.checked)
                this.$.passText.style.display = 'block';
            else {
                this.$.passText.style.display = 'none';
            }
        })

    }



}

window.customElements.define('login-form', LoginForm);