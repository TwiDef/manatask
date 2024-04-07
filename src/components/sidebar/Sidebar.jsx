import React from 'react';

import './Sidebar.scss';

const Sidebar = () => {
    return (
        <aside className=' w-1/3 bg-zinc-300 px-6 pt-10 pb-4 flex flex-col gap-12'>

            <button className='flex items-center gap-2'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
                <p>Все задачи</p>
            </button>

            <ul className='list flex flex-col gap-3'>
                <li className='flex justify-between active'>
                    <div className='flex items-center gap-2'>
                        <span className='rounded-full bg-slate-400'></span>
                        Книги</div>
                    <button className='pr-1'>x</button>
                </li>
                <li className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <span className='rounded-full bg-green-400'></span>
                        Книги</div>
                </li>
                <li className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <span className='rounded-full bg-orange-400'></span>
                        Книги</div>
                </li>
            </ul>

            <button className='flex items-center gap-2'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>
                <p>Добавить папку</p>
            </button>
        </aside >
    );
};

export default Sidebar;