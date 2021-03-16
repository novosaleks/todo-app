import React from 'react';

import './TodoList.scss';
import { TodoItemEntity } from '../../../entities';
import { Droppable } from 'react-beautiful-dnd';
import EmptyItem from '../EmptyItem';

interface TodoListProps {
    todos: TodoItemEntity[],
    children: (todo: TodoItemEntity, idx: number) => JSX.Element,
}

const TodoList: React.FC<TodoListProps> = ({ children: renderFunction, todos }) => {

    const todoListComponents = todos.map((todo, idx) => renderFunction(todo, idx));

    return (
        <Droppable droppableId='droppable'>
            {(provided) => (
                <ul ref={provided.innerRef} {...provided.droppableProps} className='todo-list'>
                    {todoListComponents.length ? todoListComponents :
                        <li className='todo-list__item'>
                            <EmptyItem/>
                        </li>
                    }
                    {provided.placeholder}
                </ul>
            )
            }
        </Droppable>
    );
};

export default TodoList;