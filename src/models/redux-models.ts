export interface TodoModel {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

export interface TodoArrayModel {
    all_todos: TodoModel[],
    particaular_todo: TodoModel
}