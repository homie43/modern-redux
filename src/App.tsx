import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './redux/reducers/ActionCreators';

function App() {
    const dispatch = useAppDispatch();
    const { users, isLoading, error } = useAppSelector(
        (state) => state.userReducer
    );

    React.useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div className='App'>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Ошибка</h1>}
            {JSON.stringify(users, null, 2)}
        </div>
    );
}

export default App;
