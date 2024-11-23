# Этап сборки
FROM node:18-alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только необходимые файлы для установки зависимостей
COPY package.json package-lock.json ./

# Устанавливаем зависимости, включая dev-зависимости
RUN npm install

# Копируем весь исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Этап продакшн-образа
FROM node:18-alpine AS production

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем собранные файлы из предыдущего этапа
COPY --from=build /app/build ./build

# Устанавливаем сертификаты (убедитесь, что файлы доступны)
COPY ./certs/cert.pem /app/certs/fullchain.pem
COPY ./certs/decrypted_privkey.pem /app/certs/privkey.pem

# Устанавливаем HTTP-сервер (например, serve) для раздачи production файлов
RUN npm install -g serve

# Открываем порт для приложения
EXPOSE 443

# Запуск приложения через HTTPS
CMD ["serve", "-s", "build", "-l", "443", "--ssl-cert", "./certs/fullchain.pem", "--ssl-key", "./certs/privkey.pem"]
