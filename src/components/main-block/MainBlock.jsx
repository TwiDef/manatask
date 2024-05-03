import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCompleted, fetchTaskData } from '../../redux/slices/taskSlice';
import './MainBlock.scss';


const MainBlock = () => {
    const dispatch = useDispatch()
    const { activeList } = useSelector(state => state.task_data)

    const toggleCheck = async (task) => {
        dispatch(toggleCompleted(task))
    }

    const onRenameList = async () => {
        const newListName = window.prompt('Введите имя списка', activeList.name)
        if (newListName) {
            await axios.patch(`http://localhost:3001/lists/${activeList.id}`, { name: newListName })
        }
        dispatch(fetchTaskData())
    }

    return (
        <div className='mainblock w-full px-6 pt-10 pb-4 flex flex-col'>
            <div className='flex items-center gap-2 my-0 m-auto'>
                <h1 className=' text-4xl text-stone-600 font-bold text-center'>
                    {activeList && activeList.name}
                </h1>
                <button onClick={onRenameList}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4341/4341104.png" alt=""
                        width={34} height={34} />
                </button>
            </div>

            <hr className='w-full h-1 bg-gray-300 mt-8' />

            <ul className='pt-8 pl-8 pr-3 h-80 overflow-y-auto'>
                {activeList && activeList.tasks.map(task => {
                    return (
                        <li
                            key={task.id}
                            className='py-1 text-xl flex items-center gap-2'>
                            <div className="checkbox-wrapper-12">
                                <div className="cbx">
                                    <input
                                        onChange={() => toggleCheck(task)}
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

                            <h3>{task.text}</h3>
                            <button className='remove-task-btn px-2 ml-auto'>
                                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor"></path></svg>
                            </button>
                        </li>
                    )
                })}



                <button className='add-task-btn py-1 flex items-center gap-1'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>
                    <p className='text-xl'>добавить задачу</p>
                </button>
            </ul>

        </div>
    );
};

export default MainBlock;