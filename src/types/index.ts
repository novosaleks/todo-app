import { DropResult } from 'react-beautiful-dnd';
import { TodoItemEntity } from '../entities';

export type filterType = 'all' | 'active' | 'completed';

export type todoApp = {
    createNewItem: (label: string) => void,
    onDragEnd: (result: DropResult) => void,
    todos: TodoItemEntity[],
    renderTodos: (todo: TodoItemEntity, idx: number) => JSX.Element,
    activeTodosNumber: number,
    removeAllCompleted: () => void,
    setFilterType: (filter: filterType) => void,
    filterType: filterType,
}