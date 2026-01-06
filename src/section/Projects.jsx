import React from 'react'

const Projects = () => {
  return (
    <div className=' pt-20.25 relative '>
      <div className="wrap relative">
         <h2 className='text-5xl block relative mb-21'>НАШИ ПРОЕКТЫ<div className='h-2.5 xl:w-[10%] w-40 bg-brand absolute left-[-5%] -bottom-6'></div></h2>
        <div className="absolute bg-bg-accent w-4/5 h-full right-[-30%] hidden "></div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-10 absolute w-full  top-[40.1%] ">
            <div className="border-x border-brand w-full 2xl:h-237 sm:h-360 h-216 md:h-238 lg:h-249">
                
            </div>
            <div className="border-x border-brand w-full 2xl:h-237 sm:h-360 h-216 md:h-238 lg:h-249">
                
            </div>
             <div className="border-x border-brand w-full 2xl:h-237 sm:h-180 h-216 hidden lg:block md:h-238 lg:h-249">
                
            </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1  sm:grid-cols-2 gap-y-10 mb-10 relative z-10">
            <div className="">
                <div className='aspect-[4/3] w-full min-h-125 bg-cover bg-[url(./project1.jpg)] bg-bottom mb-3.75 relative z-0 hover:brightness-50 transition-all duration-300'> </div>
                <h3 className='font-bold text-stone-50 text-3xl mb-2.5'>Квартира на Академической</h3>
                <p className="text-stone-50 font-light mb-0.5 text-2xl">Стиль - Лофт</p>
                <p className="text-stone-50 font-light mb-0.5 text-2xl">130 м2</p>
            </div>
            <div className="">
                <div className='aspect-[4/3] w-full min-h-125 bg-cover bg-[url(./project2.jpg)] bg-bottom mb-3.75 relative z-0 hover:brightness-50 transition-all duration-300'> </div>
                <h3 className='font-bold text-stone-50 text-3xl mb-2.5'>Квартира на Рижской</h3>
                <p className="text-stone-50 font-light mb-0.5 text-2xl">Стиль - Скандинавский</p>
                <p className="text-stone-50 font-light mb-0.5 text-2xl">94 м2</p>
            </div>
            <div className="">
                <div className='aspect-[4/3] w-full min-h-125 bg-cover bg-[url(./project3.jpg)] bg-bottom mb-3.75 relative z-0 hover:brightness-50 transition-all duration-300'> </div>
                <h3 className='font-bold text-stone-50 text-3xl mb-2.5'>Квартира на Чистых прудах</h3>
                <p className="text-stone-50 font-light mb-0.5 text-2xl">Стиль  Лофт</p>
                <p className="text-stone-50 font-light mb-0.5 text-2xl">68 м2</p>
            </div>
            <div className='absolute w-[120%] h-px bg-brand 2xl:top-[38.7%] top-[58%] left-[-10%] md:top-[37.1%] '></div>
            <div className="">
                <div className='aspect-[4/3] w-full min-h-125 bg-cover bg-[url(./project4.jpg)] bg-bottom mb-3.75 relative z-0 hover:brightness-50 transition-all duration-300'> </div>
                <h3 className='font-bold text-stone-50 text-3xl mb-2.5'>Квартира на Рижской</h3>
                <p className="text-stone-50 font-light mb-0.5 text-2xl">Стиль - Скандинавский</p>
                <p className="text-stone-50 font-light mb-0.5 text-2xl">94 м2</p>
            </div>
            <div className="">
                <div className='aspect-[4/3] w-full min-h-125 bg-cover bg-[url(./project5.jpg)] bg-bottom mb-3.75 relative z-0 hover:brightness-50 transition-all duration-300'> </div>
                <h3 className='font-bold text-stone-50 text-3xl mb-2.5'>Квартира на Чистых прудах</h3>
                <p className="text-stone-50 font-light mb-0.5 text-2xl">Стиль - Лофт</p>
                <p className="text-stone-50 font-light mb-0.5 text-2xl">85 м2</p>
            </div>
            <div className="">
                <div className='aspect-[4/3] w-full min-h-125 bg-cover bg-[url(./project6.jpg)] bg-bottom mb-3.75 relative z-0 hover:brightness-50 transition-all duration-300'> </div>
                <h3 className='font-bold text-stone-50 text-3xl mb-2.5'>Квартира на Академической</h3>
                <p className="text-stone-50 font-light mb-0.5 text-2xl">В стиле Лофт</p>
                <p className="text-stone-50 font-light mb-0.5 text-2xl">108 м2</p>
            </div>
            <div className='absolute w-[120%] h-px bg-brand bottom-[-3%] left-[-10%] md:bottom-[-7%] lg:bottom-[-10%]'></div>
        </div>
        <button className='bg-brand text-stone-50 text-2xl font-bold pl-17.75 pt-4 pr-10.25 pb-3 mx-auto block'>Еще проекты</button>
      </div>
    </div>
  )
}

export default Projects
