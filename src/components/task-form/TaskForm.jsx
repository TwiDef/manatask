import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaskData, setActiveList, setTaskValue, setVisibleTaskForm, updateActiveListTasks } from '../../redux/slices/taskSlice';

import './TaskForm.scss';

const TaskForm = () => {
    const dispatch = useDispatch()
    const { taskValue, activeList, tasks } = useSelector(state => state.task_data)

    const discardTaskForm = () => {
        dispatch(setVisibleTaskForm(false))
        dispatch(setTaskValue(""))
    }

    const onAddTask = async () => {
        const newTask = {
            listId: activeList.id,
            text: taskValue,
            completed: false
        }

        try {
            if (newTask.text) {
                await axios.post(`http://localhost:3001/tasks/`, {
                    ...newTask
                })
                dispatch(fetchTaskData())
                dispatch(setActiveList(activeList.id))
                dispatch(updateActiveListTasks(newTask))
                dispatch(setVisibleTaskForm(false))
                dispatch(setTaskValue(""))
            }
        } catch (error) {
            console.log(error)
            alert('Не удалось добавить задачу, попробуйте еще')
        }
    }

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className='task-form'>
            <input
                onChange={(e) => dispatch(setTaskValue(e.target.value))}
                value={taskValue}
                className=' w-full py-1 px-2 outline-none shadow-lg'
                type="text"
                placeholder='Название задачи' />
            <div className='task-form__btns flex'>
                <button
                    onClick={onAddTask}
                    className='task-form__btn mt-3 py-1 text-cyan-50 bg-lime-600'>
                    Добавить
                </button>
                <button
                    onClick={discardTaskForm}
                    className='task-form__btn mt-3 py-1 text-cyan-50 bg-neutral-600'>
                    Отмена
                </button>
            </div>
        </form>
    );
};

export default TaskForm;