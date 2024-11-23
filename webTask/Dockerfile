# Этап сборки
FROM node:18-alpine AS build

WORKDIR /app

# Копируем только необходимые файлы для установки зависимостей
COPY package.json package-lock.json ./

# Устанавливаем все зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Этап production
FROM node:18-alpine

WORKDIR /app

# Устанавливаем переменные окружения для HTTPS
#ENV HTTPS=true
#ENV SSL_CRT_FILE=/app/certs/fullchain.pem
#ENV SSL_KEY_FILE=/app/certs/privkey.pem

# Копируем файлы из предыдущего этапа
COPY --from=build /app /app

# Копируем сертификаты
COPY ./certs/cert.pem /app/certs/fullchain.pem
COPY ./certs/decrypted_privkey.pem /app/certs/privkey.pem

# Открываем порт 3000
EXPOSE 3000

# Запуск приложения в режиме разработки с HTTPS
CMD ["npm", "start"]
