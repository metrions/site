import React, { useEffect } from 'react';

const TelegramLogin = ({ setUserName }) => {
    useEffect(() => {
        // Проверяем, если виджет уже добавлен, то ничего не делаем
        if (document.getElementById('telegram-widget-script')) return;

        // Глобальная функция авторизации
        window.onTelegramAuth = (user) => {
            const username = user.username || `${user.first_name} ${user.last_name}`;
            const photo_url = user.photo_url || `${user.urlPhoto}`;
            setUserName(username, photo_url); // Устанавливаем имя пользователя
            localStorage.setItem('username', username); // Сохраняем имя в localStorage
            localStorage.setItem('url_photo', photo_url);
        };

        // Добавляем скрипт виджета Telegram
        const script = document.createElement('script');
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.async = true;
        script.id = 'telegram-widget-script'; // Уникальный ID для проверки
        script.setAttribute('data-telegram-login', 'webLab121_bot');
        script.setAttribute('data-size', 'medium');
        script.setAttribute('data-onauth', 'onTelegramAuth(user)');
        script.setAttribute('data-request-access', 'write');
        document.getElementById('telegram-login-container').appendChild(script);
    }, [setUserName]); // Этот useEffect срабатывает только при монтировании

    return <div id="telegram-login-container"></div>;
};

export default TelegramLogin;
