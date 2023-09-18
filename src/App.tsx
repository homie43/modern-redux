import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './redux/reducers/UserSlice';

function App() {
    const { count } = useAppSelector((state) => state.userReducer);
    const { increment } = userSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <div className='App'>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment(1))}>INC</button>
        </div>
    );
}

export default App;
