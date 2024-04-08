import React from 'react';
import './MainBlock.scss';

const MainBlock = () => {
    return (
        <div className='mainblock w-full px-6 pt-10 pb-4 flex flex-col'>
            <h1 className=' text-4xl text-stone-600 font-bold text-center'>Книги</h1>
            <hr className='w-full h-1 bg-gray-300 mt-8' />

            <ul className='pt-8 pl-8 h-80 overflow-y-auto'>
                <li className='py-1 text-xl flex items-center gap-1'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="22px" width="22px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                    <h3>Lorem ipsum dolor sit amet</h3>
                </li>
                <li className='py-1 text-xl flex items-center gap-1'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5Z"></path><path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path></svg>
                    <h3>iste magnam minima reprehenderit ea!</h3>
                </li>
                <li className='py-1 text-xl flex items-center gap-1'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path></svg>
                    <h3>commodi veniam officiis accusamus voluptatibus.</h3>
                </li>
                <button className='add-task-btn py-1 flex items-center gap-1'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>
                    <p className='text-xl'>добавить задачу</p>
                </button>
            </ul>

        </div>
    );
};

export default MainBlock;