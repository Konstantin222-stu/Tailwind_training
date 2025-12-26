# Tailwind CSS — конспект и практические задания

## 1. Базовые стили

### Соответствие CSS свойств и классов Tailwind

| CSS свойство                     | Класс Tailwind          |
|---------------------------------|-------------------------|
| margin: 1rem;                   | m-4                     |
| padding: 0.5rem;                | p-2                     |
| color: #ef4444;                 | text-red-500            |
| background-color: #3b82f6;      | bg-blue-500             |
| font-size: 1.125rem;            | text-lg                 |
| font-weight: 700;               | font-bold               |
| border: 1px solid #d1d5db;      | border border-gray-300  |
| border-radius: 0.5rem;          | rounded-lg              |
| display: flex;                  | flex                    |
| justify-content: center;        | justify-center           |

так же такие свойства как цвет/размер и тд можно задавать вручную:
text-[#3b82f6], text-[42px]

---

## Практическое упражнение  
Переверстать блоки с чистого CSS на Tailwind.

### №1.1 Карточка


```html
<style>
    .card {
        width: 300px;
        padding: 20px;
        background-color: rgb(218, 192, 192);
        border-radius: 8px;
        font-family: sans-serif;
    }
    
    .card-title {
        font-size: 24px;
        margin-bottom: 10px;
        color: #1f2937;
    }
    
    .card-text {
        color: #4f5a69;
        line-height: 1.5;
        margin-bottom: 15px;
    }
    
    .card-button {
        background-color: #3b82f6;
        color: white;
        padding: 8px 16px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
    }
</style>
<body>
    <div class="card">
        <h3 class="card-title">Заголовок карточки</h3>
        <p class="card-text">Это пример простой карточки с тенью, отступами и кнопкой. Попробуйте перевести её в Tailwind.</p>
        <button class="card-button">Подробнее</button>
    </div>
</body>

```
---

### №1.2 Навигационная панель

```html

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 24px;
        background-color: #384b66;
        color: white;
        font-family: sans-serif;
    }
    
    .logo {
        font-size: 1.5rem;
        font-weight: bold;
        color: #60a5fa;
    }
    
    .nav-links {
        display: flex;
        gap: 20px;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    .nav-link {
        color: #e5e7eb;
        text-decoration: none;
        padding: 6px 12px;
        border-radius: 4px;
    }
    
    .nav-link:hover {
        background-color: #374151;
    }
</style>
<body>
  <nav class="navbar">
      <div class="logo">Лого</div>

      <ul class="nav-links">
          <li><a href="#" class="nav-link active">Главная</a></li>
          <li><a href="#" class="nav-link">О нас</a></li>
          <li><a href="#" class="nav-link">Услуги</a></li>
          <li><a href="#" class="nav-link">Контакты</a></li>
      </ul>

      <span>Алексей</span>
  </nav>
</body>

```
---

### №1.3 Grid (изучить grid в Tailwind)


```html

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        font-family: sans-serif;
    }
    
    .grid-title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 30px;
        text-align: center;
        color: #111827;
    }
    
    .products-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }
    
    .product-card {
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .product-image {
        width: 100%;
        height: 200px;
        background-color: #d1d5db;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6b7280;
        font-size: 1.2rem;
    }
    
    .product-content {
        padding: 20px;
    }
    
    .product-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 8px;
        color: #1f2937;
    }
    
    .product-description {
        color: #6b7280;
        margin-bottom: 16px;
        line-height: 1.5;
    }
    
    .product-price {
        font-size: 1.5rem;
        font-weight: bold;
        color: #059669;
    }
</style>
<body>
  <div class="container">
      <h2 class="grid-title">Наши продукты</h2>

      <div class="products-grid">
          <div class="product-card">
              <div class="product-image">Изображение продукта</div>
              <div class="product-content">
                  <h3 class="product-title">Ноутбук Pro</h3>
                  <p class="product-description">Мощный ноутбук для работы и творчества с экраном Retina.</p>
                  <div class="product-price">89 999 ₽</div>
              </div>
          </div>
          
          <div class="product-card">
              <div class="product-image">Изображение продукта</div>
              <div class="product-content">
                  <h3 class="product-title">Смартфон X</h3>
                  <p class="product-description">Флагманский смартфон с камерой 108 МП и OLED-экраном.</p>
                  <div class="product-price">64 999 ₽</div>
              </div>
          </div>
          
          <div class="product-card">
              <div class="product-image">Изображение продукта</div>
              <div class="product-content">
                  <h3 class="product-title">Наушники Max</h3>
                  <p class="product-description">Беспроводные наушники с шумоподавлением и 30-часовой работой.</p>
                  <div class="product-price">24 999 ₽</div>
              </div>
          </div>
      </div>
  </div>
</body>

```
---

### №2.Верстка по макету

Ссылка на макеты: https://www.figma.com/design/2bYk26AGVul7kLCxc1bnKr/Untitled?node-id=319-9&p=f&t=n8XUiT0X7VJUuQIv-0

З задачи

### №2. COMPONENTS слой - для повторяющихся компонентов 

```css

@layer components {
  /* Кнопки */
  .btn {
    @apply px-4 py-2 rounded font-medium 
           transition-colors duration-200 
           focus:outline-none focus:ring-2 
           focus:ring-offset-2;
  }
  
  .btn-primary {
    @apply btn bg-blue-600 text-white 
           hover:bg-blue-700 
           focus:ring-blue-500;
  }
  
  .btn-secondary {
    @apply btn bg-gray-200 text-gray-800 
           hover:bg-gray-300 
           focus:ring-gray-400;
  }
  
  /* Карточки */
  .card {
    @apply bg-white rounded-lg shadow-md 
           p-6 border border-gray-200;
  }
  
  .card-hover {
    @apply card transition-shadow duration-300 
           hover:shadow-lg;
  }
  
  /* Формы */
  .input {
    @apply w-full px-3 py-2 border border-gray-300 
           rounded-md focus:outline-none 
           focus:ring-2 focus:ring-blue-500 
           focus:border-transparent;
  }
  
  .label {
    @apply block text-sm font-medium text-gray-700 mb-1;
  }
}
```
---

### №3. UTILITIES слой - для кастомных утилит

```css

@layer utilities {
  /* Кастомные утилиты */
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .text-shadow-lg {
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  /* Анимации */
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-in;
  }
  
  /* Кастомные варианты существующих утилит */
  .bg-gradient-brand {
    @apply bg-gradient-to-r from-purple-600 to-pink-600;
  }
  
  /* Комплексные утилиты */
  .scrollbar-thin {
    scrollbar-width: thin;
  }
  
  .scrollbar-thin::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  .scrollbar-thin::-webkit-scrollbar-thumb {
    @apply bg-gray-300 rounded-full;
  }
  
  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
    @apply bg-gray-400;
  }
}
```

Директива @apply - это директива, которая "встраивает" утилиты Tailwind в ваш кастомный CSS класс.

---

### №4 Практическое задание: cоздать систему компонентов для блога

В @layer base задать стили для:
Заголовков h1-h6
Ссылок a

В @layer components создать:
.article-card с изображением, заголовком, описанием
.tag для тегов статей

В @layer utilities добавить:
.text-balance для балансировки текста
.gradient-text с градиентом

---

### №5 Реализовать макет с использованием Tailwind
ссылка: https://www.figma.com/design/ZHohpVwqROwi5gx0ZkJ5xk/Untitled?node-id=0-1&p=f&t=B7O3l4UCPMV3z1po-0





