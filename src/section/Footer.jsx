import React from 'react'

const Footer = () => {
  return (
    <div className='bg-footer py-10 font-baloo text-stone-50'>
        <div className="wrap flex flex-wrap gap-15 justify-between  text-3xl mb-10">
            <ul>
                <li className='mb-4'><a href="">Lorem ipsum dolor</a></li>
                <li className='mb-4'><a href="">Lorem ipsum dolor</a></li>
                <li className='mb-4'><a href="">Lorem ipsum dolor</a></li>
                <li className='mb-4'><a href="">Lorem ipsum dolor</a></li>
            </ul>
            <ul>
                <li className='mb-4'><a href="">Lorem ipsum dolor</a></li>
                <li className='mb-4'><a href="">Lorem ipsum dolor</a></li>
                <li className='mb-4'><a href="">Lorem ipsum dolor</a></li>
                <li className='mb-4'><a href="">Lorem ipsum dolor</a></li>
            </ul>
            <ul>
                <li className='mb-4'>Адрес: наб. реки Фонтанки 10-15</li>
                <li className='mb-4'><a href="tel:89396754343">Телефон: +7(939) 675 43 43</a></li>
                <li className='mb-4'>Отдел продаж:  10.20 - 20.20</li>
                <li className='mb-4'><a href="malto:flyvink@edy-rost.ru">E-mail: flyvink@edy-rost.ru</a></li>
            </ul>
        </div>
        <div className="wrap  border-t border-stone-50 pt-10">
            <p className='sm:text-4xl text-3xl text-center'>© 2021 IndiumTechnologies All Rights Reserved </p>
        </div>
    </div>
  )
}

export default Footer
