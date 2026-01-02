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

## Задание: 
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

## №2.Верстка по макету

### Задание:

Ссылка на макеты: https://www.figma.com/design/2bYk26AGVul7kLCxc1bnKr/Untitled?node-id=319-9&p=f&t=n8XUiT0X7VJUuQIv-0
З Макета

## №3 Адаптивность и состояния в Tailwind CSS
### №3.1 Адаптивность

Tailwind использует mobile-first подход. Проектируете сначала для мобильных, а потом адаптируете для больших экранов

|Префикс	|Размер (min-width)|Типичное устройство|
|-----------|------------------|-------------------|
|sm:		|640px			   |Большие телефоны   |
|md:		|768px			   |Планшеты           |
|lg:		|1024px			   |Ноутбуки           |
|xl:		|1280px			   |Десктопы           |
|2xl:		|1536px			   |Большие мониторы   |

### Пример: 

```html
<div class="
  flex flex-col      <!-- mobile: колонка -->
  md:flex-row        <!-- tablet+: строка -->
  p-4                <!-- mobile: padding 1rem -->
  md:p-6             <!-- tablet+: padding 1.5rem -->
  gap-4              <!-- mobile: gap 1rem -->
  md:gap-8           <!-- tablet+: gap 2rem -->
">
  <img class="
    w-full           <!-- mobile: 100% ширины -->
    md:w-1/3         <!-- tablet+: 33% ширины -->
    rounded-lg
  " src="...">
  <div class="
    text-center      <!-- mobile: текст по центру -->
    md:text-left     <!-- tablet+: текст слева -->
  ">
    <h2 class="
      text-xl        <!-- mobile: текст размера xl -->
      lg:text-2xl    <!-- desktop: текст размера 2xl -->
    ">Заголовок</h2>
  </div>
</div>
```
### №3.2 Псевдоклассы (Hover, Focus, Active)

|Префикс	 |CSS-эквивалент|Использование      |
|------------|--------------|-------------------|
|hover:		 |:hover		|Наведение курсора  |
|focus:		 |:focus		|Элемент в фокусе   |
|active:	 |:active		|Нажатие/активация  |
|visited:	 |:visited		|Посещенная ссылка  |
|checked:	 |:checked		|Отмеченный чекбокс |
|disabled:	 |:disabled		|Отключенный элемент|
|group-hover:|.group:hover *|Внутри группы      |

### Пример: 

```html

<button class="
  bg-blue-500          <!-- обычный фон -->
  hover:bg-blue-600    <!-- при наведении -->
  active:bg-blue-700   <!-- при нажатии -->
  focus:outline-none   <!-- убираем outline -->
  focus:ring-2         <!-- добавляем ring при фокусе -->
  focus:ring-blue-300  <!-- цвет ring -->
  focus:ring-offset-2  <!-- отступ ring -->
  transition-colors    <!-- плавный переход цветов -->
  duration-200         <!-- длительность 200ms -->
">
  Нажми меня
</button>
```

### Задание:
Адаптировать макеты из прошлого задания

---

## №4. Подход костамизации css утелит 

Theme variables подробнее на https://tailwindcss.com/docs/theme

Переменные theme - это специальные css переменные, определяемые с помощью директивы, которые влияют на наличие классов утилиты в вашем проекте.
Например, вы можете добавить новый цвет в проект, определив переменную темы, например: --color-mint-500

```css
@import "tailwindcss";
@theme {
  --color-mint-500: oklch(0.72 0.11 178);
}
```

Теперь вы можете использовать утилитарные классы:

```html
<div class="bg-mint-500">
  <!-- ... -->
</div>
```

### №4.1 Пространства имен в CSS-файлах 
#### №4.1.1 с @theme--color-* - Цвета

```css
@theme {
  --color-primary: #3b82f6;
  --color-primary-50: #eff6ff;
  --color-secondary: oklch(0.623 0.214 259.815);
}
```

Используется: color: var(--color-primary), bg-primary

#### №4.1.2 --spacing-* - Отступы

```css
@theme {
  --spacing-xs: 0.5rem;
  --spacing-13: 3.25rem;
  --spacing-screen: 100vw;
}
```
Используется: p-xs, m-13, w-screen

#### №4.1.3 --font-* - Шрифты

```css
@theme {
  --font-sans: 'Inter', system-ui;
  --font-display: 'Poppins', sans-serif;
  --font-mono: 'Fira Code', monospace;
}
```
Используется: font-sans, font-display

#### №4.1.4 --text-* - Размеры текста

```css
@theme {
  --text-xs: 0.75rem;
  --text-xs--line-height: 1rem;
  --text-2xl: 1.5rem;
  --text-2xl--line-height: 2rem;
}
```
Используется: text-xs, text-2xl

#### №4.1.5 --breakpoint-* - Брейкпоинты

```css
@theme {
  --breakpoint-xs: 480px;
  --breakpoint-3xl: 1920px;
}
```
Используется: xs:, 3xl:

#### №4.1.6 --radius-* - Скругления

```css
@theme {
  --radius-sm: 0.25rem;
  --radius-4xl: 2rem;
  --radius-full: 9999px;
}
```
Используется: rounded-sm, rounded-4xl

#### №4.1.7 --shadow-* - Тени

```css
@theme {
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```
Используется: shadow-sm, shadow-lg

#### №4.1.8 --animate-* и @keyframes - Анимации

```css
@theme {
  --animate-spin: spin 1s linear infinite;
  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes ping {
  75%, 100% { transform: scale(2); opacity: 0; }
}
```

#### №4.1.9 --blur-* - Размытие

```css
@theme {
  --blur-sm: 4px;
  --blur-xl: 24px;
}
```
Используется: blur-sm, blur-xl

### №4.2 @apply
Также через @apply можно задавать css своства каким то блокам на парямую в файле css

```css
body{
    @apply bg-black text-white
}
button{
    @apply cursor-pointer
}
input{
    @apply font-light
}
```

### Задание: 

1. Цветовая палитра:
    * Основной цвет бренда: #4F46E5 
    * Акцентный цвет: #10B981 
    * Фон светлый: #F8FAFC
    * Фон темный: #1E293B
    * Цвет текста светлый: #334155
    * Цвет текста темный: #F1F5F9

2. Типографика:
    * Основной шрифт: 'Inter'
    * Заголовочный шрифт: 'Playfair Display'
    * Моноширинный шрифт: 'JetBrains Mono'
    * Создать кастомный размер текста --text-lead для вводных абзацев

3. Отступы:
    * Маленький отступ: 0.75rem
    * Большой отступ: 3.5rem
    * Создать специальный отступ для секций: 5rem

4. Скругления:
    * Маленькое скругление: 0.375rem
    * Большое скругление: 1.5rem
    * Полное скругление для аватарок: 9999px

5. Тени:
    * Легкая тень для карточек

---

## №5 Реализовать макет с использованием Tailwind
ссылка: https://www.figma.com/design/ZHohpVwqROwi5gx0ZkJ5xk/Untitled?node-id=0-1&p=f&t=B7O3l4UCPMV3z1po-0
