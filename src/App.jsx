import { useState } from 'react'

function App() {

  return (
    <>
      <div className="w-[300px] p-[20px] bg-[rgb(218,192,192)] rounded-[8px] font-sans">
          <h3 className="text-2xl mb-[10px] text-[#1f2937]">Заголовок карточки</h3>
          <p className="text-[#4f5a69] leading-[1.5] mb-[15px]">
            Это пример простой карточки с тенью, отступами и кнопкой.
            Попробуйте перевести её в Tailwind.
          </p>
          <button className="bg-[#3b82f6] text-stone-50 p-[8px 15px] rounded-[4px] border-none cursor-pointer">Подробнее</button>
      </div>
    </>
  )
}

export default App
