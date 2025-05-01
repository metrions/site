FROM openjdk:17-jdk-slim

COPY /build/libs/*.jar /opt/service.jar

COPY config/application.yml /opt/application.yml

COPY config/keystore.p12 /opt/keystore.p12

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/opt/service.jar", \
    "--spring.config.location=/opt/application.yml", \
    "--server.ssl.key-store=/opt/keystore.p12", \
    "--server.ssl.key-store-password=changeit", \
    "--server.ssl.key-store-type=PKCS12", \
    "--server.port=8080"]
