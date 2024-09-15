
import { useState } from 'react';
import './App.css';


function App() {
  const[color, setcolor]=useState("");

  return (
<div className='w-full h-screen' style={{backgroundColor:color}}>
<div className=' mt-[40%] w-full absolute'>
      <div className='bg-red-700 text-white p-2 flex flex-wrap justify-center w-[60%] mx-auto  rounded-2xl'>
        <button onClick={()=>setcolor("orange")} className='bg-orange-600 rounded-2xl p-2 mx-1 shadow-xl'>Orange</button>
        <button onClick={()=>setcolor("blue")}className='bg-blue-600 rounded-2xl px-4 mx-1 shadow-xl'>Blue</button>
        <button onClick={()=>setcolor("yellow")}className='bg-yellow-300 rounded-2xl p-2 mx-1 shadow-xl'>Yellow</button>
        <button onClick={()=>setcolor("black")}className='bg-black rounded-2xl px-4 mx-1 shadow-xl'>Black</button>
        <button onClick={()=>setcolor("green")}className='bg-green-600 rounded-2xl p-2 mx-1 shadow-xl'>Green</button>
        <button onClick={()=>setcolor("purple")}className='bg-purple-600 rounded-2xl p-2 mx-1 shadow-xl'>Purple</button>
        <button onClick={()=>setcolor("teal")}className='bg-teal-500 rounded-2xl px-4 mx-1 shadow-xl'>Teal</button>
        <button onClick={()=>setcolor("lavender")}className='bg-gray-200 rounded-2xl px-4 mx-1 shadow-xl'>Lavender</button>

        <button onClick={()=>setcolor("red")}className='bg-red-600 rounded-2xl px-4 mx-1 shadow-xl'>Red</button>

        <button onClick={()=>setcolor("pink")}className='bg-pink-400 rounded-2xl px-4 mx-1 shadow-xl'>Pink</button>
      </div>
    </div>
  </div>

  );
}

export default App;
