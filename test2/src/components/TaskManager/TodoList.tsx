import { useState } from "react";
import Task from "./Task";
import style from "./style.module.css";

function App() {
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [taskText, setTaskText] = useState("");
  const [filter, setFilter] = useState("all");

 
  const addTask = () => {
    if (taskText.trim() === "") return; 
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText(""); 
  };

  // Изменить статус выполнения задачи
  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Удалить задачу
  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Фильтрация задач
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true; // "all" tasks
  });

 

  return (
    <div className={style.app}>
      <h1>Список дел</h1>
      
     
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Добавьте новую задачу"
      />
      <button onClick={addTask}>Добавить</button>

      <div>
        <label htmlFor="filter">Фильтровать задачи: </label>
        <select 
          id="filter" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Все</option>
          <option value="completed">Завершённые</option>
          <option value="incomplete">Не завершённые</option>
        </select>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
