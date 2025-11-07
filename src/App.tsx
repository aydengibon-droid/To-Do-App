import AddTask from "./Components/AddTask"
import EditTask from "./Components/EditTask"
import ListItem from "./Components/ListItem"
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    task: "Sample Task",
    completed: false,
    createdOn: new Date()
  },])

  const [taskToEdit, setTaskToEdit] = useState({
    id: 0,
    task: ""
  });

  const addNewTask = (taskDetails: string) => {
    const newTask = {
      id: tasks.length + 1,
      task: taskDetails,
      completed: false,
      createdOn: new Date()
    }
    setTasks([...tasks, newTask])
  }
  const updateTask = (taskId: number,
    TaskDetails: string) => {
    let updTasks = tasks.map((task) => {
      if (task.id === taskId)
        task.task = TaskDetails
      return task

    })
    setTasks(updTasks)
  }

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  const toggleComplete = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)

  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center bg-stone-100">
        <div className="flex flex-col items-center m-24 w-3xl">
          <div className="text-2xl">To Do List</div>
          <div className="flex w-full justify-between">
            <div>
              <button className="bg-blue-400  p-3 rounded-lg text-white hover:bg-black cursor-pointer">Add Task</button>
            </div>
            <div>
              <select name="Filter" id="Filter list" className="bg-slate-300  p-3 rounded-lg text-black hover:bg-slate-400 cursor-pointer">
                <option value="All">All</option>
                <option value="Done">I SAY YA DONE</option>
                <option value="Uncompleted">Uncompleted</option>
              </select>
            </div>
          </div>
          {/* end btns */}
          <AddTask addNewTask={addNewTask} />
          <EditTask taskToEdit={taskToEdit}
          setTaskToEdit ={setTaskToEdit}
          updateTask={updateTask} />
          <div className="bg-slate-300 w-full rounded-lg mt-4 px-8 py-6">

            {tasks.map((task) => (
              <ListItem key={task.id} task={task} delTask={deleteTask} toggleComplete={toggleComplete} setEdit={setTaskToEdit} />
            ))}
          </div>
          {/* end list */}
        </div>
      </div>
    </>
  )
}

export default App
