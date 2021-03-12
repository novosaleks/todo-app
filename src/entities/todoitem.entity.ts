export default class TodoItemEntity {
    id: number = +new Date();
    completed: boolean = false;
    label: string;

    constructor(label: string) {
        this.label = label;
    }
}
