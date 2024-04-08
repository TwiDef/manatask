import React from 'react';
import { items } from '../../items';

import './Sidebar.scss';

const Sidebar = () => {
    return (
        <aside className='sidebar w-1/3 bg-zinc-300 px-6 pt-10 pb-4 flex flex-col gap-12'>

            <button className='all-tasks-btn flex items-center gap-2'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
                <p>Все задачи</p>
            </button>

            <ul className='list flex flex-col gap-3 overflow-y-auto'>
                {items.map((item, i) => {
                    return (
                        <li key={i} className={`flex justify-between ${item.active ? 'active' : null}`}>
                            <div className='flex items-center gap-2'>
                                <span className={`rounded-full ${item.color}`}></span>
                                {item.name}
                            </div>
                            {item.active && <button className='pr-1'>
                                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor"></path></svg>
                            </button>}
                        </li>
                    )
                })}
            </ul>

            <button className='add-folder-btn flex items-center gap-2'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>
                <p>Добавить папку</p>
            </button>
        </aside >
    );
};

export default Sidebar;