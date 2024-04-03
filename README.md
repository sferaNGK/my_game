# Своя игра

### Для работы необходим сервер

Ссылка - [MyGame-Backend](https://github.com/Palldanerar/MyGame-Backend)

### Стек технологий

- React
- TypeScript
- tailwindCSS
- react-router-dom
- react-hot-toast
- socket.io-client

### Пример данных для игры

``` javascript
const dataGame = {
    // название общей темы игры
    title: "Россия",
    // Массив тем
    topics: [
        {
            // Название полонки
            title: "География",
            // Массив вопросов
            questions: [
                {
                    // Вопрос
                    question: "Какой город является столицей России?",
                    // Ответ
                    answer: "Москва",
                    // Количество очков
                    points: 100,
                    // Делает вопрос недоступным если он уже использовался
                    isHidden: false,
                },
                {
                    question: "Как называется самый высокий действующий вулкан в РФ?",
                    answer: "Ключевская сопка",
                    points: 200,
                    isHidden: false,
                },
                {
                    question: "Сколько среди регионов России автономных округов?",
                    answer: 4,
                    points: 300,
                    isHidden: false,
                },
                {
                    question: "Назовите самую северную точку России и всей Евразии.",
                    answer: "Мыс Флигели",
                    points: 400,
                    isHidden: false,
                },
                {
                    question: "Где находится самая низкая точка России относительно уровня моря?",
                    answer: "Прикаспийская низменность",
                    points: 500,
                    isHidden: false,
                }
            ]
        }
    ]
}
```
