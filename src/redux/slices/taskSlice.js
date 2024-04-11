import { createSlice } from '@reduxjs/toolkit';
import data from './../../data.json';

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        lists: [...data.lists],
        tasks: [...data.tasks],
        colors: [...data.colors]
    },
    reducers: {
        addToList: (state, action) => {
            state.lists.push(action.payload)
        },
        setActiveList: (state, action) => {
            state.lists.forEach(list => {
                list.active = false
            })
            state.lists.filter(list => {
                return list.id === action.payload.id ? list.active = true : null
            })
        }
    }
})

export const { addToList, setActiveList } = taskSlice.actions
export default taskSlice.reducer 