function App() {
  
  return (
    <>
    <div className ="h-screen w-screen flec justify-center bg-stone-100">
    <div className ="flex flex-col items-center m-24 w-1xl">
      <div className="text-2xl">To Do List</div>
      <div className="flex w-full justify-between">
        <div>
          <button className="bg-blue-400  p-2 rounded-full text-white hover:bg-black cursor-pointer">Add Task</button>
          <select name="Filter" id="Filter list">
            <option value="All">All</option>
            <option value="Done">I SAY YA DONE</option>
            <option value="Uncompleted">Uncompleted</option>
          </select>
        </div>
        <div>filter</div>
      </div>
      {/* end btns */}
      <div>List</div>
      {/* end list */}
      </div>
      </div>
    </>
  )
}

export default App
