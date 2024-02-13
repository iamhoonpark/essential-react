import './App.css';

function AppPracticeJSX() {
  const name = '제이크';
  const list = ['딸기', '바나나', '오렌지', '포도'];
  return (
    <>
      <h1 className='orange'>{`Hello ${name}`}</h1>
      <ul>
        {
          list.map((item) => (<li>{item}</li>))
        }
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src="https://images.unsplash.com/photo-1682685797828-d3b2561deef4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="nature"
      />
    </>
  );
}

export default AppPracticeJSX;