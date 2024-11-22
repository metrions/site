import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TelegramLogin from "./components/TelegramLogin";
import axios from "axios";

const App = () => {
    const backend = "http://backend-web:8080";
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios.get(backend+"/user/getAllCommentsByUser").then((response) => {
            setComments(response.data);
        });
    }, [])
    const [newComment, setNewComment] = useState({ message: '', urlPhoto: localStorage.getItem('url_photo') || '', name: localStorage.getItem('username') || '' });
    const commentsEndRef = useRef(null);

    const setName = (name, urlPhoto) => {
        setNewComment((prev) => ({ ...prev, name, urlPhoto}));
        localStorage.setItem('username', name); // Сохраняем имя в localStorage
    };

    const setMessage = (message) => {
        setNewComment((prev) => ({ ...prev, message }));
    };

    const handleAddComment = () => {
        if (newComment.message.trim() && newComment.name.trim()) {
            setComments((prevComments) => [...prevComments, newComment]);
            setNewComment({ message: '', name: newComment.name, urlPhoto: newComment.urlPhoto}); // Сохраняем имя для следующего комментария
            axios.post(backend+"/user/saveComment", newComment).then((response) => {
            })
        }
    };

    useEffect(() => {
        commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [comments]);

    return (
        <div className="App">
            <header className="header">
                Интересный факт - Делаю эту работу в последний день сдачи
            </header>

            <div className="content-wrapper">
                <div className="main-content about-section">
                    <h1 className="title">Обо мне</h1>
                    <img
                        className="profile-image"
                        alt="Мое фото"
                        src="https://sun9-72.userapi.com/impg/AhyBv0upADVJTWmvWHr4rPfuOXgDFzcvufNPRQ/7K8QD3QlJgI.jpg?size=1280x960&quality=95&sign=d8826ad8bb6b3455861cf60b00639f41&type=album"
                    />
                    <div>
                        <p>
                            Меня зовут <span className="highlight">Панарин Илья</span>. Живу в{' '}
                            <span className="highlight">Новосибирске</span> — городе, где лед и мрак
                            сливаются в единое целое.
                        </p>
                        <p>
                            Не особо люблю фронтенд, но люблю бекенд, так как для меня он легче.
                        </p>
                    </div>

                    <h2>Образование</h2>
                    <p>
                        Учусь в <span className="highlight">НГТУ</span> на направлении{' '}
                        <span className="highlight">прикладная математика и информатика</span>. Мир чисел
                        и алгоритмов — это бесконечный поток, который затягивает и не отпускает.
                    </p>

                    <h2>Интересы</h2>
                    <p>
                        Временами порешиваю литкод, но денег мне за алгоритмы никто не платит, а платят — за постоянное
                        таскание JSONчиков.
                    </p>

                    <div className="links">
                        <div>
                            <p>Гитхаб</p>
                            <a href="https://github.com/devochkazaika" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="link-image"
                                    src="https://steamuserimages-a.akamaihd.net/ugc/1763693544760073122/3138F68A4243EDFF39AFDC32E6CEDFDF64CDB159/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                                    alt="Гитхаб"
                                />
                            </a>
                        </div>
                        <div>
                            <p>ВК</p>
                            <a href="https://vk.com/ne_nado_meny_zvat" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="link-image"
                                    src="https://i.pinimg.com/736x/d3/00/5c/d3005c63552de4875a78eef57307a77c.jpg"
                                    alt="ВК"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="comments-section">
                <h2>Комментарии</h2>
                    <TelegramLogin setUserName={setName}/>
                    <textarea
                        className="comment-input"
                        placeholder="Оставьте комментарий..."
                        value={newComment.message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="add-comment-button" onClick={handleAddComment}>
                        Добавить комментарий
                    </button>
                    <ul className="comments-list">
                        {comments.map((comment, index) => (
                            <li key={index} className="comment">
                                <div className="user">
                                    <img
                                        className="image-user"
                                        src={comment.urlPhoto}
                                    />
                                    <div className="text">{comment.name}:{comment.message}</div>
                                </div>
                            </li>
                        ))}
                        <div ref={commentsEndRef}/>
                    </ul>
                </div>
            </div>
            <footer className="footer">© 2024 Панарин Илья. Холод и дикие рофлы.</footer>
        </div>
    );
};

export default App;
