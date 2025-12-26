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

      <nav className="flex justify-between items-center px-6 py-4 bg-[#384b66] t ">
          <div class="logo">Лого</div>
          <ul class="nav-links">
              <li><a href="#" class="nav-link active">Главная</a></li>
              <li><a href="#" class="nav-link">О нас</a></li>
              <li><a href="#" class="nav-link">Услуги</a></li>
              <li><a href="#" class="nav-link">Контакты</a></li>
          </ul>
          <span>Алексей</span>
      </nav>

    </>
  )
}

export default App
