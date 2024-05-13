import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaskData, setActiveList, setTaskValue, setVisibleTaskForm, updateActiveList } from '../../redux/slices/taskSlice';

import './TaskForm.scss';

const TaskForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const { taskValue, activeList, lists } = useSelector(state => state.task_data)

    const discardTaskForm = () => {
        dispatch(setVisibleTaskForm(false))
        dispatch(setTaskValue(""))
    }

    const findActiveList = () => {
        return lists.findIndex(list => list.id === activeList.id)
    }

    const onAddTask = async () => {
        const newTask = {
            completed: false,
            listId: activeList.id,
            text: taskValue,
        }
        setIsLoading(true)

        try {
            if (newTask.text) {
                await axios.post(`http://localhost:3001/tasks/`, {
                    ...newTask
                })
                await dispatch(fetchTaskData())
                dispatch(setActiveList(activeList.id))
                dispatch(updateActiveList(findActiveList()))

            }
        } catch (error) {
            console.log(error)
            alert('Не удалось добавить задачу, попробуйте еще')
        } finally {
            setIsLoading(false)
            dispatch(setVisibleTaskForm(false))
            dispatch(setTaskValue(""))
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
            <div className='task-form__btns flex gap-1'>
                <button
                    disabled={isLoading}
                    onClick={onAddTask}
                    className='task-form__btn mt-3 py-1 text-cyan-50 bg-lime-600'>
                    {isLoading ? 'Ждите...' : 'Добавить'}
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