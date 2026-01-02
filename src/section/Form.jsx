import React from 'react'

const Form = () => {
  return (
    <div className='wrap pb-10'>
        <h2 className='sm:text-5xl text-3xl block relative mb-21 sm:w-150 w-70 pt-23'>ПОЛУЧИТЕ КАТАЛОГ НАШИХ ПРОЕКТОВ <div className='h-2.5 xl:w-[10%] w-40 bg-brand absolute left-[-5%] -bottom-6'></div></h2>
        <div className="flex lg:gap-27.25 md:gap-10 flex-wrap md:flex-nowrap">
            <img className='md:w-1/2 object-cover' src="./form.jpg" alt="" />
            <div className="md:w-1/2 text-stone-50">
                <h3 className='font-medium text-4xl mb-10.25'>Оставьте ваш E-mail, чтобы получить каталог наших проектов</h3>
                <p className='text-2xl font-light mb-21.5'>Каталог поможет вам выбрать стиль и продумать планировку квартиры</p>
                <form action="">
                    <input className='border-brand border w-full placeholder:font-light pl-7.5 py-3.5 box-border outline-0 mb-3.75' type="text" placeholder='Введите ваш E-mail' />
                    <span className='flex gap-1 mb-18'>
                        <input className='' type="checkbox" name="" id="" />
                        <p className='text-sm font-light'>Я согласен на <a className='underline' href="">обработку персональных данных</a></p>
                    </span>
                    <button className='bg-brand text-stone-50 w-full h-17.5 text-2xl font-bold'>Получить каталог</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Form
