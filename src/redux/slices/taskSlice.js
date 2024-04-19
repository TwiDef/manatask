import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchTaskData = createAsyncThunk('taskData/fetchTaskData', async (_, thunkAPI) => {
    const endpoints = [
        'http://localhost:3001/lists',
        'http://localhost:3001/tasks',
        'http://localhost:3001/colors'
    ]
    try {
        const [lists, tasks, colors] = await axios.all(endpoints.map(endpoint => axios.get(endpoint)))
        return {
            lists: lists.data,
            tasks: tasks.data,
            colors: colors.data
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        lists: [],
        tasks: [],
        colors: [],
        status: null
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
            .addCase(fetchTaskData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTaskData.fulfilled, (state, action) => {
                state.lists = action.payload.lists
                state.tasks = action.payload.tasks
                state.colors = action.payload.colors
            })
            .addCase(fetchTaskData.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export const { addToList, setActiveList, toggleCompleted } = taskSlice.actions
export default taskSlice.reducer 