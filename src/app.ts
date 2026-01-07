class ProjectInput {
    templateInput: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    formElement: HTMLFormElement;

    constructor(){
        this.templateInput = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateInput.content, true);
        this.formElement = importedNode.firstElementChild as HTMLFormElement;
        this.attach();
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
    }
}