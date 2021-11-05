
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react'

function App() {
  const [showAddTask,setShowAddTask] =useState(true)
  const [tasks, setTasks] = useState([  
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Shopoing at bazar",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      }
])

const deleteTask =(id)=>{
  setTasks(tasks.filter((task) =>task.id !==id))
  console.log('tttt:',id)
}

const addTask =(task) =>{
  const id = Math.floor(Math.random() *10000) +1
  const newTask = {id ,...task};
  console.log(tasks);
  setTasks([...tasks,newTask]);
  
}
const toggleReminder =(id) =>{
  setTasks(
    tasks.map((task) => 
    task.id===id ? {...task ,reminder :!task.reminder }
                : task 
    )
    )
}

  return (
    <div className="container">
      <Header onAdd ={() =>setShowAddTask(!showAddTask)} showAdd ={showAddTask}/>
     {showAddTask && <AddTask onAdd ={addTask}/> }
       {
        tasks.length > 0 ? 
           (<Tasks tasks ={tasks} onDelete ={deleteTask} onToggle={toggleReminder}/>)
            :('No task to show')
      }
     
    </div>
  );
}

export default App;
