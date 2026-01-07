"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class ProjectInput {
    templateInput;
    hostElement;
    formElement;
    titleInputElement;
    descriptionInputElement;
    peopleInputElement;
    constructor() {
        this.templateInput = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateInput.content, true);
        this.formElement = importedNode.firstElementChild;
        this.formElement.id = 'user-input';
        this.titleInputElement = this.formElement.querySelector('#title');
        this.descriptionInputElement = this.formElement.querySelector('#description');
        this.peopleInputElement = this.formElement.querySelector('#people');
        this.configure();
        this.attach();
    }
    submitHandler(e) {
        e.preventDefault();
        console.log(this.titleInputElement.value);
    }
    configure() {
        this.formElement.addEventListener('submit', this.submitHandler.bind(this));
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
    }
}
//# sourceMappingURL=app.js.map