import React, { useState } from 'react';

function Checklist() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask) {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="checklist">
            <h2>Tarkistuslista</h2>
            <div>
                <input
                    type="text"
                    placeholder="Lisää uusi tehtävä"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addTask}>Lisää</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        onClick={() => toggleTask(index)}
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            cursor: 'pointer',
                        }}
                    >
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Checklist;
