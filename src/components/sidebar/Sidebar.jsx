import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTaskData, setActiveList } from './../../redux/slices/taskSlice';
import Popup from '../popup/Popup';

import './Sidebar.scss';


const Sidebar = () => {

    const dispatch = useDispatch()
    const [popupActive, setPopupActive] = useState(false)
    const { lists, colors, activeList } = useSelector(state => state.task_data)

    const onSetActiveList = (list) => {
        dispatch(setActiveList(list))
    }

    const onRemoveList = async (e, list) => {
        e.stopPropagation()

        if (window.confirm(`Вы желаете удалить список - ${list.name}`)) {
            await axios.delete(`http://localhost:3001/lists/${list.id}`)
            dispatch(fetchTaskData())
            dispatch(setActiveList(lists[0]))
        }
    }

    return (
        <aside className='sidebar w-1/3 bg-zinc-300 px-6 pt-10 pb-4 flex flex-col gap-12'>

            <button className='all-tasks-btn flex items-center gap-2'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
                <p>Все задачи</p>
            </button>

            <ul className='list flex flex-col gap-3 overflow-y-auto'>
                {lists.map((list, i) => {
                    return (
                        <li
                            onClick={() => onSetActiveList(list)}
                            key={i}
                            className={`listItem mr-2 flex justify-between ${list.id === activeList.id ? 'active' : null}`}>

                            <div className='flex items-center gap-2'>
                                <span
                                    className={`color-bagde color rounded-full ${(colors[list.colorId - 1]?.color)}`}>
                                    <p className='task-count rounded-full'>
                                        {list.tasks && list.tasks.length}
                                    </p>
                                </span>
                                {list.name.length > 12 ? list.name.slice(0, 11) + '...' : list.name}
                            </div>
                            {list.id === activeList.id &&
                                <button
                                    className='remove-folder-btn pr-1'
                                    onClick={(e) => onRemoveList(e, list)}>
                                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor"></path></svg>
                                </button>}
                        </li>
                    )
                })}
            </ul>

            <button
                onClick={() => setPopupActive(!popupActive)}
                className='add-folder-btn flex items-center gap-2'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>
                <p>Добавить папку</p>
            </button>
            {
                popupActive && <Popup setPopupActive={setPopupActive} />
            }

        </aside >
    );
};

export default Sidebar;