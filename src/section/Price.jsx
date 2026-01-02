import React from 'react'

const Price = () => {
  return (
    <div className='wrap mt-20.25'>
        <h2 className='text-5xl block relative mb-21'>СТОИМОСТЬ ПРОЕКТА <div className='h-2.5 xl:w-[10%] w-40 bg-brand absolute left-[-5%] -bottom-6'></div></h2>
        <div className="flex flex-wrap gap-10 md:flex-nowrap">
            <div className="xl:w-[60%]">
                <h3 className='font-normal xl:text-5xl text-3xl text-stone-50 mb-12'>Узнайте стоимость дизайн-проекта, ответив на 3 вопроса</h3>
                <p className='font-light xl:text-4xl text-2xl text-stone-50 xl:mb-38.75 mb-20'>Пройдите короткий тест, узнайте цену, получите консультацию по будущему проекту</p>
                <button className='bg-brand font-light xl:px-26 xl:py-8.75 xl:text-4xl text-3xl px-13 py-4'>Узнать стоимость</button>
            </div>
            <div className="xl:w-[30%] sm:h-200 h-180 relative border-l border-brand pl-19.25">
                <div className="md:h-[60%] sm:h-[50%] h-[40%] lt:hidden sm:block">
                    <img className='absolute left-0' src="./price-b.svg" alt="" />
                    <img className='absolute left-67.5' src="./price-l.svg" alt="" />
                </div>
                <div className="h-[50%]">
                    <h4 className='text-4xl text-stone-50 mb-4.75'>Бонусы:</h4>
                    <ul>
                        <li className='text-stone-50 text-3xl sm:text-4xl font-light block relative'>чек листы на 5 ошибок в строительстве <div className="w-5 h-5 bg-stone-950 absolute top-3 left-[-10%]"></div></li>
                        <div className="absolute sm:w-100 w-[120%]  md:w-125 bg-brand h-px -left-25"></div>
                        <li className='text-stone-50 text-3xl sm:text-4xl font-light block relative mt-6.75'>5 трендов 2021 года на дизайн интерьеров <div className="w-5 h-5 bg-stone-950 absolute top-3 left-[-10%]"></div></li>
                    </ul>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Price
