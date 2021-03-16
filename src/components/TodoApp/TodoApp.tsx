import React from 'react';

import './TodoApp.scss';

import TodoHeader from './TodoHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

import { DragDropContext } from 'react-beautiful-dnd';
import { withTodoCore } from '../../containers';
import { todoApp } from '../../types';

const TodoApp: React.FC<todoApp> = (props) => {
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