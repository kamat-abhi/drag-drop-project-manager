"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class ProjectInput {
    templateInput;
    hostElement;
    formElement;
    constructor() {
        this.templateInput = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateInput.content, true);
        this.formElement = importedNode.firstElementChild;
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
    }
}
//# sourceMappingURL=app.js.map