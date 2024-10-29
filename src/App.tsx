import React from 'react';
import ColorList from './ColorList';
import EvenNumbers from './EvenNumbers';
import UserList from './UserList';

const App: React.FC = () => {
    return (
        <div>
            <h1>Array Manipulation and Data Rendering</h1>
            <ColorList />
            <EvenNumbers />
            <UserList />
        </div>
    );
};

export default App;