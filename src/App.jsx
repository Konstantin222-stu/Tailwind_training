import { useState } from 'react'

function App() {

  return (
    <>
      <h2>Задание 2.1</h2>
      <div className="bg-gray-200 max-w-360 mx-auto w-4/5 block">
        <header className="w-full">
          <div className='bg-[url(./Banner.jpg)] h-32'></div>
          <nav className='flex items-end -mt-15 justify-center gap-96 mb-11.5'>
            <div className="flex items-end">
              <img className='w-32 h-32 rounded-full' src="./profile.jpg" alt="" />
              <h3 className='text-2xl font-bold'>Ricardo Cooper</h3>
            </div>
            <div className="flex gap-4">
              <button className='bg-stone-50 h-9.5 rounded-md flex items-center gap-2 pl-3.5 pr-4.5 py-2.5'>
                <img src="./Mail.svg" alt="" />
                Message
              </button>
              <button className='bg-stone-50 h-9.5 rounded-md flex items-center gap-2 pl-3.5 pr-4.5 py-2.5'>
                <img src="./Phone.svg" alt="" />
                Call
              </button>
            </div>
          </nav>
        </header>

        <div className="grid grid-cols-3 gap-y-8 gap-x-8 items-center">
          <div>
            <img className='rounded-lg mb-2' src="./card-1.jpg" alt="" />
            <p>id: 1</p>
          </div>
          <div>
            <img className='rounded-lg mb-2' src="./card-2.jpg" alt="" />
            <p>id: 2</p>
          </div>
          <div>
            <img className='rounded-lg mb-2' src="./card-3.jpg" alt="" />
            <p>id: 3</p>
          </div>
          <div>
            <img className='rounded-lg mb-2' src="./card-2.jpg" alt="" />
            <p>id: 4</p>
          </div>
          <div>
            <img className='rounded-lg mb-2' src="./card-3.jpg" alt="" />
            <p>id: 5</p>
          </div>
          <div>
            <img className='rounded-lg mb-2' src="./card-1.jpg" alt="" />
            <p>id: 6</p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
