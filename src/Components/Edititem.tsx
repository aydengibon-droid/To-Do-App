import React from 'react'

const Edititem = ({ taskId, taskDetails, setEdit }) => {
    const handleSetEdit = () => {
        setEdit({ id: taskId, task: taskDetails });
    }
    return (
        <>
            <i onClick={handleSetEdit} className="fa-solid fa-pen text-xl relative top-3 mx-2"></i>

        </>
    )
}

export default Edititem