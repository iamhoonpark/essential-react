import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  // 이전 상태 값을 근거로 계산해야 하기 때문에 안전하게 이전 값을 받아서 진행
  // const handleClick = () => setCount(count + 1);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <div className='container'>
      <div className='banner'>
        Total Count: {count} {count > 10 ? '🔥' : '❄️'}
      </div>
      <div className='counters'>
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </div>
  );
}