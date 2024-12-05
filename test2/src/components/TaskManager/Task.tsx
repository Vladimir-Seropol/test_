// Task.tsx
import React from 'react';
import style from './style.module.css';

interface TaskProps {
  task: { id: number; text: string; completed: boolean };
  toggleTaskCompletion: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, toggleTaskCompletion, deleteTask }) => {


  return (
    <li className={task.completed ? style.completed : ''}>
      <span onClick={() => toggleTaskCompletion(task.id)}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Удалить</button>
    </li>
  );
};

export default Task;
