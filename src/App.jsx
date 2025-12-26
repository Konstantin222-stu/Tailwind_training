import { useState } from 'react'

function App() {

  return (
    <>
      <div className="w-75 p-5 bg-red-100 rounded-lg font-sans">
          <h3 className="text-2xl mb-2.5 text-blue-950">Заголовок карточки</h3>
          <p className="text-gray-500 leading-4 mb-4">
            Это пример простой карточки с тенью, отступами и кнопкой.
            Попробуйте перевести её в Tailwind.
          </p>
          <button className="bg-blue-500 text-stone-50 px-2 py-3.5 rounded-sm border-none cursor-pointer">Подробнее</button>
      </div>
    </>
  )
}

export default App
