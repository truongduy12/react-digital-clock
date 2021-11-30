import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('vi-VN'));
  const [date, setDate] = useState(new Date().toLocaleDateString('vi-VN'));
  useEffect(() => {
    let timer = setInterval(() =>  {
      setTime(new Date().toLocaleTimeString('vi-VN'));
      setDate(new Date().toLocaleDateString('vi-VN'))
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <div className="wrapper">
      <div className="date">{date}</div>
      <div className="time">{time}</div>
    </div>
  );
}

export default App;
