import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTaskData } from './redux/slices/taskSlice';

import Sidebar from './components/sidebar/Sidebar';
import MainBlock from './components/main-block/MainBlock';

import './App.scss';

function App() {
    const dispatch = useDispatch()

    console.log(process.env.REACT_APP_SECRET_KEY)

    useEffect(() => {
        dispatch(fetchTaskData())
    }, [dispatch])

    return (
        <div className="App bg-zinc-700 flex items-center justify-center">
            <main className="container w-1/2 h-3/4 max-xl:w-full mx-auto bg-zinc-200 flex justify-between">
                <Sidebar />
                <MainBlock />
            </main>
        </div>
    );
}

export default App;
