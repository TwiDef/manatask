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

    }
})

export const { } = taskSlice.actions
export default taskSlice.reducer