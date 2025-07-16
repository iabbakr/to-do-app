import {useState} from 'react';
import '../components/Todo.css';

export default function ToDo() {

    const [tasks, setTasks] = useState([]);

    function handleAdd(e){
        e.preventDefault();

        const text = e.target.task.value.trim();

        if(!text){
            alert('please enter a task');
            return;
        }
        setTasks((prev) => [...prev, {id: Date.now(), text}]);
        e.target.reset();

    };

    function handleDelete(id) {
        setTasks((prev) => prev.filter((tasks) => tasks.id !== id))
    };
    
    function handleClear() {
        setTasks([])
    }
    return (

        <form className="form" onSubmit={handleAdd}>
            <div className="todo-input">
                <input type="text" name="task" placeholder="Add a new task" className="todo-text" aria-label="Enter task" />
                <button type="submit" className="todo-btn" aria-label="add task" >Add Task</button>
            </div>
            <div className="todo-list">
                {/* List of tasks will be rendered here */} 
                <ul className="todo-items" aria-label="list of tasks">
                    {tasks.length === 0 ? (<li className="empty">the list is empty</li>) : (
                        tasks.map(({text, id}) => (
                            <li key={id} className="todo-item">
                                <span>{text}</span>
                                <button onClick={() => handleDelete(id)} className="del-btn" aria-label={`delete ${tasks}`}>Delete</button>
                            </li>
                            
                            )
                        )
                    )
                    }
                </ul> 
                <button onClick={() => handleClear()} className="clear-btn">
                                clear all
                </button>  
            </div>
        </form>
    )
}