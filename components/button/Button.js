export default class Button extends HTMLButtonElement {
    constructor() {
        super();
    }

    #attachStyle() {
        const buttonStyle = document.createElement('link');

        const popupStyle = document.createElement('link');
    }

    #createExternalStyleLink(href) {
        
    }

    #createPopup(content) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('button-popup-wrapper');
        wrapper.textContent = content;
        return wrapper;
    }

    connectedCallback() {
        // Create a shadow root
        this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'

        // Create (nested) span elements
        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");
        const icon = wrapper.appendChild(document.createElement("span"));
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", 0);
        // Insert icon from defined attribute or default icon
        const img = icon.appendChild(document.createElement("img"));
        img.src = this.hasAttribute("img")
        ? this.getAttribute("img")
        : "img/default.png";
        // Always include descriptive text when adding an image
        img.alt = this.hasAttribute("alt")
        ? this.getAttribute("alt")
        : "";

        const info = wrapper.appendChild(document.createElement("span"));
        info.setAttribute("class", "info");
        // Take attribute content and put it inside the info span
        info.textContent = this.getAttribute("data-text");

        // Create some CSS to apply to the shadow DOM
        const style = document.createElement("style");
        style.textContent = `.wrapper {
        /* CSS truncated for brevity */
        }`;

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(style, wrapper);
    }
}
