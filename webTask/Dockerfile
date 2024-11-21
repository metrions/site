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

# Копируем из предыдущего этапа только установленные зависимости и собранный код
COPY --from=build /app /app

# Открываем порт для приложения
EXPOSE 3000

# Запуск приложения
CMD ["npm", "start"]
