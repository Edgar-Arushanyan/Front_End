import React from 'react';
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <header>
            <h1>Главная</h1>                               
                     <Link to="/about"><button>Контакты</button></Link>

                      {/* обёртка над тэгом <a>, в атрибуте to прописываем адрес,
                       при переходе на который отобразится другая страница */}
                                                        
                    <Link to="/users"><button>Пользователи</button></Link>                                 
        </header>
    );
}
export default Home;
