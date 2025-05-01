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

EXPOSE 3000

CMD ["serve", "build"]
