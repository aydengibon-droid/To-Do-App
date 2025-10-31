
const TaskStatus = ({taskId,taskStatus,toggleComplete}) => {
const handletoggle = () => {
        toggleComplete(taskId)
    }
  return (
    <button onClick={handletoggle}>
        {taskStatus ? <i className="fa-regular fa-square-check text-xl relative top-3"></i> :
    <i className="fa-regular fa-square text-xl relative top-3"></i>}
    </button>
  )
}

export default TaskStatus