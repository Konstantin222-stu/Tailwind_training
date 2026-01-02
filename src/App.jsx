import { useState } from "react";

function App() {
  return (
   <>
    <div className="flex flex-wrap gap-4 p-4">
      <h1 className="text-lead">
        Busy man
      </h1>
      <div className=" p-4 border">
        <div className="w-8 h-8 bg-brand"></div>
        <p className="text-brand">Брендовый</p>
      </div>
      <div className="p-4 border">
        <div className="w-8 h-8 bg-accent"></div>
        <p className="text-accent">Брендовый</p>
      </div>
      <div className="bg-stone-950 p-4 border">
        <div className="w-8 h-8 bg-light"></div>
        <p className="text-light">Брендовый</p>
      </div>
      <div className=" p-4 border">
        <p className="text-text-light">Брендовый</p>
      </div>
      <div className="bg-stone-950 p-4 border">
        <p className="text-text-dark">Брендовый</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-4 p-4 items-center">
      <p className=" border p-4">Busy man</p>
      <p className="font-heading border p-4">Busy man</p>
      <p className="font-mono border p-4">Busy man</p>
      <p className="text-lead border p-4">Busy man</p>
    </div>

    <div className="flex flex-wrap gap-4 p-4 items-center">
      <div className="border p-4">
        <div className="w-8 h-8 bg-brand"></div>
        <div className="mt-lt w-8 h-8 bg-accent"></div>
      </div>
      <div className="border p-4">
        <div className="w-8 h-8 bg-brand"></div>
        <div className="mt-bg w-8 h-8 bg-accent"></div>
      </div>
      <div className="border p-4">
        <div className="w-8 h-8 bg-brand"></div>
        <div className="mt-lg w-8 h-8 bg-accent"></div>
      </div>
    </div>

    <div className="flex flex-wrap gap-4 p-4 items-center">
      <div className="border p-4 w-xs h-sx">
        <div className="bg-brand w-40 h-20 rounded-lt"></div>
      </div>
      <div className="border p-4 w-xs h-sx">
        <div className="bg-brand w-40 h-20 rounded-bg"></div>
      </div>
      <div className="border p-4 w-xs h-sx">
       <img className="rounded-avatar" src="./ava-2.jpg"/>
      </div>
    </div>

    <div className="w-100 h-100 bg-stone-950 flex items-center justify-center">
      <img className="shadow-lt w-70 h-70" src="./image-4.jpg"/>
    </div>
    
   </>
  );
}

export default App;
