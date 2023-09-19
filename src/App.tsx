import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './redux/reducers/UserSlice';

function App() {
    const { count } = useAppSelector((state) => state.userReducer);
    const { increment, decriment, reset } = userSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <div className='App'>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment(1))}>INC</button>
            <button onClick={() => dispatch(decriment(1))}>DEC</button>
            <button onClick={() => dispatch(reset())}>RES</button>
        </div>
    );
}

export default App;
