import React from 'react';

// 컴포넌트: 외부 상태와 연결되지 않는 고립된, 독립적이며 재사용성이 뛰어남
export default function Profile({ image, name, title }) {
  return (
    <div className='profile'>
      <img className='photo' src={image} alt='avatar' />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
