import * as React from 'react';
import { useState } from 'react';
import * as styles from '../scss/app.scss';

const getTodoListElm = (todoList: Array<string>, date: Array<string>): Array<JSX.Element> => {
    return todoList.map((todo: string, index: number) => (
        <span className={styles.todo} key={index}>
            {todo !== '' && <p className={styles.todo__text}>{todo}</p>}
            {todo !== '' && <p className={styles.todo__date}>{date[index]}</p>}
        </span>
    ));
};

const App = (): JSX.Element => {
    // no rerendering without row variable updating
    const [update, updateState]: [number, Function] = useState(0);
    const [todoList, setTodos]: [Array<string>, Function] = useState([]);
    const [date, setDate]: [Array<string>, Function] = useState([]);
    const [textData, setTextData]: [string, Function] = useState('');

    const stateValueUpdate = (): void => {
        if (update === 0) {
            updateState(1);
        } else {
            updateState(0);
        }
    };
    const setStateTodoList = (): void => {
        if (textData !== '') {
            todoList.push(textData);
            setTodos(todoList);
            date.push(Date());
            setDate(date);
            stateValueUpdate();
        }
    };
    const changeStateTextArea = (e: HTMLTextAreaElement): void => {
        const textAreaStr: string = e.value;
        setTextData(textAreaStr);
    };

    return (
        <div>
            <p>kamaeguchi test</p>
            <div className={styles.news}>
                <ul>
                <li className={styles.new}>お知らせ3</li>
                <li>お知らせ2</li>
                <li>お知らせ1</li>
                </ul>
            </div>
            {getTodoListElm(todoList, date)}
            <div className={styles.displayFlex}>
                <textarea
                    className={styles.todo__textArea}
                    onChange={(e): void => {
                        changeStateTextArea(e.currentTarget);
                    }}
                    inputMode="text"
                ></textarea>
                <button className={styles.ml5} onClick={setStateTodoList}>
                    Post To Do
                </button>
            </div>
        </div>
    );
};

export default App;
