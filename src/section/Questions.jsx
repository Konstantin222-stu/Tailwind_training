import React from 'react'

const Questions = () => {
  return (
    <div className='wrap font-baloo text-stone-50 mb-10'>
      <h2 className='text-6xl block mb-21 pt-23'>Есть вопросы?</h2>
      <p className='text-4xl sm:w-125 mb-15'>Мы никому не передадим ваши данные и не сохраняем ваш номер в базу</p>
      <div className=" flex flex-wrap md:flex-nowrap items-center justify-between gap-2 font-basic">
        <input className='appearance-none bg-accent sm:placeholder:text-3xl placeholder:text-stone-50 placeholder:text-3xl placeholder:font-basic text-2xl placeholder:text-center outline-0 py-8.75 px-5 sm:w-100 w-full' type="text" name="" id="" placeholder='Ваше Имя' />
        <input className='appearance-none bg-accent sm:placeholder:text-3xl placeholder:text-stone-50 placeholder:text-3xl placeholder:font-basic text-2xl placeholder:text-center outline-0 py-8.75 px-5 sm:w-100 w-full' type="text" name="" id="" placeholder='Ваша Фамилия ' />
        <button className='appearance-none bg-brand sm:text-3xl font-bold sm:px-11 sm:py-9 px-11 py-3 text-3xl sm:w-100 w-full'>Просмотреть район</button>
      </div>
    </div>
  )
}

export default Questions
