import React from 'react';

const App = () => {
    const style = {
        padding: '100px',
        display: 'flex',
        gap: '12px',
    };

    const squareStyle = {
        width: '100px',
        height: '100px',
        border: '1px solid green',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
    };

    const [todoList, setTodoList] = useState([
        { id: 0, title: 'react를 배워볼까요', isDone: false },
    ]);

    const [todoInputTitle, setTodoInputTitle] = useState('');
    const [todoInputDesc, setTodoInputDesc] = useState('');
    const titleChangeHandler = (e) => setTodoInputTitle(e.target.value);
    const descChangeHandler = (e) => setTodoInputDesc(e.target.value);

    const submitBtnHandler = () => {
        const newObj = {
            id: Date.now(),
            title: todoInputTitle,
            desc: todoInputDesc,
            isDone: false,
        };
        setTodoList([...todoList, newObj]);
        setTodoInputTitle('');
        setTodoInputDesc('');
    };

    return (
        <div style={style}>
            <div style={squareStyle}>react를 배워봅시다.</div>
            <input value={todoInputDesc} onChange={descChangeHandler} />
            <button onClick={submitBtnHandler}>추가</button>
        </div>
    );
};

export default App;
