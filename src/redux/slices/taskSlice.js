import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTaskData = createAsyncThunk('taskData/fetchTaskData', async (_, thunkAPI) => {
    const endpoints = [
        'http://localhost:3001/lists?_embed=tasks',
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
        activeList: null,
        visibleTaskForm: false,
        taskValue: "",
        status: null
    },
    reducers: {
        updateActiveList: (state, action) => {
            state.activeList = state.lists[action.payload]
        },
        addToList: (state, action) => {
            state.lists.push(action.payload)
        },
        setActiveList: (state, action) => {
            state.lists.filter(list => {
                return list.id === action.payload.id ? state.activeList = list : null
            })
        },
        setActiveAllLists: (state) => {
            state.activeList = null
        },
        deleteTask: (state, action) => {
            state.activeList.tasks = state.activeList.tasks.filter(task => {
                return task.id !== action.payload.id
            })

        },
        /*         toggleCompleted: (state, action) => {
                    state.tasks.forEach(task => {
                        if (task.id === action.payload.id) {
                            task.completed = !task.completed
                        }
                    })
                }, */
        setVisibleTaskForm: (state, action) => {
            state.visibleTaskForm = action.payload
        },
        setTaskValue: (state, action) => {
            state.taskValue = action.payload
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
                /* state.activeList = action.payload.lists[0] */
                state.status = 'succeeded'
            })
            .addCase(fetchTaskData.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export const {
    addToList,
    setActiveList,
    toggleCompleted,
    setVisibleTaskForm,
    updateActiveList,
    setActiveAllLists,
    deleteTask,
    setTaskValue } = taskSlice.actions

export default taskSlice.reducer 