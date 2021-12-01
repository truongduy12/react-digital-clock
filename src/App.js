import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('vi-VN'));
  const [date, setDate] = useState(new Date().toLocaleDateString('vi-VN'));
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const randomColor = () => {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('vi-VN'));
      setDate(new Date().toLocaleDateString('vi-VN'));
      setStyle({
        backgroundColor: randomColor(),
        color: randomColor(),
      })
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className="wrapper" style={style}>
      <div className="date">{date}</div>
      <div className="time">{time}</div>
    </div>
  );
}

export default App;
