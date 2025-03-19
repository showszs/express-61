# Працює на порті 3000
## Сервер виконує логування запитів (morgan) та валідацію отриманих юзерів за допомогою validateUserPost  а індетифікаторів (users/:userId) за допомогою validateUserPut використовуючи celebrate та Joi.

## Також виконує валідацію параметрів(індетифікаторів)
1. Встановлення залежностей `npm install`
2. Запуск сервера в режимі розробки nodemon `npm run dev`
## Маршрути для користувача (/users)
`GET /users – отримати користувачів.`

## Маршрути для конкретного користувача (/users/:userId)
`GET /users/:userId – отримати користувача за userId.`

`PUT /users/:userId – оновити користувача за userId.`

`DELETE /users/:userId – видалити користувача за userId.`
## Маршрути для статей (/articles)
`GET /articles – отримати всі статті.`

`POST /articles – створити нову статтю.`
## Маршрути для конкретної статті (/articles/:articleId)
`GET /articles/:articleId – отримати статтю за articleId.`

`PUT /articles/:articleId – оновити статтю за articleId.`

`DELETE /articles/:articleId – видалити статтю за articleId.`


## 
