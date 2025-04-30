FROM openjdk:17-jdk-slim
VOLUME /tmp

COPY /build/libs/*.jar /opt/service.jar
COPY config/application.yml /opt/application.yml

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/opt/service.jar", "--spring.config.location=/opt/application.yml"]
