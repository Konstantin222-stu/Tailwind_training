import React from 'react'

const Questions = () => {
  return (
    <div className='wrap font-baloo text-stone-50 mb-10'>
      <h2 className='text-6xl block mb-21 pt-23 '>Есть вопросы?</h2>
      <p className='text-4xl sm:w-125 mb-15'>Мы никому не передадим ваши данные и не сохраняем ваш номер в базу</p>
      <div className=" flex flex-wrap md:flex-nowrap items-center justify-between gap-2">
        <input className='bg-accent sm:placeholder:text-4xl placeholder:text-3xl placeholder:text-center outline-0 py-8.75 sm:w-100 w-full' type="text" name="" id="" placeholder='Ваше Имя' />
        <input className='bg-accent sm:placeholder:text-4xl placeholder:text-3xl placeholder:text-center outline-0 py-8.75 sm:w-100 w-full' type="text" name="" id="" placeholder='Ваша Фамилия ' />
        <button className='bg-brand sm:text-4xl font-bold sm:px-22 sm:py-2 px-11 py-3 text-3xl sm:w-100 w-full'>Просмотреть район</button>
      </div>
    </div>
  )
}

export default Questions
