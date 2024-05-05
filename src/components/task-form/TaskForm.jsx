import React from 'react';
import './TaskForm.scss';

const TaskForm = ({ taskValue, setTaskValue, setVisibleTaskForm }) => {
    return (
        <div className='task-form'>
            <input
                onChange={(e) => setTaskValue(e.target.value)}
                value={taskValue}
                className=' w-full py-1 px-2 outline-none'
                type="text"
                placeholder='Название задачи' />
            <div className='task-form__btns flex'>
                <button
                    onClick={() => { }}
                    className='task-form__btn mt-3 py-1 text-cyan-50 bg-lime-600'>
                    Добавить
                </button>
                <button
                    onClick={() => setVisibleTaskForm(false)}
                    className='task-form__btn mt-3 py-1 text-cyan-50 bg-neutral-600'>
                    Отмена
                </button>
            </div>
        </div>
    );
};

export default TaskForm;