# Этап сборки
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Этап production
FROM node:18-alpine

WORKDIR /app

# Устанавливаем только легковесный сервер
RUN npm install -g serve

# Копируем собранный билд
COPY --from=build /app/build /app/build

# Копируем сертификаты
COPY ./certs/cert.pem /app/certs/fullchain.pem
COPY ./certs/decrypted_privkey.pem /app/certs/privkey.pem

EXPOSE 3000

# Запуск собранного приложения через serve + HTTPS
CMD ["serve", "-s", "build", "--ssl-cert", "/app/certs/fullchain.pem", "--ssl-key", "/app/certs/privkey.pem", "-l", "3000"]
