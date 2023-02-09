import React, { useState } from 'react';

const App = () => {
    const [todotitle, setTodoTitle] = useState('안녕하세요');
    const [todoDesc, setTodoDesc] = useState('');

    return (
        <div>
            <div>
                <input
                    value={todotitle}
                    onChange={(e) => {
                        setTodoTitle(e.target.value);
                    }}
                />
                <div>
                    <input value={todoDesc} onChange={(e) => setTodoDesc(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default App;
