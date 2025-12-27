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
      <h2>Задание 2.1</h2>
      <div className="bg-stone-50 max-w-360 mx-auto w-4/5 block">
        <header className='shadow-md h-20 flex items-center'>
            <nav className='flex gap-5.5 w-4/5 mx-auto'>
                <a className='no-underline flex gap-6 w-38 items-center' href="#"> 
                    <img src="./logo.svg" alt="" />
                    <p className='uppercase text-xs'>Resource Center</p>
                </a>
                <ul className='flex gap-5.5'>
                    <li><a className='no-underline uppercase text-xs' href="">Blog</a></li>
                    <li><a className='no-underline uppercase text-xs' href="">Featured</a></li>
                    <li><a className='no-underline uppercase text-xs' href="">About</a></li>
                    <li><a className='no-underline uppercase text-xs' href="">Contact</a></li>
                </ul>
            </nav>
        </header>
        <div className="bg-[url(./background.jpg)] bg-contain">
            <div className="w-189 pt-36 pl-60 pb-17 box-border">
                <h1 className='text-5xl mb-2'>
                    The <span className='text-green-600'>most complete</span>
                    <br/>
                    Photography resource.
                </h1>
                <p className='text-lg mb-25'>
                    Welcome at Template Resource. This template is packed with useful features to built out your own resource website.
                </p>
                <div className="flex gap-3.5">
                    <a className='bg-[#F55F39] text-center text-stone-50 block px-3.5 pt-2.5 pb-1.5 w-fit text-2xl' href="#">
                        Visit our Blog
                        <br/>
                        <span className='text-sm'>Stories, News & info</span>
                    </a>
                    <a className='bg-stone-50 text-center text-stone-950 block px-3.5 pt-2.5 pb-1.5 w-fit text-2xl' href="">
                        Resource Center
                        <br/>
                        <span className='text-sm'>Tips, Tricks & Tutorials</span>
                    </a>
                </div>
            </div>
        </div>
         <footer className='flex gap-13.75 w-4/5 mx-auto py-13 relative'>
                <h2 className='w-32 text-3xl text-green-600 text-7'>
                    How can we help you?
                </h2>
                <ul>
                    <li><a className='no-underline text-sm text-blue-950' href="">Visit our Blog</a></li>
                    <li><a className='no-underline text-sm text-blue-950' href="">Photographers Resources Library</a></li>
                    <li><a className='no-underline text-sm text-blue-950' href="">Featured Stories</a></li>
                    <li><a className='no-underline text-sm text-blue-950' href="">Get Full Access Today!</a></li>
                </ul>
                <div className="absolute bg-[url(./background.svg)] bg-cover w-150 h-75 bottom-0 right-[-12.5%] text-stone-50 ">
                    <div className="mt-20 pl-20">
                        <h3 className='text-2xl mb-6.5'>Meet our Writers</h3>
                        <p className='w-76 text-sm mb-4.5'>We've got a professional team of professional photographers providing you with resources.</p>
                        <div className="relative w-50">
                            <img className='absolute w-20 h-20 rounded-2xl z-1' src="./ava-1.jpg" alt="" />
                            <img className='absolute w-20 h-20 rounded-2xl right-15 z-2 top-5' src="./ava-2.jpg" alt="" />
                            <img className='absolute w-20 h-20 rounded-2xl right-0 z-1' src="./ava-3.jpg" alt="" />
                        </div>
                    </div>
                    
                </div>
            </footer>
      </div>
    </>
  )
}

export default App
