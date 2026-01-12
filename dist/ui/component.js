export class Component {
    templateInput;
    hostElement;
    element;
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateInput = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateInput.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtStart) {
        this.hostElement.insertAdjacentElement(insertAtStart ? "afterbegin" : "beforeend", this.element);
    }
}
//# sourceMappingURL=component.js.map