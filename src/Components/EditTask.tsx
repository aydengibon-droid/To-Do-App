import React from 'react'

const EditTask = ({ taskToEdit, setTaskToEdit, updateTask }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        updateTask(taskToEdit.id, taskToEdit.task)
    }

    const handleChange = (e) => {
        setTaskToEdit({
            ...taskToEdit,
            task: e.target.value
        })
    }

    return (
        <div className="w-6/8">

            <form>
                <div>
                    <label htmlFor="task" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Task</label>
                    <input type="text" id="task" value={taskToEdit.task} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="border-blue-400 border-2 w-32 p-2 text-center rounded-lg hover:bg-blue-600 hover:text-white">
                    <button className="cursor-pointer" type="submit" onClick={handleSubmit}>Save Changes</button>
                </div>
            </form>
        </div>
    )
}

export default EditTask