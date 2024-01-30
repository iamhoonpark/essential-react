import logo from './logo.svg';
import './App.css';

function App() {
  const name = '제이크';
  return (
    <>
      <h1 className='orange'>Hello World</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        <li>딸기</li>
        <li>바나나</li>
        <li>오렌지</li>
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src="https://images.unsplash.com/photo-1682685797828-d3b2561deef4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="nature"
      />
    </>
  );
}

export default App;
