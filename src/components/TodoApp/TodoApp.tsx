import React from 'react';

import './TodoApp.scss';

import TodoHeader from '../TodoHeader';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import TodoFooter from '../TodoFooter';

import { TodoItemEntity } from '../../entities';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { withTodoCore } from '../../containers';

interface TodoAppProps {
    createNewItem: (label: string) => void,
    onDragEnd: (result: DropResult) => void,
    todos: TodoItemEntity[],
    renderTodos: (todo: TodoItemEntity, idx: number) => JSX.Element,
    activeTodosNumber: number,
    removeAllCompleted: () => void,
    setFilterType: (filter: 'all' | 'active' | 'completed') => void,
    filterType: 'all' | 'active' | 'completed';
}

const TodoApp: React.FC<TodoAppProps> = (props) => {
    const {
              onDragEnd,
              setFilterType,
              todos,
              removeAllCompleted,
              createNewItem,
              activeTodosNumber,
              filterType,
              renderTodos
          } = props;

    return (
        <div className='todo-app'>
            <TodoHeader/>
            <TodoForm createNewItem={createNewItem}/>
            <DragDropContext onDragEnd={onDragEnd}>
                <TodoList todos={todos}>
                    {renderTodos}
                </TodoList>
            </DragDropContext>
            <TodoFooter
                activeTodosNumber={activeTodosNumber}
                removeAllCompleted={removeAllCompleted}
                setFilterType={setFilterType}
                filter={filterType}
            />
        </div>
    );
};

export default withTodoCore()(TodoApp);