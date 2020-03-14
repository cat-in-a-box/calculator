import React from "react";
import "./App.css";
// Установил и импортировал Helmet, с помощью которого изменил page title.
// Насколько я понял, это самый простой способ менять его (как и атрибуты страницы) на реакте.
// А еще подгружает скрипты. Нормально.
import Header from "./Components/Header.jsx";
import Calculator from "./Components/Calculator.jsx";


function App() {
    return (
        <div className="App">
            <Header/>
            <Calculator/>
        </div>
    );
}

export default App;
