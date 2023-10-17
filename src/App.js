import React, {useState} from 'react';
import './index.css'

export default function App() {
    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('')

    const addItem = () => {
        if (inputValue.trim() !== "") {
            setItems([inputValue, ...items])
            setInputValue('')
        }
    }
    return (
        <div className="container">
            <h1>Список элементов</h1>
            <div className="input-container">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={addItem}>Добавить элемент</button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <div className="card">
                            {item}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
