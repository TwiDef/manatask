import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveList } from '../../redux/slices/taskSlice';

import './TaskList.scss';

const TaskList = ({ list, name, tasks, colorId, onRemove, onToggleCheck }) => {

    const { colors } = useSelector(state => state.task_data)
    const dispatch = useDispatch()

    return (
        <div className='task-list'>
            <h3
                onClick={() => dispatch(setActiveList(list))}
                className={`cursor-pointer text-3xl font-bold pb-4 text-${colors[colorId - 1].color}-600`}>{name}</h3>
            <ul>
                {tasks && tasks.map(task => {
                    return (
                        <li
                            key={task.id}
                            className='flex items-center justify-between pb-2 ml-4'>
                            <div className='flex items-center gap-2'>
                                <div className="checkbox-wrapper-12">
                                    <div className="cbx">
                                        <input
                                            onChange={(e) => onToggleCheck(task, e.target.checked)}
                                            id="check"
                                            type="checkbox"
                                            checked={task.completed} />
                                        <label htmlFor="check"></label>
                                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                                            <path d="M2 8.36364L6.23077 12L13 2"></path>
                                        </svg>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <defs>
                                            <filter id="goo-12">
                                                <fegaussianblur in="SourceGraphic" stdDeviation="4" result="blur"></fegaussianblur>
                                                <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></fecolormatrix>
                                                <feblend in="SourceGraphic" in2="goo-12"></feblend>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                                <h3 className='task-text text-lg'>{task.text}</h3>
                            </div>
                            <button
                                onClick={() => onRemove(task)}
                                className='remove-task-btn mr-3'>
                                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor"></path></svg>
                            </button>
                        </li>
                    )
                })}
            </ul>
            <hr className='h-1 bg-gray-400 rounded-full mb-4' />
        </div>
    );
};

export default TaskList;