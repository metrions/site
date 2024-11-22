# Этап сборки
FROM node:18-alpine AS build

WORKDIR /app

# Копируем только необходимые файлы для установки зависимостей
COPY package.json package-lock.json ./

# Устанавливаем зависимости (без dev-зависимостей)
RUN npm install --production

# Копируем весь исходный код
COPY . .

# Этап продакшн-образа
FROM node:18-alpine AS production

WORKDIR /app

# Устанавливаем переменные окружения для сертификатов
ENV HTTPS=true
ENV SSL_CRT_FILE=./certs/fullchain.pem
ENV SSL_KEY_FILE=./certs/privkey.pem

# Копируем из предыдущего этапа только установленные зависимости и собранный код
COPY --from=build /app /app
COPY ./certs/fullchain.pem ./certs/fullchain.pem
COPY ./certs/privkey.pem ./certs/privkey.pem

# Открываем порт для приложения
EXPOSE 3000

# Запуск приложения
CMD ["npm", "start"]
