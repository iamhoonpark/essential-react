import React, { useContext } from 'react';
import './AppTheme.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

export default function AppTheme() {
    return (
        /**
         * 4) 어플리케이션 전체에 사용
         */
        <DarkModeProvider>
            <Header />
            <Main />
            <Footer />
        </DarkModeProvider>
    );
}

function Header() {
    return <header className='header'>Header</header>;
}

function Main() {
    return (
        <main className='main'>
            Main
            <Profile />
            <Products />
        </main>
    );
}

function Profile() {
    return (
        <div>
            Profile
            <User />
        </div>
    );
}

function User() {
    return <div>User</div>;
}

function Products() {
    return (
        <div>
            Products
            <ProductDetail />
        </div>
    );
}

function ProductDetail() {
    /**
     * 5) 실제 동작을 요하는 컴포넌트
     *    - value에서 선언된 객체(중괄호)로 받아오는 상태와 함수
     *    - DarkModeContext를 사용해서 useContext를 만듬
     */
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <div>
            Product Detail
            <p>
                DarkMode: {
                    darkMode 
                        ? (
                            <span style={{ backgroundColor: 'black', color: 'white' }}>
                                Dark Mode
                            </span>
                        ) 
                        : (
                            <span>Light Mode</span>
                        )
                }
            </p>
            <button onClick={() => toggleDarkMode()}>Toggle</button>
        </div>
    );
}

function Footer() {
    return <footer className='footer'>Footer</footer>;
}