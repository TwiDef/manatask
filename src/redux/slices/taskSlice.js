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
        },
        toggleCompleted: (state, action) => {
            state.tasks.forEach(task => {
                if (task.id === action.payload.id) {
                    task.completed = !task.completed
                }
            })
        }
    }
})

export const { addToList, setActiveList, toggleCompleted } = taskSlice.actions
export default taskSlice.reducer 