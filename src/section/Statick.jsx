import React from 'react'

const Statick = () => {
  return (
    <div className='wrap'>
      <div className="bg-bg-accent grid xl:grid-cols-3 justify-center 2xl:grid-cols-4  md:grid-cols-2 gap-20 px-30 pt-9.25 pb-5 box-border">
        <div className="">
            <h3 className='text-6xl mb-1.75 text-brand'>100+</h3>
            <h4 className='text-2xl mb-4 text-stone-50 block relative'>Реализованные проекты <div className="w-5 h-5 bg-stone-950 absolute top-0 left-[-10%]"></div></h4>
            <p className='text-stone-50 text-base font-light'>Работаем с любой недвижимостью – от дворцов до квартир</p>
        </div>
        <div className="">
            <h3 className='text-6xl mb-1.75 text-brand'>10 лет</h3>
            <h4 className='text-2xl mb-4 text-stone-50 block relative'>Безупречная репутация <div className="w-5 h-5 bg-stone-950 absolute top-0 left-[-10%]"></div></h4>
            <p className='text-stone-50 text-base font-light'>Наши специалисты постоянно стажируются у лидеров строительных работ</p>
        </div>
        <div className="">
            <h3 className='text-6xl mb-1.75 text-brand'>3 года</h3>
            <h4 className='text-2xl mb-4 text-stone-50 block relative'>Гарантии на все работы <div className="w-5 h-5 bg-stone-950 absolute top-0 left-[-10%]"></div></h4>
            <p className='text-stone-50 text-base font-light'>Мы внимательно изучаем рынок отделочных материалов и инновационной техники </p>
        </div>
        <div className="">
            <h3 className='text-6xl mb-1.75 text-brand'>Сроки</h3>
            <h4 className='text-2xl mb-4 text-stone-50 block relative'>Процесс <div className="w-5 h-5 bg-stone-950 absolute top-0 left-[-10%]"></div></h4>
            <p className='text-stone-50 text-base font-light'>Нужно лучшее – закажи это у лучших!</p>
        </div>
      </div>
    </div>
  )
}

export default Statick
