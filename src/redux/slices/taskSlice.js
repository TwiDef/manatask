import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import data from './../../db.json';
import axios from 'axios';

export const fetchLists = createAsyncThunk('lists/fetchLists', async () => {
    const response = await axios.get('http://localhost:3001/lists')
    return response.data
})
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axios.get('http://localhost:3001/tasks')
    return response.data
})
export const fetchColors = createAsyncThunk('colors/fetchColors', async () => {
    const response = await axios.get('http://localhost:3001/colors')
    return response.data
})

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        /*         lists: [...data.lists],
                tasks: [...data.tasks],
                colors: [...data.colors], */
        lists: [],
        tasks: [],
        colors: [],
        status: null,

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
    },
    extraReducers(builder) {
        builder
            /* fetchLists */
            .addCase(fetchLists.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchLists.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.lists = action.payload
            })
            .addCase(fetchLists.rejected, (state) => {
                state.status = 'failed'
            })
            /* fetchTasks */
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.tasks = action.payload
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.status = 'failed'
            })
            /* fetchColors */
            .addCase(fetchColors.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchColors.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.colors = action.payload
            })
            .addCase(fetchColors.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export const { addToList, setActiveList, toggleCompleted } = taskSlice.actions
export default taskSlice.reducer 