import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './redux/reducers/UserSlice';
import { fetchUsers } from './redux/reducers/ActionCreators';

function App() {
    const dispatch = useAppDispatch();
    const { users } = useAppSelector((state) => state.userReducer);

    React.useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return <div className='App'>{JSON.stringify(users, null, 2)}</div>;
}

export default App;
