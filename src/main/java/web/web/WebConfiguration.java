package web.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {
    @Value("${frontend}")
    String frontend;
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(
                        frontend,
                        "http://localhost:3000",
                        "https://panarin.site:3000",
                        "https://b9c2-2a03-6f02-00-8920.ngrok-free.app",
                        "https://94.241.174.238:3000"
                )
                .allowedMethods("*")
                .allowCredentials(true); // Если используется авторизация через cookie
    }

}