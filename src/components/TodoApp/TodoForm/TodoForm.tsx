import React, { useState } from 'react';

import './TodoForm.scss';

interface TodoFormProps {
    createNewItem: (label: string) => void,
}

const TodoForm: React.FC<TodoFormProps> = ({ createNewItem }) => {
    const [userInput, setUserInput] = useState<string>('');

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (userInput) {
            createNewItem(userInput);
            setUserInput('');
        }
    };

    const inputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value);
    };

    return (
        <form onSubmit={submitHandler} className='todo-form' action="#">
            <input placeholder='Create a new todo...' onInput={inputHandler} value={userInput} type="text"/>
        </form>
    );

};

export default TodoForm;