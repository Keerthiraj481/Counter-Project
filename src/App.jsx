import { useState } from "react";
const App =()=>{
  const[count,setCount] = useState(0);

  const increase =()=>{
    if(count>=15)
    {
      return;
    }
    const updatedCount = count + 1;
    setCount(updatedCount);
  };
  const reset =()=>{
    const updatedCount = 0;
    setCount(updatedCount);
  };
  const decrease =()=>{
    if(count===0)
    {
      reset();
      return;
    }
    const updatedCount = count - 1;
    setCount(updatedCount);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-14 bg-gradient-to-r from-cyan-400 via-teal-100 to-slate-600 ...">
      <div>
        <h1 className="text-4xl font-medium">
          Counter : <span className="font-black">{count}</span>
        </h1>
      </div>
      <div className="flex gap-6">
        <button
          className="px-4 py-2 bg-red-500 text-white text-xl font-medium rounded"
          onClick={decrease}
        >
          DECREASE
        </button>
        <button
          className="px-4 py-2 bg-purple-700 text-white text-xl font-medium rounded"
          onClick={reset}
        >
          RESET
        </button>
        <button
          className="px-4 py-2 bg-emerald-700 text-white text-xl font-medium rounded"
          onClick={increase}
        >
          INCREASE
        </button>
      </div>
    </main>
  );
}
export default App;