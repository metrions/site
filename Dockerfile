FROM openjdk:17-jdk-slim

# Копируем JAR файл и конфигурационный файл в контейнер
COPY ./config/web-0.0.1-SNAPSHOT.jar /opt/service.jar
COPY ./config/application.yml /opt/application.yml

# Открытие порта 8080
EXPOSE 8080

# Установка правильной команды запуска
ENTRYPOINT ["java", "-jar", "/opt/service.jar"]
CMD ["--spring.config.location=/opt/application.yml"]