import logo from './logo.svg';
import '././App.css'; // css파일 import

function AppJSX() {
  const name = '제이크';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        // 객체 문법(Key와 Value)
        style={{ width: '200px', height: '200px' }}
        src='https://images.unsplash.com/photo-1678294076236-e734ebb87e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt='nature'
      />
    </>
  );
}

export default AppJSX;
