import { useState } from "react";
import Header from './components/Header';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState (true)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: "Dentist's Appointment",
        day: "2024 October 21 at 10:30am",
        reminder: true,
    },
    {
        id:2,
        text: "Meeting",
        day: "2024 October 22 at 11:00am",
        reminder: true,
    },
    {
        id:3,
        text: "Meet my Gossip Girls",
        day: "2024  October 19 at 7:30pm",
        reminder: false,
    },
    {
        id:4,
        text: "Sport Event",
        day: "2024 October 26 all day",
        reminder: false,
    },
])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks,newTask])
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => task.id === id
    ? {...task, reminder: !task.reminder}
    : task
    )
  )
}
  return (
    <div className='container'>
      <Header 
      title = "Task Tracker" 
      onAdd={()=>setShowAddTask(!showAddTask)} 
      showAdd = {showAddTask} 
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 
      ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      :"No Task To Show"}
    </div>
  );
}

export default App;