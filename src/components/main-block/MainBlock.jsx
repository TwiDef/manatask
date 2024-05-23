import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateTaskStatus, fetchTaskData, setVisibleTaskForm, deleteTask } from '../../redux/slices/taskSlice';
import TaskForm from '../task-form/TaskForm';
import TaskList from '../task-list/TaskList';
import Task from '../task/Task';

import './MainBlock.scss';


const MainBlock = () => {
    const dispatch = useDispatch()
    const { activeList, visibleTaskForm, lists } = useSelector(state => state.task_data)
    const [title, setTitle] = useState('')

    const onRenameList = async () => {
        const newListName = window.prompt('Введите имя списка', activeList.name)
        if (newListName) {
            setTitle(newListName)
            await axios.patch(`http://localhost:3001/lists/${activeList.id}`, {
                name: newListName
            }).catch(() => {
                alert('Не удалось обновить название списка')
            })
        }
        dispatch(fetchTaskData())
    }

    const onRemoveTask = async (task) => {
        if (window.confirm('Вы действительно хотите удалить задачу?')) {
            dispatch(deleteTask(task))
            await axios.delete(`http://localhost:3001/tasks/${task.id}`)
                .catch(() => {
                    alert('Не удалось удалить задачу')
                })
        }
        dispatch(fetchTaskData())
    }

    const onToggleCheckTask = async (task, e) => {
        dispatch(updateTaskStatus(task.id))
        await axios.patch(`http://localhost:3001/tasks/${task.id}`, {
            completed: e
        })
        dispatch(fetchTaskData())
    }

    useEffect(() => {
        setTitle(activeList && activeList.name)
    }, [activeList])

    return (
        <>
            {activeList ?
                <div className='mainblock w-full px-6 pt-10 pb-4 flex flex-col'>
                    <div className='flex items-center gap-2 my-0 m-auto'>
                        <h1 className=' text-4xl text-stone-600 font-bold text-center'>
                            {title}
                        </h1>
                        <button onClick={() => onRenameList()}>
                            <img src="https://cdn-icons-png.flaticon.com/512/4341/4341104.png" alt=""
                                width={34} height={34} />
                        </button>
                    </div>

                    <hr className='w-full h-1 bg-gray-300 mt-8' />

                    <ul className='pt-8 pl-8 pr-3 min-h-80 overflow-y-auto'>
                        {activeList && activeList.tasks.map((task, i) => {
                            return (
                                <Task
                                    onRemove={onRemoveTask}
                                    onToggleCheck={onToggleCheckTask}
                                    key={i}
                                    task={task} />
                            )
                        })}

                        {visibleTaskForm ?
                            <TaskForm />
                            :
                            <button
                                onClick={() => dispatch(setVisibleTaskForm(true))}
                                className='add-task-btn py-1 flex items-center gap-2'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>
                                <p className='text-xl'>добавить задачу</p>
                            </button>
                        }
                    </ul>

                </div> :
                <div className='w-full px-6 pt-10 pb-5 overflow-y-auto'>
                    {lists && lists.map(list => {
                        if (list.tasks.length) {
                            return (
                                <TaskList
                                    onRemove={onRemoveTask}
                                    onToggleCheck={onToggleCheckTask}
                                    key={list.id}
                                    name={list.name}
                                    colorId={list.colorId}
                                    tasks={list.tasks}
                                />
                            )
                        }
                    })}
                </div>
            }
        </>
    );
};

export default MainBlock;