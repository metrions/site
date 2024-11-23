package web.web;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(
                        "http://localhost:3000",
                        "https://panarin.site:3000",
                        "https://9b6d-2a0d-6c2-17-8038-00.ngrok-free.app"
                )
                .allowedMethods("*")
                .allowCredentials(true); // Если используется авторизация через cookie
    }

}