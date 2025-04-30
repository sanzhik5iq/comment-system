// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Обновляем импорт
// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем Bootstrap
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Создаем корень приложения
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим компонент с помощью createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
