import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class PolymerdemoApp extends PolymerElement {
  static get template() {
    return html `
      <style>
        :host {
          display: block;
        }
      </style>
      <slot></slot>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Polymer Demo'
      }
    };
  }
}

window.customElements.define('polymerdemo-app', PolymerdemoApp);