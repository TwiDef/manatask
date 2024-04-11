import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToList } from '../../redux/slices/taskSlice';
import './Popup.scss';

const Popup = ({ setPopupActive }) => {
    const dispatch = useDispatch()
    const { colors, lists } = useSelector(state => state.task_data)
    const [folderName, setFolderName] = useState('')
    const [selectedColor, setSelectedColor] = useState(null)

    const addFolder = () => {
        if (!folderName || !selectedColor) return

        dispatch(addToList({
            id: [...lists].slice(-1)[0].id + 1,
            active: false,
            name: folderName,
            colorId: selectedColor
        }))
        setSelectedColor(null)
        setFolderName('')
        setPopupActive(false)
    }

    return (
        <div className='popup p-4 z-10 bg-white absolute bottom-16 left-24'>
            <input
                onChange={(e) => setFolderName(e.target.value)}
                value={folderName}
                className='input p-1 px-2 text-md' type="text" placeholder='Название папки' />
            <div className='colors flex justify-between mt-3'>
                {colors.map((color, i) => {
                    return (
                        <span
                            onClick={() => setSelectedColor(color.id)}
                            key={i}
                            className={`${selectedColor === color.id && 'active'} color cursor-pointer ${color.color} rounded-full`}>
                        </span>
                    )
                })}
            </div>
            <button
                onClick={addFolder}
                className='add-btn w-full mt-3 py-1 text-cyan-50 bg-lime-600'>
                Добавить
            </button>
            <button
                onClick={() => setPopupActive(false)}
                className='close-btn rounded-full flex items-center justify-center'>
                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor"></path></svg>
            </button>
        </div>
    );
};

export default Popup;