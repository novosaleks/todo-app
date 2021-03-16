import React, { useState, useRef } from 'react';

import './TodoForm.scss';

interface TodoFormProps {
    createNewItem: (label: string) => void,
}

const TodoForm: React.FC<TodoFormProps> = ({ createNewItem }) => {
    const [userInput, setUserInput] = useState<string>('');
    const form = useRef<HTMLFormElement | null>(null);
    const minCharactersNumber = 4,
          maxCharacterNumber = 100;

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (userInput.trim().length >= minCharactersNumber && userInput.length <= maxCharacterNumber) {
            createNewItem(userInput);
            setUserInput('');
        } else {
            form.current?.classList.add('invalid');
        }
    };

    const inputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        form.current?.classList.remove('invalid');
        setUserInput(e.currentTarget.value);
    };

    return (
        <form ref={form} onSubmit={submitHandler} className='todo-form' action="#">
            <input placeholder='Create a new todo...' onInput={inputHandler} value={userInput} type="text"/>
            <span
                className='todo-form__invalid-label'>Tasks must contain at least {minCharactersNumber} and not more {maxCharacterNumber} characters</span>
        </form>
    );

};

export default TodoForm;