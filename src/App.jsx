import { useState } from 'react'

function App() {

  return (
    <>
      <h2>Задание 1.1</h2>
      <div className="w-75 p-5 bg-red-100 rounded-lg font-sans">
          <h3 className="text-2xl mb-2.5 text-blue-950">Заголовок карточки</h3>
          <p className="text-gray-500 leading-4 mb-4">
            Это пример простой карточки с тенью, отступами и кнопкой.
            Попробуйте перевести её в Tailwind.
          </p>
          <button className="bg-blue-500 text-stone-50 py-2 px-3.5 rounded-sm border-none cursor-pointer">Подробнее</button>
      </div>
      
      <br/>
      <br/>
      <br/>

      <h2>Задание 1.2</h2>
      <nav className="flex justify-between items-center px-6 py-4 bg-[#384b66] text-stone-50 font-sans">
          <div className="text-2xl font-bold text-blue-400">Лого</div>
          <ul class="flex gap-5 list-none m-0 p-0">
              <li><a href="#" class="text-stone-50 no-underline py-1.5 px-3 border-4 hover:bg-[#374151]  active">Главная</a></li>
              <li><a href="#" class="text-stone-50 no-underline py-1.5 px-3 border-4 hover:bg-[#374151] ">О нас</a></li>
              <li><a href="#" class="text-stone-50 no-underline py-1.5 px-3 border-4 hover:bg-[#374151] ">Услуги</a></li>
              <li><a href="#" class="text-stone-50 no-underline py-1.5 px-3 border-4 hover:bg-[#374151] ">Контакты</a></li>
          </ul>
          <span>Алексей</span>
      </nav>
      
      <br/>
      <br/>
      <br/>

      <h2>Задание 1.3</h2>
        <div className="max-w-300 my-0 mx-auto p-20 font-sans">
          <h2 className="text-[2rem] font-bold mb-7.5 text-center text-[#111827]">Наши продукты</h2>

          <div className="grid grid-cols-5 gap-6">
              <div className="border-stone-50 border border-solid rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="w-full h-48.5 bg-stone-50 flex items-center justify-center text-gray-500 text-xl">Изображение продукта</div>
                  <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">Ноутбук Pro</h3>
                      <p className="text-gray-500 mb-4 leading-5">Мощный ноутбук для работы и творчества с экраном Retina.</p>
                      <div className="text-xl font-bold text-[#059669]">89 999 ₽</div>
                  </div>
              </div>
              
              <div className="border-stone-50 border border-solid rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="w-full h-48.5 bg-stone-50 flex items-center justify-center text-gray-500 text-xl">Изображение продукта</div>
                  <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">Смартфон X</h3>
                      <p className="text-gray-500 mb-4 leading-5">Флагманский смартфон с камерой 108 МП и OLED-экраном.</p>
                      <div className="text-xl font-bold text-[#059669]">64 999 ₽</div>
                  </div>
              </div>
              
              <div className="border-stone-50 border border-solid rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="w-full h-48.5 bg-stone-50 flex items-center justify-center text-gray-500 text-xl">Изображение продукта</div>
                  <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">Наушники Max</h3>
                      <p className="text-gray-500 mb-4 leading-5">Беспроводные наушники с шумоподавлением и 30-часовой работой.</p>
                      <div className="text-xl font-bold text-[#059669]">24 999 ₽</div>
                  </div>
              </div>
          </div>
        </div>

    </>
  )
}

export default App
