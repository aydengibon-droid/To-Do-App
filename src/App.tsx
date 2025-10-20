function App() {
  
  return (
    <>
    <div className ="h-screen w-screen flex justify-center bg-stone-100">
    <div className ="flex flex-col items-center m-24 w-3xl">
      <div className="text-2xl">To Do List</div>
      <div className="flex w-full justify-between">
        <div>
          <button className="bg-blue-400  p-3 rounded-lg text-white hover:bg-black cursor-pointer">Add Task</button>
        </div>
        <div>
          <select name="Filter" id="Filter list"  className="bg-slate-300  p-3 rounded-lg text-black hover:bg-slate-400 cursor-pointer">
            <option value="All">All</option>
            <option value="Done">I SAY YA DONE</option>
            <option value="Uncompleted">Uncompleted</option>
          </select>          
        </div>
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
