import Sidebar from './components/sidebar/Sidebar';
import MainBlock from './components/main-block/MainBlock';
import { useDispatch } from 'react-redux';
import { fetchLists, fetchTasks, fetchColors } from './redux/slices/taskSlice';
import './App.scss';
import { useEffect } from 'react';


function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchLists())
        dispatch(fetchTasks())
        dispatch(fetchColors())
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
